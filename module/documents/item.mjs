/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class ShinobiItem extends Item {
  /**
   * Augment the basic Item data model with additional dynamic data.
   */
  prepareData() {
    // As with the actor class, items are documents that can have their data
    // preparation methods overridden (such as prepareBaseData()).
    super.prepareData();

  }

  /**
   * Prepare a data object which defines the data schema used by dice roll commands against this Item
   * @override
   */
  getRollData() {
    // Starts off by populating the roll data with `this.system`
    const rollData = { ...super.getRollData() };

    // Quit early if there's no parent actor
    if (!this.actor) return rollData;

    // If present, add the actor's roll data
    rollData.actor = this.actor.getRollData();

    return rollData;
  }

	/**
	 * Prepare an object of chat data used to display a card for the Item in the chat log.
	 * @param {object} htmlOptions    Options used by the TextEditor.enrichHTML function.
	 * @returns {object}              An object of chat data to render.
	 */
	async getChatData(htmlOptions = {}) {
		const data = this.toObject().system;

		// Rich text description
		data.description = await TextEditor.enrichHTML(data.description, {
			relativeTo: this,
			rollData: this.getRollData(),
			...htmlOptions,
		});

		// Type specific properties
		// data.properties = [
		//   ...this.system.chatProperties ?? [],
		//   ...this.system.equippableItemChatProperties ?? [],
		//   ...this.system.activatedEffectChatProperties ?? []
		// ].filter(p => p);

		return data;
	}

  /**
   * Handle clickable rolls.
   * @param {Event} event   The originating click event
   * @private
   */
  async roll() {
    const item = this;

    // Initialize chat data.
    const speaker = ChatMessage.getSpeaker({ actor: this.actor });
    const rollMode = game.settings.get('core', 'rollMode');
    // const label = `[${item.type}] ${item.name}`;
		const token = this.actor.token;
	
		const templateData = {
			actor: this.actor,
			tokenId: token?.uuid || null,
			item: this,
			data: await this.getChatData(),
			labels: this.labels,
			system: [],
			info: [],
		};

		if (item.type == 'armas') {
			if (this.system?.detalhes?.caract?.improvisada) templateData.info.push("Improvisada");
			if (this.system?.detalhes?.caract?.armaDupla) templateData.info.push("Arma Dupla");
			if (this.system?.detalhes?.caract?.arremessavel) templateData.info.push("Arremessável");
			if (this.system?.detalhes?.caract?.duasMaos) templateData.info.push("Duas Mãos");
			if (this.system?.detalhes?.caract?.energizavel) templateData.info.push("Energizável");
			if (this.system?.detalhes?.caract?.ambidestra) templateData.info.push("Ambidestra");
			if (this.system?.detalhes?.caract?.acuidade) templateData.info.push("Acuidade");
		}

    // If there's no roll data, send a chat message.
    if (!this.system.formula) {
      ChatMessage.create({
        speaker: speaker,
        rollMode: rollMode,
        // flavor: label,
        content: await renderTemplate('systems/shinobiNoSho/templates/chat/item-card.hbs', templateData),
      });
    }
    // Otherwise, create a roll and send a chat message from it.
    else {
      // Retrieve roll data.
      const rollData = this.getRollData();

      // Invoke the roll and submit it to chat.
      const roll = new Roll(rollData.formula, rollData);
      // If you need to store the value first, uncomment the next line.
      // const result = await roll.evaluate();
      roll.toMessage({
        speaker: speaker,
        rollMode: rollMode,
        flavor: label,
      });
      return roll;
    }
  }
}

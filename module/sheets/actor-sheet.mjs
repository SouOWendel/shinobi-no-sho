import {
  onManageActiveEffect,
  prepareActiveEffectCategories,
} from '../helpers/effects.mjs';

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class ShinobiActorSheet extends ActorSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['shinobiNoSho', 'sheet', 'actor'],
      width: 600,
      height: 820,
      tabs: [
        {
          navSelector: '.sheet-tabs',
          contentSelector: '.sheet-body',
          initial: 'combate',
        },
				{
          navSelector: '.sub-tabs',
          contentSelector: '.sub-body',
          initial: 'historia',
        },
				{
          navSelector: '.pericias-sheet-tabs',
          contentSelector: '.pericias-sheet-body',
          initial: 'gerais',
        }
      ],
    });
  }

  /** @override */
  get template() {
		const type = this.actor.type.toLowerCase();
    return `systems/shinobinosho/templates/actor/actor-${type}-sheet.hbs`;
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    // Retrieve the data structure from the base sheet. You can inspect or log
    // the context variable to see the structure, but some key properties for
    // sheets are the actor object, the data object, whether or not it's
    // editable, the items array, and the effects array.
    const context = super.getData();

    // Use a safe clone of the actor data for further operations.
    const actorData = context.data;

    // Add the actor's data to context.data for easier access, as well as flags.
    context.system = actorData.system;
    context.flags = actorData.flags;

		// Dropdown
		context.periciasGerais = CONFIG.shinobiNoSho.skills.geral;
		context.periciasSociais = CONFIG.shinobiNoSho.skills.social;
		context.atributos = CONFIG.shinobiNoSho.abilities;
		context.atributosAbv = CONFIG.shinobiNoSho.abilityAbbreviations;
		context.habilidadesCombate = CONFIG.shinobiNoSho.combatAbilities;
		context.header = CONFIG.shinobiNoSho.header;
		context.socialCustom = CONFIG.shinobiNoSho.periciasSociaisCustom;

    // Prepare character data and items.
    if (actorData.type == 'Ninja') {
      this._prepareItems(context);
      this._prepareCharacterData(context);
    }

    // Add roll data for TinyMCE editors.
    context.rollData = context.actor.getRollData();

    // Prepare active effects
    context.effects = prepareActiveEffectCategories(
      // A generator that returns all effects stored on the actor
      // as well as any items
      this.actor.allApplicableEffects()
    );

    return context;
  }

  /**
   * Organize and classify Items for Character sheets.
   *
   * @param {Object} actorData The actor to prepare.
   *
   * @return {undefined}
   */
  _prepareCharacterData(context) {
    // Handle ability scores.
    for (let [k, v] of Object.entries(context.system.abilities)) {
      v.label = game.i18n.localize(CONFIG.shinobiNoSho.abilities[k]) ?? k;
    }

		for (let [k, v] of Object.entries(context.system.skills.geral)) {
      v.label = game.i18n.localize(CONFIG.shinobiNoSho.skills.geral[k]) ?? k;
			if (v.caract.treinada) v.label += "+";
			if (v.caract.armadura) v.label += "*";
    }

		for (let [k, v] of Object.entries(context.system.skills.social)) {
      v.label = game.i18n.localize(CONFIG.shinobiNoSho.skills.social[k]) ?? k;
			if (v.caract.treinada) v.label += "+";
			if (v.caract.armadura) v.label += "*";
    }
  }

  /**
   * Organize and classify Items for Character sheets.
   *
   * @param {Object} actorData The actor to prepare.
   *
   * @return {undefined}
   */
  _prepareItems(context) {
    // Initialize containers.
    const armas = [];
    const armaduras = [];
    const gerais = [];
		const aptidoes = [];
		const poderes = [];
		const tecnicas = [];

    for (let i of context.items) {
      i.img = i.img || Item.DEFAULT_ICON;
      if (i.type === 'armas') { armas.push(i); }
      else if (i.type === 'armaduras') { armaduras.push(i); }
			else if (i.type === 'gerais') { gerais.push(i); }
			else if (i.type === 'aptidoes') { aptidoes.push(i); }
			else if (i.type === 'poderes') { poderes.push(i); }
			else if (i.type === 'tecnicas') { tecnicas.push(i); }
    }

    // Assign and return
    context.armas = armas;
    context.armaduras = armaduras;
    context.gerais = gerais;
		context.aptidoes = aptidoes;
    context.poderes = poderes;
    context.tecnicas = tecnicas;
  }

	/** @inheritDoc */
	_getSubmitData(updateData = {}) {
		const formData = foundry.utils.expandObject(
			super._getSubmitData(updateData),
		);

		// Handle Family array
		const biografia = formData.system?.details?.biografia;
		if (biografia) {
			biografia.familia = Object.values(biografia?.familia || {}).map((d) => [
				d[0] || '', d[1] || '', d[2] || '', d[3] || '', d[4] || '' ]);
		}

		// Return the flattened submission data
		return foundry.utils.flattenObject(formData);
	}

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Render the item sheet for viewing/editing prior to the editable check.
    html.on('click', '.item-edit', (ev) => {
      const li = $(ev.currentTarget).parents('.item');
      const item = this.actor.items.get(li.data('itemId'));
      item.sheet.render(true);
    });

    // -------------------------------------------------------------
    // Everything below here is only needed if the sheet is editable
    if (!this.isEditable) return;

    // Add Inventory Item
    html.on('click', '.item-create', this._onItemCreate.bind(this));

    // Delete Inventory Item
    html.on('click', '.item-delete', (ev) => {
      const li = $(ev.currentTarget).parents('.item');
      const item = this.actor.items.get(li.data('itemId'));
      item.delete();
      li.slideUp(200, () => this.render(false));
    });

		// Relations Handler
		html.find('.relations-control').click(this._onRelationsControl.bind(this));

    // Active Effect management
    html.on('click', '.effect-control', (ev) => {
      const row = ev.currentTarget.closest('li');
      const document =
        row.dataset.parentId === this.actor.id
          ? this.actor
          : this.actor.items.get(row.dataset.parentId);
      onManageActiveEffect(ev, document);
    });

    // Rollable abilities.
    html.on('click', '.rollable', this._onRoll.bind(this));

    // Drag events for macros.
    if (this.actor.isOwner) {
      let handler = (ev) => this._onDragStart(ev);
      html.find('li.item').each((i, li) => {
        if (li.classList.contains('inventory-header')) return;
        li.setAttribute('draggable', true);
        li.addEventListener('dragstart', handler, false);
      });
    }
  }

	async _onRelationsControl(event){
		event.preventDefault();
		const a = event.currentTarget;

		if (a.classList.contains('add-relation')) {
			await this._onSubmit(event);
			const family = this.actor.system.details.biografia.familia;
			return this.actor.update({
				'system.details.biografia.familia': family.concat([['','','','','']]),
			});
		}

		if (a.classList.contains('delete-relation')) {
			await this._onSubmit(event);
			const html = a.closest('.relation-part');
			const family = foundry.utils.deepClone(this.actor.system.details.biografia.familia);
			family.splice(Number(html.dataset.relationPart), 1);
			return this.actor.update({'system.details.biografia.familia': family});
		}
	}

  /**
   * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
   * @param {Event} event   The originating click event
   * @private
   */
  async _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    // Get the type of item to create.
    const type = header.dataset.type;
    // Grab any data associated with this control.
    const data = duplicate(header.dataset);
    // Initialize a default name.
    const name = `Novo(a) ${type.capitalize()}`;
    // Prepare the item object.
    const itemData = {
      name: name,
      type: type,
      system: data,
    };
    // Remove the type from the dataset since it's in the itemData.type prop.
    delete itemData.system['type'];

    // Finally, create the item!
    return await Item.create(itemData, { parent: this.actor });
  }

  /**
   * Handle clickable rolls.
   * @param {Event} event   The originating click event
   * @private
   */
  _onRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;
		const context = super.getData();
    // Use a safe clone of the actor data for further operations.
    const actorData = context.data;
    // Add the actor's data to context.data for easier access, as well as flags.
    const system = actorData.system;

    // Handle item rolls.
    if (dataset.rollType) {
      if (dataset.rollType == 'item') {
        const itemId = element.closest('.item').dataset.itemId;
        const item = this.actor.items.get(itemId);
        if (item) return item.roll();
      }

			if (dataset.rollType == 'ability' && dataset.key) {
				const data = system.abilities[dataset.key];
				const formula = ['1d8', dataset.roll, data.tbonus];
				const formulaStr = formula.join('+');
				let label =  'Fazendo um teste de ' + game.i18n.localize(`shinobiNoSho.ability.${dataset.key}.long`) + '.';
        let roll = new Roll(formulaStr, this.actor.getRollData());
				roll.toMessage({
					speaker: ChatMessage.getSpeaker({ actor: this.actor }),
					flavor: label,
					rollMode: game.settings.get('core', 'rollMode'),
				});
				return roll;
      }
    }

    // Handle rolls that supply the formula directly.
    if (dataset.roll) {
      let label = dataset.label ? `[ability] ${dataset.label}` : '';
      let roll = new Roll(dataset.roll, this.actor.getRollData());
      roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: label,
        rollMode: game.settings.get('core', 'rollMode'),
      });
      return roll;
    }
  }

	/* -------------------------------------------- */

	/* -------------------------------------------- */
	/*  Form Submission                             */
	/* -------------------------------------------- */

	/** @inheritdoc */
	async _onSubmit(...args) {
		await super._onSubmit(...args);
	}

	/* -------------------------------------------- */
}

/**
 * Extend the base Actor document by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class ShinobiActor extends Actor {
  /** @override */
  prepareData() {
    // Prepare data for the actor. Calling the super version of this executes
    // the following, in order: data reset (to clear active effects),
    // prepareBaseData(), prepareEmbeddedDocuments() (including active effects),
    // prepareDerivedData().
    super.prepareData();
  }

  /** @override */
  prepareBaseData() {
    // Data modifications in this step occur before processing embedded
    // documents or derived data.
		const actorData = this;
		this._prepareNinjaBase(actorData);
  }

  /**
   * @override
   * Augment the actor source data with additional dynamic data. Typically,
   * you'll want to handle most of your calculated/derived data in this step.
   * Data calculated in this step should generally not exist in template.json
   * (such as ability modifiers rather than ability scores) and should be
   * available both inside and outside of character sheets (such as if an actor
   * is queried and has a roll executed directly from it).
   */
  prepareDerivedData() {
    const actorData = this;
    const systemData = actorData.system;
    const flags = actorData.flags.shinobi || {};

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
		this._prepareNinjaDerived(actorData);
    this._prepareNpcData(actorData);
  }

  _prepareNinjaBase(actorData) {
    if (actorData.type !== 'Ninja') return;

    const system = actorData.system;
		const details = system.details;
		const attributes = system.attributes;
		const abilities = system.abilities;
  }

	_prepareNinjaDerived(actorData) {
		const system = actorData.system;
		const details = system.details;
		const attributes = system.attributes;
		const abilities = system.abilities;

		// const systemClone = actorData.system.deepClone();
		// Loop de Atributos
		for (let [abilityKey, ability] of Object.entries(system.abilities)) {
			// Soma de bônus em atributos
			ability.tbonus = ability.value + ability.bonus;
			// Perícias Gerais
			for (let [skillKey, skill] of Object.entries(system.skills.geral)) {
				// Soma de bônus em perícias
				skill.tbonus = skill.value + skill.bonus;
				// Recuperação do atributo correspondente e divisão por dois.
				if (skill.ability == abilityKey) skill.abilityValue = ability.tbonus / 2;
				// Soma do atributo derivado + total derivado.
				skill.total = Math.round(skill.abilityValue + skill.tbonus);
			}

			// Perícias Sociais
			for (let [skillKey, skill] of Object.entries(system.skills.social)) {
				// Soma de bônus em perícias
				skill.tbonus = skill.value + skill.bonus;
				// Recuperação do atributo correspondente e divisão por dois.
				if (skill.ability == abilityKey) {
					console.log(skill.ability, abilityKey);
					skill.abilityValue = ability.tbonus / 2;
				}
				// Soma do atributo derivado + total derivado.
				skill.total = Math.round(skill.abilityValue + skill.tbonus);
			}
		}
		// Vitalidade e Chakra
		attributes.vitalidade.max = 10 + 3*abilities.vig.tbonus + 5*details.nivelCampanha;
		attributes.chakra.max = 10 + 3*abilities.esp.tbonus;
	}

  /**
   * Prepare NPC type specific data.
   */
  _prepareNpcData(actorData) {
    if (actorData.type !== 'npc') return;

    // Make modifications to data here. For example:
    const systemData = actorData.system;
    systemData.xp = systemData.cr * systemData.cr * 100;

		// Loop through ability scores, and add their modifiers to our sheet output.
    // for (let [key, ability] of Object.entries(systemData.abilities)) {
    //   // Calculate the modifier using d20 rules.
    //   ability.mod = Math.floor((ability.value - 10) / 2);
    // }
  }

  /**
   * Override getRollData() that's supplied to rolls.
   */
  getRollData() {
    // Starts off by populating the roll data with `this.system`
    const data = { ...super.getRollData() };

    // Prepare character roll data.
    this._getCharacterRollData(data);
    this._getNpcRollData(data);

    return data;
  }

  /**
   * Prepare character roll data.
   */
  _getCharacterRollData(data) {
    if (this.type !== 'ninja') return;

    // Copy the ability scores to the top level, so that rolls can use
    // formulas like `@str.mod + 4`.
    // if (data.abilities) {
    //   for (let [k, v] of Object.entries(data.abilities)) {
    //     data[k] = foundry.utils.deepClone(v);
    //   }
    // }

    // Add level for easier access, or fall back to 0.
    // if (data.attributes.level) {
    //   data.lvl = data.attributes.level.value ?? 0;
    // }
  }

  /**
   * Prepare NPC roll data.
   */
  _getNpcRollData(data) {
    if (this.type !== 'npc') return;

    // Process additional NPC data here.
  }
}

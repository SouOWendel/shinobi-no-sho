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

	prepareEmbbededData() {
		// TODOS OS ITENS
		// TODOS OS EFEITOS
		// applyActiveEffects();
	}

	prepareDerivedData() {
		this._prepareNinjaDerived(this);
		this.items.forEach(i => i._prepareTemplate(i));
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
		for (let [abilityKey, ability] of Object.entries(abilities)) {
			// Soma de bônus em atributos
			ability.tbonus = ability.value + ability.bonus;

			// Perícias Gerais
			for (let [skillKey, skill] of Object.entries(system.skills.geral)) {				
				if (skill.ability == abilityKey) {
					// Soma de bônus em perícias
					skill.tbonus = skill.value + skill.bonus;
					// Recuperação do atributo correspondente e divisão por dois.
					skill.abilityValue = ability.tbonus / 2;
					// Soma do atributo derivado + total derivado.
					skill.total = Math.round(skill.abilityValue + skill.tbonus);

					// Perícia para Iniciativa
					if (attributes.init.skill == skillKey) {
						attributes.init.total = skill.total;
					}
				}
			}
		}

		for (let [abilityKey, ability] of Object.entries(abilities)) {

			// Perícias Sociais
			for (let [skillKey, skill] of Object.entries(system.skills.social)) {
				if (skill.custom == abilityKey) {
					// Recuperação do atributo correspondente e divisão por dois.
					skill.customValue = Math.round(ability.tbonus / 2);
				} 
				if (skill.custom == "arte") {
					skill.customValue = Math.round(system.skills.geral.arte.total / 2);
				}

				if (skill.ability == abilityKey) {
					// Soma de bônus em perícias
					skill.tbonus = skill.value + skill.bonus;
					skill.total = ability.tbonus + skill.tbonus + skill?.customValue;
				}
			}

		// Habilidades de Combate
			for (let [cKey, c] of Object.entries(abilities.combate)) {
				// Soma de bônus em perícias
				if (c.ability == abilityKey) {
					c.total = c.base + Number(c.value) + c.bonus;
					c.total = c.total + ability.tbonus;

					// Cálculo de Esquiva
					if (attributes.reacaoEsquiva.combatAbility == cKey) {
						attributes.reacaoEsquiva.total = c.total;
						attributes.reacaoEsquiva.total += attributes.reacaoEsquiva.value;
						attributes.reacaoEsquiva.total += attributes.reacaoEsquiva.bonus;
						attributes.reacaoEsquiva.total += attributes.reacaoEsquiva.variavel;
					}
				}
			}

			// Cálculo de Iniciativa
			if (attributes.init.ability == abilityKey) {
				attributes.init.total += ability.tbonus;
				attributes.init.total += attributes.init?.value;
				attributes.init.total += attributes.init?.bonus;
			}

			// Deslocamento
			if (attributes.movement.ability == abilityKey) {
				attributes.movement.andar += attributes.movement.base;
				attributes.movement.andar = attributes.movement.andar + ability.tbonus / attributes.movement.divisor;
				attributes.movement.andar += attributes.movement.bonus;
				attributes.movement.andar = Math.round(attributes.movement.andar);
			}
		}
		// Vitalidade e Chakra
		attributes.vitalidade.max = 10 + 3*abilities.vig.tbonus + 5*details.nivelCampanha + attributes.vitalidade.bonus;
		attributes.chakra.max = 10 + 3*abilities.esp.tbonus + attributes.chakra.bonus;
	}

  /**
   * Override getRollData() that's supplied to rolls.
   */
  getRollData() {
    // Starts off by populating the roll data with `this.system`
    const data = { ...super.getRollData() };

    // Prepare character roll data.
    this._getCharacterRollData(data);

    return data;
  }

  /**
   * Prepare character roll data.
   */
  _getCharacterRollData(data) {
    if (this.type !== 'Ninja') return;

		data.rollIniciativa = "1d8 + " + data.attributes.init.total;
  }
}

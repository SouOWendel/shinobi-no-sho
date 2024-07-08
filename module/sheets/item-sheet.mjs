import {
  onManageActiveEffect,
  prepareActiveEffectCategories,
} from '../helpers/effects.mjs';

/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class ShinobiItemSheet extends ItemSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['shinobiNoSho', 'sheet', 'item'],
      width: 520,
			height: 440,
			template: 'systems/shinobiNoSho/templates/item/item-sheet.hbs',
      tabs: [
        {
          navSelector: '.sheet-tabs',
          contentSelector: '.sheet-body',
          initial: 'description',
        },
      ],
    });
  }

  /** @override */
  get template() {
		const type = this.item.type.toLowerCase();
    const path = 'systems/shinobiNoSho/templates/item';
    return `${path}/item-${type}-sheet.hbs`;
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    // Retrieve base data structure.
    const context = super.getData();

    // Use a safe clone of the item data for further operations.
    const itemData = context.data;

    // Retrieve the roll data for TinyMCE editors.
    context.rollData = this.item.getRollData();

    // Add the item's data to context.data for easier access, as well as flags.
    context.system = itemData.system;
    context.flags = itemData.flags;

    // Prepare active effects for easier access
    context.effects = prepareActiveEffectCategories(this.item.effects);

    return context;
  }

		/** @inheritDoc */
		_getSubmitData(updateData = {}) {
			const formData = foundry.utils.expandObject(
				super._getSubmitData(updateData),
			);
	
			// Handle Family array
			const arma = formData.system?.combate?.dano;
			if (arma) {
				arma.parts = Object.values(arma?.parts || {}).map((d) => [
					d[0] || '', d[1] || '']);
			}
	
			// Return the flattened submission data
			return foundry.utils.flattenObject(formData);
		}
	

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.isEditable) return;

    // Damage
		html.find('.damage-control').click(this._onDamageControl.bind(this));

    // Active Effect management
    html.on('click', '.effect-control', (ev) =>
      onManageActiveEffect(ev, this.item)
    );
  }

	async _onDamageControl(event){
		event.preventDefault();
		const a = event.currentTarget;

		if (a.classList.contains('add-damage')) {
			await this._onSubmit(event);
			const damage = this.item.system.combate.dano;
			return this.item.update({
				'system.combate.dano.parts': damage.parts.concat([['','']]),
			});
		}

		if (a.classList.contains('delete-damage')) {
			await this._onSubmit(event);
			const html = a.closest('.damage-part');
			const damage = foundry.utils.deepClone(this.item.system.combate.dano);
			family.splice(Number(html.dataset.damagePart), 1);
			return this.item.update({'system.combate.dano.parts': damage});
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

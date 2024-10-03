// https://github.com/foundryvtt/dnd5e/blob/4.1.x/module/applications/actor/base-sheet.mjs#L781

/**
 * A DocumentSheet for configure and apply templates of area.
 * This application are used on techniques and equipments items.
 */
export default class areaTemplate extends DocumentSheet {
	/** @inheritDoc */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["shinobiNoSho", "areaTemplate"],
			template: "systems/shinobinosho/templates/apps/areaTemplate.hbs",
			title: "Manipulador de Áreas e Medições",
			width: 350,
			height: "auto",
			closeOnSubmit: false,
		});
	}

	/** @inheritDoc */
	get title() {
		return `Áreas: ${this.object.name}`;
	}

	/** @inheritDoc */
	get id() {
		return `item-${this.object.id}`;
	}

	async getData() {
		return {
			system: this.document.system,
			areas: CONFIG.shinobiNoSho.templateAreas,
			id: this.id
		};
	}

	/** @inheritDoc */
	activateListeners(html) {
		super.activateListeners(html);

		$(".area").on("click", (ev) => {
			$(ev.target).find("input[type='radio'").prop("checked", true);
		});
		console.log(this.id);
		$(`.plusOne.${this.id}`).on("click", (ev) => {
			var numero = parseInt($(`.numberModifier.${this.id}`).val());
			numero++;
			$(`.numberModifier.${this.id}`).val(numero);
		});

		$(`.minusOne.${this.id}`).on("click", (ev) => {
			var numero = parseInt($(`.numberModifier.${this.id}`).val());
			numero--;
			$(`.numberModifier.${this.id}`).val(numero);
		});
	}
}
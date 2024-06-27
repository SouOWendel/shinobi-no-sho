/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/shinobiNoSho/templates/actor/parts/actor-aptidoesPoderes.hbs',
    'systems/shinobiNoSho/templates/actor/parts/actor-combate.hbs',
    'systems/shinobiNoSho/templates/actor/parts/actor-inventario.hbs',
    'systems/shinobiNoSho/templates/actor/parts/actor-efeitos.hbs',
		'systems/shinobiNoSho/templates/actor/parts/actor-pericias.hbs',
		'systems/shinobiNoSho/templates/actor/parts/actor-tecnicas.hbs',
    // Item partials
    'systems/shinobiNoSho/templates/item/parts/item-effects.hbs',
  ]);
};

export const shinobiNoSho = {};

/**
 * The set of ability Scores used within the system.
 * @type {Object}
 */
shinobiNoSho.abilities = {
  for: 'shinobiNoSho.ability.for.long',
  des: 'shinobiNoSho.ability.des.long',
  agi: 'shinobiNoSho.ability.agi.long',
  per: 'shinobiNoSho.ability.per.long',
  int: 'shinobiNoSho.ability.int.long',
  vig: 'shinobiNoSho.ability.vig.long',
	esp: 'shinobiNoSho.ability.esp.long',
  car: 'shinobiNoSho.ability.car.long',
	man: 'shinobiNoSho.ability.man.long',
};

shinobiNoSho.abilityAbbreviations = {
  for: 'shinobiNoSho.ability.for.abbr',
  des: 'shinobiNoSho.ability.des.abbr',
  agi: 'shinobiNoSho.ability.agi.abbr',
  per: 'shinobiNoSho.ability.per.abbr',
  int: 'shinobiNoSho.ability.int.abbr',
  vig: 'shinobiNoSho.ability.vig.abbr',
	esp: 'shinobiNoSho.ability.esp.abbr',
  car: 'shinobiNoSho.ability.car.abbr',
	man: 'shinobiNoSho.ability.man.abbr',
};

shinobiNoSho.skills = {
	geral: {
		acrobacia: "shinobiNoSho.skills.geral.acrobacia",
		arte: "shinobiNoSho.skills.geral.arte",
		atletismo: "shinobiNoSho.skills.geral.atletismo",
		ciencias: "shinobiNoSho.skills.geral.ciencias",
		cultura: "shinobiNoSho.skills.geral.cultura",
		ocultismo: "shinobiNoSho.skills.geral.ocultismo",
		concentracao: "shinobiNoSho.skills.geral.concentracao",
		disfarces: "shinobiNoSho.skills.geral.disfarces",
		escapar: "shinobiNoSho.skills.geral.escapar",
		furtividade: "shinobiNoSho.skills.geral.furtividade",
		animais: "shinobiNoSho.skills.geral.animais",
		mecanismos: "shinobiNoSho.skills.geral.mecanismos",
		medicina: "shinobiNoSho.skills.geral.medicina",
		prestidigitacao: "shinobiNoSho.skills.geral.prestidigitacao",
		procurar: "shinobiNoSho.skills.geral.procurar",
		prontidao: "shinobiNoSho.skills.geral.prontidao",
		rastrear: "shinobiNoSho.skills.geral.rastrear",
		veneficio: "shinobiNoSho.skills.geral.veneficio"
	},
	social: {
		atuacao: "shinobiNoSho.skills.social.atuacao",
		mudarAtitude: "shinobiNoSho.skills.social.mudarAtitude",
		barganha: "shinobiNoSho.skills.social.barganha",
		blefar: "shinobiNoSho.skills.social.blefar",
		intimidacao: "shinobiNoSho.skills.social.intimidacao",
		obterInfo: "shinobiNoSho.skills.social.obterInfo",
	}
};

shinobiNoSho.combatAbilities = {
	CC: "shinobiNoSho.combatAbilities.CC",
	CD: "shinobiNoSho.combatAbilities.CD",
	E: "shinobiNoSho.combatAbilities.E",
	LM: "shinobiNoSho.combatAbilities.LM"
}

shinobiNoSho.ITEMS = {
	dropdown: {
		aptidoes: {
			tipoAptidao: {
				combate: "shinobiNoSho.ITEMS.aptidoes.tipoAptidao.combate",
				manobra: "shinobiNoSho.ITEMS.aptidoes.tipoAptidao.manobra",
				geral: "shinobiNoSho.ITEMS.aptidoes.tipoAptidao.geral",
				tecnica: "shinobiNoSho.ITEMS.aptidoes.tipoAptidao.tecnica",
				shinobi: "shinobiNoSho.ITEMS.aptidoes.tipoAptidao.shinobi",
			}
		},
		tecnicas: {
			areaEfeito: {
				cone: "shinobiNoSho.ITEMS.tecnicas.areaEfeito.cone",
				circulo: "shinobiNoSho.ITEMS.tecnicas.areaEfeito.circulo",
				cilindro: "shinobiNoSho.ITEMS.tecnicas.areaEfeito.cilindro",
				esfera: "shinobiNoSho.ITEMS.tecnicas.areaEfeito.esfera",
				onda: "shinobiNoSho.ITEMS.tecnicas.areaEfeito.onda",
				outro: "shinobiNoSho.ITEMS.tecnicas.areaEfeito.outro",
			},
			tipo: {
				projetil: "shinobiNoSho.ITEMS.tecnicas.tipo.projetil",
				area: "shinobiNoSho.ITEMS.tecnicas.tipo.area",
				suporte: "shinobiNoSho.ITEMS.tecnicas.tipo.suporte",
				corpoacorpo: "shinobiNoSho.ITEMS.tecnicas.tipo.corpoacorpo",
				toque: "shinobiNoSho.ITEMS.tecnicas.tipo.toque",
			},
			subtipo: {
				controleChakra: "shinobiNoSho.ITEMS.tecnicas.subtipo.controleChakra",
				kinjutsu: "shinobiNoSho.ITEMS.tecnicas.subtipo.kinjutsu",
				hijutsu: "shinobiNoSho.ITEMS.tecnicas.subtipo.hijutsu",
				outro: "shinobiNoSho.ITEMS.tecnicas.subtipo.outro"
			},
			tipoJutsu: {
				ninjutsu: "shinobiNoSho.ITEMS.tecnicas.tipoJutsu.ninjutsu",
				genjutsu: "shinobiNoSho.ITEMS.tecnicas.tipoJutsu.genjutsu",
				taijutsu: "shinobiNoSho.ITEMS.tecnicas.tipoJutsu.taijutsu",
			},
			elemento: {
				katon: "shinobiNoSho.ITEMS.tecnicas.elemento.katon",
				fuuton: "shinobiNoSho.ITEMS.tecnicas.elemento.fuuton",
				raiton: "shinobiNoSho.ITEMS.tecnicas.elemento.raiton",
				doton: "shinobiNoSho.ITEMS.tecnicas.elemento.doton",
				suiton: "shinobiNoSho.ITEMS.tecnicas.elemento.suiton",
				outro: "shinobiNoSho.ITEMS.tecnicas.elemento.outro"
			},
			ranking: {
				e: "shinobiNoSho.ITEMS.tecnicas.ranking.e",
				d: "shinobiNoSho.ITEMS.tecnicas.ranking.d",
				c: "shinobiNoSho.ITEMS.tecnicas.ranking.c",
				b: "shinobiNoSho.ITEMS.tecnicas.ranking.b",
				a: "shinobiNoSho.ITEMS.tecnicas.ranking.a",
				s: "shinobiNoSho.ITEMS.tecnicas.ranking.s",
			},
			duracao: {
				instantanea: "shinobiNoSho.ITEMS.tecnicas.duracao.instantanea",
				concentracao: "shinobiNoSho.ITEMS.tecnicas.duracao.concentracao",
				sustentada: "shinobiNoSho.ITEMS.tecnicas.duracao.sustentada",
				continua: "shinobiNoSho.ITEMS.tecnicas.duracao.continua",
				permanente: "shinobiNoSho.ITEMS.tecnicas.duracao.permanente",
			}
		},
		armas: {
			tipoDano: {
				corte: "shinobiNoSho.ITEMS.armas.tipoDano.corte",
				perfuracao: "shinobiNoSho.ITEMS.armas.tipoDano.perfuracao",
				esmagamento: "shinobiNoSho.ITEMS.armas.tipoDano.esmagamento"
			},
			tipo: {
				natural: "shinobiNoSho.ITEMS.armas.tipo.natural",
				simples: "shinobiNoSho.ITEMS.armas.tipo.simples",
				marcial: "shinobiNoSho.ITEMS.armas.tipo.marcial",
				especial: "shinobiNoSho.ITEMS.armas.tipo.especial"
			},
			subtipo: {
				leve: "shinobiNoSho.ITEMS.armas.subtipo.leve",
				mediana: "shinobiNoSho.ITEMS.armas.subtipo.mediana",
				longa: "shinobiNoSho.ITEMS.armas.subtipo.longa",
				pesada: "shinobiNoSho.ITEMS.armas.subtipo.pesada",
				arremesso: "shinobiNoSho.ITEMS.armas.subtipo.arremesso",
				disparo: "shinobiNoSho.ITEMS.armas.subtipo.disparo",
				explosivo: "shinobiNoSho.ITEMS.armas.subtipo.explosivo",
				municao: "shinobiNoSho.ITEMS.armas.subtipo.municao"
			}
		},
		armaduras: {
			tipo: {
				leve: "shinobiNoSho.ITEMS.armaduras.tipo.leve",
				pesada: "shinobiNoSho.ITEMS.armaduras.tipo.pesada"
			}
		},
		geral: {
			tipo: {
				comum: "shinobiNoSho.ITEMS.geral.tipo.comum",
				animais: "shinobiNoSho.ITEMS.geral.tipo.animais",
				veículos: "shinobiNoSho.ITEMS.geral.tipo.veículos",
			}
		},
		generico: {
			alcance: {
				pessoal: "shinobiNoSho.ITEMS.generico.alcance.pessoal",
				toque: "shinobiNoSho.ITEMS.generico.alcance.toque",
				distancia: "shinobiNoSho.ITEMS.generico.alcance.distancia",
			},
			acao: {
				padrao: "shinobiNoSho.ITEMS.generico.acao.padrao",
				movimento: "shinobiNoSho.ITEMS.generico.acao.movimento",
				parcial: "shinobiNoSho.ITEMS.generico.acao.parcial",
				livre: "shinobiNoSho.ITEMS.generico.acao.livre",
				reacao: "shinobiNoSho.ITEMS.generico.acao.reacao",
			}
		}
	}
}
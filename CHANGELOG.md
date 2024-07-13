# CHANGELOG

## [1.2.1](https://github.com/SouOWendel/shinobi-no-sho/compare/v1.2.0...v1.2.1) (2024-07-13)


### Bug Fixes

* **core system:** the setup code was commented out due to an inconsistency in the code ([cbcaaca](https://github.com/SouOWendel/shinobi-no-sho/commit/cbcaacaef3ad7c4f13d437e4b1c09997710efeab))

## [1.2.0](https://github.com/SouOWendel/shinobi-no-sho/compare/v1.1.1...v1.2.0) (2024-07-13)


### Features

* **trackableAttributes:** added vitality and chakra to trackableAttributes, changed the 'atual' key to 'value' and the standard bars to new reference ([86fdd3f](https://github.com/SouOWendel/shinobi-no-sho/commit/86fdd3f03e981c4b0f5a58c82a48d04b8b28234a))


### Bug Fixes

* **chat item card:** added characteristics to display on chat ([c33bfd1](https://github.com/SouOWendel/shinobi-no-sho/commit/c33bfd16dc80f68f217ad2849b3150c56b8fc564))
* **localization:** changed actor type ninja to uppercase ([7b6e1ca](https://github.com/SouOWendel/shinobi-no-sho/commit/7b6e1ca94084dd11761478c3a87f8284d1e139af))
* **power item sheet:** fixed the description reference on system data ([477f483](https://github.com/SouOWendel/shinobi-no-sho/commit/477f48300f51d01416326b4ac7372c42573c9607))
* **techniques item sheet:** fixed the checkbox write function with handlebars helper ([02b3831](https://github.com/SouOWendel/shinobi-no-sho/commit/02b38311738d1e8ec93068261fd13c0f35da6781))

## [1.1.1](https://github.com/SouOWendel/shinobi-no-sho/compare/v1.1.0...v1.1.1) (2024-07-13)


### Bug Fixes

* **aptitude item sheet:** fixed the aptitude type on dropdown, added restrict type and special type ([e007bd4](https://github.com/SouOWendel/shinobi-no-sho/commit/e007bd48f3198bf4006a7a4c6aa00ffeac8ee011))

## [1.1.0](https://github.com/SouOWendel/shinobi-no-sho/compare/v1.0.0...v1.1.0) (2024-07-13)


### Features

* **chat item card:** added critical and toughness to technique item card on chat ([92cbe2a](https://github.com/SouOWendel/shinobi-no-sho/commit/92cbe2ad975d4c1b89fc1b34af3ab48b4f5d13f0))
* **core system:** added hook preCreateActor to apply prototypeToken modifications (actor link true, and disposition neutral) ([a3a0f83](https://github.com/SouOWendel/shinobi-no-sho/commit/a3a0f8365cf7eeea76716f3865739ec7101eda8d))


### Bug Fixes

* **initiative:** fixed the initiative roll data ([5006c68](https://github.com/SouOWendel/shinobi-no-sho/commit/5006c68eda3106c2e97ac430bc781f3360fa4ed7))
* **items sheet editor:** added min-height to fix display editor enter the all item sheet ([a4ade7d](https://github.com/SouOWendel/shinobi-no-sho/commit/a4ade7db537461fec4185a927c0153ead0b7c19b))
* **techniques item sheet:** added critical label ([a810cac](https://github.com/SouOWendel/shinobi-no-sho/commit/a810cac0fade8073fccca29c2dc3ec383825180e))


### Performance Improvements

* **template.json:** changed 'nivelCampanha' from 1 to 4, and changed the 'nivelShinobi' from 1 to Genin ([2ac7ffc](https://github.com/SouOWendel/shinobi-no-sho/commit/2ac7ffc475ef3f2edd37d6091b2019abd28e94ad))

## [1.0.0](https://github.com/SouOWendel/shinobi-no-sho/compare/v0.4.0...v1.0.0) (2024-07-13)


### ⚠ BREAKING CHANGES

* **first official release:** none, just launched the first version

### Features

* **first official release:** launch the v1 version ([a290db3](https://github.com/SouOWendel/shinobi-no-sho/commit/a290db346f75f4ea2a77c3975fe85aa7a700e025))
* **first official release:** launch the v1 version ([c32e3ef](https://github.com/SouOWendel/shinobi-no-sho/commit/c32e3ef6ea4cb3eb2b418db3c692b620658ec39f))

## [0.4.0](https://github.com/SouOWendel/shinobi-no-sho/compare/v0.3.0...v0.4.0) (2024-07-13)


### Features

* **actor sheet and config file:** added header informations and custom dropdown of social skills, also added filter to skills for trained and armor condition ([66b61a0](https://github.com/SouOWendel/shinobi-no-sho/commit/66b61a07b82ac372f95a900f1cf577f40718312b))
* **actor sheet:** added one new tab on options about skills part ([fc029e7](https://github.com/SouOWendel/shinobi-no-sho/commit/fc029e73c96f61ccfd11c93c36a81fa99dcaa99e))
* **actor:** added calculation of custom social skill field ([6ec5dd6](https://github.com/SouOWendel/shinobi-no-sho/commit/6ec5dd6977d3c1a0186a38ae35350f21936cb306))
* **armor item sheet:** fixed all checkbox of traits, added critical field, remove some fiels to damage ([52264f0](https://github.com/SouOWendel/shinobi-no-sho/commit/52264f06dc0bac4b9b01be8d7df1c35dc0b4b6f9))
* **armor item:** added toughness field ([0459db3](https://github.com/SouOWendel/shinobi-no-sho/commit/0459db3eb5fe614d4a8afa8d0a4ddd627763ff79))
* **assets:** added logo from rpg system Naruto 'Shinobi no Sho' ([44736f7](https://github.com/SouOWendel/shinobi-no-sho/commit/44736f7282d13e211818d325d465e59a72a91bc3))
* **chat item card:** added traits to card, the critical field, and 'other' fields ([08334b3](https://github.com/SouOWendel/shinobi-no-sho/commit/08334b3bf099b733cc87182de488591c7fcea59d))
* **chat item-card:** added item-card to display item info on chat ([04dc2d3](https://github.com/SouOWendel/shinobi-no-sho/commit/04dc2d3c20e8edbdc46803c6493884db230545af))
* **combat tab:** added all calculation of combat abilities and combat statistics, displayed the data and changed the data template ([b98f4d4](https://github.com/SouOWendel/shinobi-no-sho/commit/b98f4d4aa6600e9641ebad79d1fda0b4438134df))
* **config.mjs:** was added dropdowns about skills and combat abilities ([8fb7197](https://github.com/SouOWendel/shinobi-no-sho/commit/8fb7197d248f41969e276bc5f2eff40bee596f64))
* **css/sass:** added styles for tabs, overflow and scroll, also was added styles for chat item-card template ([3722b09](https://github.com/SouOWendel/shinobi-no-sho/commit/3722b09cb3eba412a5be46673fe0e1f1a09809de))
* **css/sass:** defined the max-width of input and select on combat statistics section ([00930ef](https://github.com/SouOWendel/shinobi-no-sho/commit/00930ef575eea08e687675beeb265d54300cb03b))
* **css/sass:** several adjustments and stylizations ([b60fd44](https://github.com/SouOWendel/shinobi-no-sho/commit/b60fd445b35895412806d5084fa8e9be8f41673b))
* **custom sidebar + credits:** added custom sidebar with links to system discord, twitter, author, official site, etc ([05224c6](https://github.com/SouOWendel/shinobi-no-sho/commit/05224c6e9a309cc1200e0a4f3b868e931b22cf9a))
* **initiative:** added initiative and IfInequals handlebars helper ([e730331](https://github.com/SouOWendel/shinobi-no-sho/commit/e730331eec1844fbd587c32354c5799605937dc5))
* **item-sheet:** changed the height of item-sheet from '440px' to '445px' ([e8fb4b5](https://github.com/SouOWendel/shinobi-no-sho/commit/e8fb4b523aee66f2974551c7319c8d0d16abead4))
* **items dropdown:** added all dropdown data and configuration of items (aptitudes, armors, weapons, general item, techniques and powers) ([2af6369](https://github.com/SouOWendel/shinobi-no-sho/commit/2af6369da7377a1125996fa412ae3077ed86dcee))
* **items sheet:** added 'rarity', 'alternative name', 'origin' fields and div content to tempt to overflow the scroll of sheets ([19746bb](https://github.com/SouOWendel/shinobi-no-sho/commit/19746bbe587c812688fc6fda47f6f9e2f6d31d54))
* **items sheet:** added container to description and characteristics editors ([7597124](https://github.com/SouOWendel/shinobi-no-sho/commit/75971244f86df3e7066f7457ec6162e9601ec94f))
* **items sheet:** added flexcol to form html to all items, this fixed the overflow of scroll ([5d67f31](https://github.com/SouOWendel/shinobi-no-sho/commit/5d67f31dd221060d64a7d90cd6252ec4b70f71cd))
* **localization:** added translates for header informations and added plus symbol to venefício skill ([a64e447](https://github.com/SouOWendel/shinobi-no-sho/commit/a64e4472d20ec5a7b49e30845f4aa4509e84bed1))
* **localization:** changed and added new abilities translates, also added combat abilities ([c9d4a4e](https://github.com/SouOWendel/shinobi-no-sho/commit/c9d4a4e95eea5998474143e60bc08de6d84b5fc5))
* **ninja combat tab:** added base field to combat abilities ([9f7c4b9](https://github.com/SouOWendel/shinobi-no-sho/commit/9f7c4b985451b9b2127638627d1d5cce924515f4))
* **ninja inventory:** added ryos field ([74fe1b1](https://github.com/SouOWendel/shinobi-no-sho/commit/74fe1b104e85278107a2404ee1684492c5a0d63f))
* **ninja sheet parts:** added data to display in tabulated items informations of aptitudes and powers, inventory and techniques ([e3d19e9](https://github.com/SouOWendel/shinobi-no-sho/commit/e3d19e914530acb5c0a3e23bb5bc874265d94764))
* **ninja sheet parts:** added localization for all displayed data ([bbebdd8](https://github.com/SouOWendel/shinobi-no-sho/commit/bbebdd8afbb3ac2dd20326a5ef6795153007f4dc))
* **ninja sheet skills:** splited the skills tab in general skills tab and social skills tab ([1a45d21](https://github.com/SouOWendel/shinobi-no-sho/commit/1a45d211c7a9d4e2ca0b9d1f8de631fc899a5448))
* **ninja sheet:** added dropdown fields to header, changed the abilities label to abbreviation and added absortion field to quick access container ([d16718d](https://github.com/SouOWendel/shinobi-no-sho/commit/d16718de6dbac7107223c60a78cb073e314e7527))
* **ninja sheet:** added feature to add multiple relations on biography t ab ([003389b](https://github.com/SouOWendel/shinobi-no-sho/commit/003389b16e6dcc03bd4a69bda2347c8b29d7f434))
* **ninja sheet:** changed dropdowns to input type text and added tabs to skills tab ([e3a9e33](https://github.com/SouOWendel/shinobi-no-sho/commit/e3a9e339ac0c1a0876a1b6f87307df6b7a0fb570))
* **ninja skills tab:** added custom field to calculate social skills value, also added guide to general skills treats ([e301068](https://github.com/SouOWendel/shinobi-no-sho/commit/e301068ec52c2bc481b675df39cac2175c781d02))
* **power item sheet:** added new tab to add acquired effects for powers ([b163736](https://github.com/SouOWendel/shinobi-no-sho/commit/b163736d66d478cafb77543804bc3210a99d3037))
* **shinobiNoSho main file:** created the 'ifEquals' helper of handlebars for conditions in layouts ([b573c42](https://github.com/SouOWendel/shinobi-no-sho/commit/b573c42b9318cb4c11d67dc690d91ff733d6824c))
* **system.json:** changed the wallpaper, was added manifest, changed the primary and secondary token bars, changed the grid distance ([fbfb840](https://github.com/SouOWendel/shinobi-no-sho/commit/fbfb8402d5881f25301152b2355ebaa7cd8c653b))
* **techniques item sheet:** added critical field and toughness field ([60d2428](https://github.com/SouOWendel/shinobi-no-sho/commit/60d2428ca863f6f056fa3350d6ab31d962a74eb1))
* **techniques item:** added subtype technique dropdown field ([7b6f20a](https://github.com/SouOWendel/shinobi-no-sho/commit/7b6f20a8a9b891215c016522a430f8950bb24efa))
* **template.json:** added 'raridade' key and deleted the 'classificao' key ([e59b55f](https://github.com/SouOWendel/shinobi-no-sho/commit/e59b55ff7251af979ff8da755c701b6b37363e5e))
* **template.json:** added all items data, changed all value of abilities from '10' to '1', added skill key to combat abilities and changed the value of skills to null ([2d492a0](https://github.com/SouOWendel/shinobi-no-sho/commit/2d492a001969c7cba0c13b955b5469eb982a381f))
* **template.json:** changed 'caracteristicas' to skills for 'caract', added 'acuidade', 'custom', 'dureza' e 'critico' ([848e359](https://github.com/SouOWendel/shinobi-no-sho/commit/848e359e2c7fd23ae5a28074d903d7d37b444094))
* **weapon sheet:** added new feature to add multiple damages to one weapon ([6c105b3](https://github.com/SouOWendel/shinobi-no-sho/commit/6c105b33df62daa7e5c7e2ad28cc97afb79da4c8))


### Bug Fixes

* **effects item part:** fixed the effects control icons style ([1604e4c](https://github.com/SouOWendel/shinobi-no-sho/commit/1604e4cf5d2bc63d11d84f442c25442d1d88af1b))
* **item-sheet:** fixed the delete feature of multiple damages in weapon item ([06615ed](https://github.com/SouOWendel/shinobi-no-sho/commit/06615ed7d47df65ba23d3d3943fcbfd967b143c8))

## [0.3.0](https://github.com/SouOWendel/shinobi-no-sho/compare/v0.2.0...v0.3.0) (2024-07-05)


### Features

* **actor ninja sheet:** was applied the ninja sheet layout with some stylizations ([2b595f5](https://github.com/SouOWendel/shinobi-no-sho/commit/2b595f54a56dbe7b00437c3a4f706accfc9c53d2))
* **actor sheet, 'inventario' and 'biografia':** created a sub-tabs for biografia tab, and several fields, also was created inventory filter with layout ([5cfc871](https://github.com/SouOWendel/shinobi-no-sho/commit/5cfc8719b586fb5d899d0ab7da6d6711d1fc27c3))
* **actor sheet:** changed the name of new items from 'New' to 'Novo(a)' ([8a7a5a1](https://github.com/SouOWendel/shinobi-no-sho/commit/8a7a5a19041d578478aac31bf88fdcdf425456b6))
* **actor sheet:** created label with localization for all skills ([3cb85b0](https://github.com/SouOWendel/shinobi-no-sho/commit/3cb85b040ac1c95b17d2251d733cac8dc2acc2b0))
* **all items:** changed the all items with tabulated fields with stylizations and new and respective tabs ([e8d410c](https://github.com/SouOWendel/shinobi-no-sho/commit/e8d410c76b5ffb3c9f980d886b4675413fdbbcdf))
* **config.mjs:** added skills (general and social) for register constants with localizations ([6f27529](https://github.com/SouOWendel/shinobi-no-sho/commit/6f275297bda6d7e78bb93154187e66a1331d0828))
* **css/sass:** added styles for ninja sheet and several items of system ([beb31a7](https://github.com/SouOWendel/shinobi-no-sho/commit/beb31a71b49e0bd47f3a3f500e17d216511c50d8))
* **css/sass:** added styles for sheet-body, combat tab, biography tab, and flex utilities ([8699af9](https://github.com/SouOWendel/shinobi-no-sho/commit/8699af97cf69688c7ae253e70efb79a686131fdc))
* **css/sass:** created some classes for tabulate with flex display ([fab7908](https://github.com/SouOWendel/shinobi-no-sho/commit/fab7908fba9d985dbc8e9f5fc7c7b183c96fe655))
* **css:** added styles for tabs on ninja sheet ([1682c07](https://github.com/SouOWendel/shinobi-no-sho/commit/1682c0753e74126a3f6e2c0994352621d4d1dd4f))
* **item-sheet:** changed the width from 620 to 520 pixels ([02035a1](https://github.com/SouOWendel/shinobi-no-sho/commit/02035a1fb7f60ccbdb9fdcf5f7053eb9af7794e4))
* **localization:** skills translates and new translates for items ([9e069ec](https://github.com/SouOWendel/shinobi-no-sho/commit/9e069ec0bc3ffcb743821141b9c8a9420dbe4cf1))
* **ninja part combat:** added all template data to fields values and names for read and write actions ([5a42768](https://github.com/SouOWendel/shinobi-no-sho/commit/5a42768440b025db91a5c2a87daef4b6fa9ea77e))
* **ninja part skills:** added all template data to fields and refactor HTML with handlebars loop ([9665330](https://github.com/SouOWendel/shinobi-no-sho/commit/966533079dfbac98b5623bba0d96db9fc52267e7))
* **ninja sheet parts:** added and tabulated informations of items with display flex ([79e7592](https://github.com/SouOWendel/shinobi-no-sho/commit/79e7592a7aa7f5a8aeba1941d737c0c96fb75189))
* **ninja sheet parts:** added list of items about techniques and aptitudes/powers ([da3fccc](https://github.com/SouOWendel/shinobi-no-sho/commit/da3fccc698f3d1bf973e55efae2be5d907fbb67c))
* **ninja sheet parts:** applied combat skills and combat statistics section layout with fields ([7eab20c](https://github.com/SouOWendel/shinobi-no-sho/commit/7eab20c95143e3d6753e7966a438cdd55506837d))
* **ninja sheet:** added all template data to fields and fixed the overflow scroll to tabs ([0036516](https://github.com/SouOWendel/shinobi-no-sho/commit/0036516f425100a19dee8ee7e579678751e3fcae))
* **ninja sheet:** created layout for family tab, added max vitality and chakra ([5072c40](https://github.com/SouOWendel/shinobi-no-sho/commit/5072c40fd6c92b2707b41eeef160cb4f96c05d82))
* **ninja skills part:** created a tab for general skills and social skills ([8c66091](https://github.com/SouOWendel/shinobi-no-sho/commit/8c66091e807e35dfedfff593cb5c1aca5a736dc1))
* **resources:** added some utility class styles (padding and bold) ([c0e2e58](https://github.com/SouOWendel/shinobi-no-sho/commit/c0e2e5849cb501f3055af7da5352874c421414c8))
* **system.json:** changed the background image and thumbnail of system to naruto wallpaper ([e679cbe](https://github.com/SouOWendel/shinobi-no-sho/commit/e679cbecea0e665aab690b4685e0bda25489e32c))
* **template.json:** changed ryos value from 0 to 100, because this is the standard value ([61d9185](https://github.com/SouOWendel/shinobi-no-sho/commit/61d91858b4fe5e465155deaf5158f90fd9dd09d4))
* **template.json:** changed the item type from 'geral' to 'gerais' ([5ac5ec3](https://github.com/SouOWendel/shinobi-no-sho/commit/5ac5ec34ac50c04c8973c9425e1c7690b4cff1a0))
* **template.json:** created data of ninja sheet with details informations and skills ([3a1f7ce](https://github.com/SouOWendel/shinobi-no-sho/commit/3a1f7cecff1ff0fd64d11e7ffcfc3f7262bbfebb))

## [0.2.0](https://github.com/SouOWendel/shinobi-no-sho/compare/v0.1.0...v0.2.0) (2024-06-26)


### Features

* **item tecnica:** created standard sheet for tecnica item ([d92873e](https://github.com/SouOWendel/shinobi-no-sho/commit/d92873edbebba2b90121c9bcca4ed2c87ab83fa7))
* **localization:** added base localizations for portuguese brazillian ([6f49eb8](https://github.com/SouOWendel/shinobi-no-sho/commit/6f49eb895abe857d2f4278aa71e4406b91db528d))
* **release please:** added release-please with specific system configurations ([1b73fda](https://github.com/SouOWendel/shinobi-no-sho/commit/1b73fda227238137340f977d30dd33a381e51d6f))
* **release please:** also added with release please the manifest and configurations of manifest ([13aa793](https://github.com/SouOWendel/shinobi-no-sho/commit/13aa793036504d35d6e32c82ecd30cae34197e10))
* **system.json:** added flags for hotReload function of Foundry ([1d8852b](https://github.com/SouOWendel/shinobi-no-sho/commit/1d8852bec74e7f4faa42d7030158bca4e8412547))
* **system.json:** replaced all boilerplate for system name (shinobiNoSho) and added assets media ([b5f653c](https://github.com/SouOWendel/shinobi-no-sho/commit/b5f653c600b8e532ffd7953eda9a2ae35c7eaea8))
* **template.json:** added 'tecnicas' item and rename 'equipamentos' to 'geral' ([766897d](https://github.com/SouOWendel/shinobi-no-sho/commit/766897de308a6a619b4c511b1048b76eeb4b2c44))
* **template.json:** created a sketch of ninja actor and items (weapons, armor, equipments, aptitudes and powers) ([69b3cf2](https://github.com/SouOWendel/shinobi-no-sho/commit/69b3cf28d7990c3c20f6c0b5631682ad2fdeeb11))
* **template.json:** was added abilities (vig, social, and combate), attributes, details and currency ([5ff67a7](https://github.com/SouOWendel/shinobi-no-sho/commit/5ff67a727417101ec954f14a10f5e97431f381a6))

## 0.1.0

- Add support for Foundry v12 and initial files.

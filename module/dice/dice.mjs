export async function d8Roll({
  parts=[], data={}, event, critical=15, fumble=3,
  shiftFastForward, chooseModifier=false, template, title, dialogOptions,
  chatMessage=true, messageData={}, rollMode, flavor
}={}) {

  // Handle input arguments
  const formula = ["2d8"].concat(parts).join(" + ");
  const defaultRollMode = rollMode || game.settings.get("core", "rollMode");

  // Construct the D8Roll instance
  const roll = new CONFIG.Dice.D8Roll(formula, data, {
    flavor: flavor || title,
    defaultRollMode,
    rollMode,
    critical,
    fumble,
  });

	// Variável com os dados do Dialog
	if (shiftFastForward) {
		const configured = await roll.configureDialog({
			title,
			chooseModifier,
			defaultRollMode,
			defaultAbility: data?.item?.ability || data?.defaultAbility,
			template
		}, dialogOptions);
		if (configured === null) return null;
	} else roll.options.rollMode ??= defaultRollMode;

  // Evaluate the configured roll
  await roll.evaluate({ 
		allowInteractive: (roll.options.rollMode ?? defaultRollMode) !== CONST.DICE_ROLL_MODES.BLIND 
	});

  // Attach original message ID to the message
  messageData = foundry.utils.expandObject(messageData);
  const messageId = event?.target.closest("[data-message-id]")?.dataset.messageId;
	if ( messageId ) foundry.utils.setProperty(messageData, "flags.shinobinosho.originatingMessage", messageId);

  // Create a Chat Message
  if ( roll && chatMessage ) await roll.toMessage(messageData);
  return roll;
}
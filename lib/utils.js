/**
 * Wraps a command with "typing..." status
 * @param {import('telegraf').Context} ctx - Telegraf context
 * @param {Function} callback - The command logic to execute
 */
export async function withTyping(ctx, callback) {
  try {
    // Show typing action
    await ctx.sendChatAction('typing');

    // Execute your command logic
    await callback();
  } catch (error) {
    console.error('Error in withTyping utility:', error);
    await ctx.reply('An error occurred while processing your command.');
  }
}
import { plugins, owner, prefixRegex, isPremiumUser } from './lib/plugins.js';
import chalk from 'chalk';

function handler(bot) {
  bot.on('text', async (ctx) => {
    try {
      const message = ctx.message;
      if (!message || !message.text) return;

      const messageText = message.text;
      const isGroupChat = message.chat.type.includes('group');

      // Match prefix
      const prefixMatch = messageText.match(prefixRegex);
      const hasPrefix = !!prefixMatch;
      const commandText = hasPrefix
        ? messageText.slice(prefixMatch[0].length).split(' ')[0]
        : messageText.split(' ')[0];
      const prefix = hasPrefix ? prefixMatch[0] : '';

      // Fetch plugin
      const plugin = plugins.get(commandText);
      if (!plugin) return;

      // Determine user identifier safely
      const userId = message.from.username || message.from.id || message.from.first_name || 'unknown_user';
      const isOwner = owner.includes(userId);
      const isPremium = await isPremiumUser(userId);

      // Permissions checks
      if (plugin.isOwner && !isOwner) {
        return await ctx.reply('🚩 This command can only be executed by the bot owner.');
      }
      if (plugin.isGroup && !isGroupChat) {
        return await ctx.reply('🚩 This command can only be used in groups.');
      }
      if (plugin.isPremium && !isPremium) {
        return await ctx.reply('🚩 This command is for premium users only.');
      }
      if (plugin.noPrefix && hasPrefix) return;

      // Extract text after command
      const text = messageText.slice(commandText.length + (hasPrefix ? prefix.length : 0)).trim();

      // Execute plugin
      await plugin.operate(ctx, { text, prefix, command: commandText, bot });

      // Logging
      const chatType = isGroupChat ? 'Groups' : 'Private Chat';
      const chatName = isGroupChat ? message.chat.title : userId;
      console.log(
        chalk.green('[ COMMAND ]') +
        chalk.blue(` ${commandText}`) +
        chalk.yellow(` From @${userId}`) +
        chalk.cyan(` In ${chatType}: ${chatName}`)
      );

    } catch (err) {
      console.error(chalk.red('Error handling message:'), err);
    }
  });
}

export default handler;
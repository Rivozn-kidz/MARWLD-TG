import { plugins, owner, prefixRegex, isPremiumUser } from './lib/plugins.js';
import chalk from 'chalk';

function handler(bot) {
  bot.on('text', async (ctx) => {
    try {
      const messageText = ctx.message.text;
      const isGroupChat = ctx.message.chat.type.includes('group');

      // Match prefix
      const prefixMatch = messageText.match(prefixRegex);
      const hasPrefix = !!prefixMatch;
      const commandText = prefixMatch
        ? messageText.slice(prefixMatch[0].length).split(' ')[0]
        : messageText.split(' ')[0];
      const prefix = hasPrefix ? prefixMatch[0] : '';

      // Fetch plugin
      const plugin = plugins.get(commandText);
      if (!plugin) return;

      // Check owner & premium
      const isOwner = owner.includes(ctx.message.from.username);
      const isPremium = await isPremiumUser(ctx.message.from.username);

      // Permissions
      if (plugin.isOwner && !isOwner) {
        return await ctx.reply('🚩 This command can only be executed by the bot owner.');
      }
      if (plugin.isGroup && !isGroupChat) {
        return await ctx.reply('🚩 This command is for groups only.');
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
      const user = ctx.message.from.username || ctx.message.from.first_name || 'Unknown';
      const chatType = isGroupChat ? 'Groups' : 'Private Chat';
      const chatName = isGroupChat ? ctx.message.chat.title : user;
      console.log(
        chalk.green('[ COMMAND ]') +
          chalk.blue(` ${commandText}`) +
          chalk.yellow(` From @${user}`) +
          chalk.cyan(` In ${chatType}: ${chatName}`)
      );
    } catch (err) {
      console.error(chalk.red('Error handling message:'), err);
    }
  });
}

export default handler;
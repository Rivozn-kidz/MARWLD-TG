import fs from 'fs';
import { getPluginsByCategory } from '../lib/plugins.js';

const categories = {
  "info": "Information",
  "download": "Downloader",
  "tools": "Tools",
     "religion": "Religion",
    "converter": "Converter"
};

const helper = {
  command: ['menu'],
  category: 'info',
  description: 'Display menu by category',
  operate: async (ctx) => {
    try {
      const plugins = await Promise.all(
        Object.keys(categories).map(async (key) => {
          const categoryPlugins = await getPluginsByCategory([key]);
          return {
            category: categories[key],
            plugins: categoryPlugins
          };
        })
      );

      const availableCategories = plugins.filter(cat => cat.plugins.length > 0);

      if (availableCategories.length > 0) {
        const menuMessage = [
          `╭─〔 *MAWRLD MD BOT MENU* 〕\n│ Hello @${ctx.message.from.username}!\n│ I’m MAWRLD MD ready to Help.`,
          ...availableCategories.map(cat => {
            return `├──────*[ 🫠${cat.category} 🥶]──────*\n` +
              cat.plugins.map(plugin => {
                const uniqueCommands = [...new Set(plugin.command)];
                return uniqueCommands.map(cmd => `│✦➤ .${cmd}`).join('\n');
              }).join('\n');
          }),
          `╰─────── *⚡ ᴘᴏᴡᴇʀᴇᴅ ʙʏ Rɪᴅᴢ Cᴏᴅᴇʀ*`
        ].join('\n');

        await ctx.replyWithPhoto(
          { source: fs.createReadStream('./components/thumbnail.jpg') },
          { caption: menuMessage, parse_mode: 'Markdown' }
        );
      } else {
        await ctx.reply(`No menus are currently available.`);
      }
    } catch (error) {
      console.error(`Error fetching plugins by category: ${error.message}`);
      await ctx.reply('An error occurred while retrieving the menu. Please try again later.');
    }
  },
  noPrefix: false,
  isOwner: false,
  isGroup: false,
  isPremium: false,
};

export default helper;
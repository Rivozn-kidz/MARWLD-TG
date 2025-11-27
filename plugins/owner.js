import config from '../config.js';
import { withTyping } from '../lib/utils.js';
const helper = {

  command: ['owner'],

  category: 'info',

  description: 'Show bot owner information',

  operate: async (ctx) => {

    try {

      const formattedInfo = `

╭─〔 *MAWRLD OWNER INFO* 〕──────
│✦➤
├✦➤ *👑 Owner Name:* Ridz Coder
├✦➤ *📞 Owner Number:* ${config.OWNER_NUMBER}
├✦➤ *🤖 Bot Name:* ${config.BOT_NAME}
│✦➤
╰────*⚡ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ${config.BOT_NAME} ────*

`.trim();

      await ctx.reply(formattedInfo, { parse_mode: 'Markdown' });

    } catch (error) {

      console.error(error);

      await ctx.reply('Unable to fetch owner information at the moment.');

    }

  },

  noPrefix: false,

  isOwner: false,

  isGroup: false,

  isPremium: false,

};

export default helper;
import axios from 'axios';

import config from '../config.js';

const helper = {

  command: ['nsfw'],

  category: 'download',

  description: 'Fetch NSFW image (18+ content)',

  operate: async (ctx, { text }) => {

    try {

      await ctx.reply('Fetching NSFW content, please wait...');

      // Fetch random NSFW image from API

      const apiUrl = 'https://api.waifu.pics/nsfw/neko'; // example NSFW API

      const { data } = await axios.get(apiUrl, {

        headers: {

          "User-Agent": "Mozilla/5.0",

          "Accept": "application/json"

        },

        timeout: 10000,

      });

      if (!data || !data.url) {

        return await ctx.reply('Failed to fetch NSFW content.');

      }

      const caption = `

╭─〔 ${config.BOT_NAME} NSFW 〕
├✦➤ 🔞 18+ Content
╰─ Powered by ${config.BOT_NAME}

      `.trim();

      await ctx.replyWithPhoto({ url: data.url }, { caption });

    } catch (error) {

      console.error('NSFW API Error:', error.response?.data || error.message);

      await ctx.reply('Error fetching NSFW content. Try again later.');

    }

  },

  noPrefix: false,

  isOwner: false,

  isGroup: false,

  isPremium: false,

};

export default helper;
import axios from 'axios';

import config from '../config.js';

const helper = {

  command: ['wikipedia'],

  category: 'tools',

  description: 'Search Wikipedia for a query',

  operate: async (ctx, { text }) => {

    if (!text) return await ctx.reply(`Please provide a search term.\nExample: \`${config.PREFIX}wiki OpenAI\``);

    try {

      // Random User-Agent

      const getUserAgent = () => {

        const userAgents = [

          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",

          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:119.0) Gecko/20100101 Firefox/119.0",

          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0",

          "Mozilla/5.0 (Linux; Android 13; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",

          "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15"

        ];

        return userAgents[Math.floor(Math.random() * userAgents.length)];

      };

      // Replace spaces with underscores (Wikipedia format)

      const query = encodeURIComponent(text.trim().replace(/\s+/g, '_'));

      const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${query}`;

      const { data } = await axios.get(apiUrl, {

        headers: {

          "User-Agent": getUserAgent(),

          "Accept": "application/json",

        },

        timeout: 10000,

      });

      if (!data || !data.extract) {

        return await ctx.reply('No results found on Wikipedia.');

      }

      const replyMessage = `

╭─〔 *${config.BOT_NAME} WIKIPEDIA* 〕
│
├─ *Title:* ${data.title}
├─ *Description:* ${data.description || 'No description available'}
├─ *Summary:* ${data.extract}
├─ *Page URL:* ${data.content_urls?.desktop?.page || 'N/A'}
│
╰─ *Powered by ${config.BOT_NAME}*

      `.trim();

      await ctx.reply(replyMessage, { parse_mode: 'Markdown' });

    } catch (error) {

      console.error('Wikipedia API Error:', error.response?.data || error.message);

      await ctx.reply('Failed to fetch data from Wikipedia. Try again later.Dont write a long description for it to work');

    }

  },

  noPrefix: false,

  isOwner: false,

  isGroup: false,

  isPremium: false,

};

export default helper;
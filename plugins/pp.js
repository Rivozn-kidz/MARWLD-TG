import axios from 'axios';

const handler = {

  command: ['getpp'],

  category: 'info',

  description: 'Get WhatsApp profile picture of a number',

  operate: async (ctx, { text }) => {

    if (!text) {

      return ctx.sendMessage({

        text: `Usage: ${global.prefix}avatar <WhatsApp number>\nExample: ${global.prefix}avatar 6281234567890`

      });

    }

    const number = text.replace(/\D/g, ''); // Remove non-digit characters

    const apiUrl = `https://api.nekolabs.web.id/downloader/whatsapp?number=${number}`;

    try {

      const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });

      const buffer = Buffer.from(response.data, 'binary');

      await ctx.sendMessage({

        image: buffer,

        caption: `📸 Avatar of ${number}`

      });

    } catch (error) {

      console.error('Avatar API error:', error.response?.data || error.message);

      await ctx.sendMessage({

        text: 'Failed to fetch avatar. Make sure the number is correct and has a WhatsApp profile picture.'

      });

    }

  },

  noPrefix: false,

  isOwner: false,

  isGroup: false,

  isPremium: false,

};

export default handler;
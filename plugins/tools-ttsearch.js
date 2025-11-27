import { withTyping } from '../lib/utils.js';
import { ttSearch } from '../components/tiktok.js';

const helper = {
  command: ['ttsearch'],
  category: 'tools',
  description: 'Search random TikTok videos',
  operate: async (ctx, { text }) => {
    if (!text) {
      return await ctx.reply("Please provide a TikTok query.");
    }

    try {
      const result = await ttSearch(text);

      if (result.no_watermark) {
        const caption = `Title: ${result.title || 'No Title'}\n\n𝙱𝚁𝙾𝚄𝙶𝙷𝚃 𝚃𝙾 𝚈𝙾𝚄 𝙱𝚈 𝙼𝙰𝚆𝚁𝙻𝙳 𝙼𝙳`;
        await ctx.replyWithVideo(result.no_watermark, { caption });
      } else {
        await ctx.reply("No video found without query.");
      }
    } catch (error) {
      console.error('Error fetching TikTok data:', error);
      await ctx.reply('An error occurred while trying to fetch TikTok data. Please try again later.');
    }
  },
  noPrefix: false,
  isOwner: false,
  isGroup: false,
  isPremium: false,
};

export default helper;
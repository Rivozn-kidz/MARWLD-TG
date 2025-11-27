import { withTyping } from '../lib/utils.js';
const helper = {

  command: ['aura'],

  category: 'tools',

  description: 'Send a random aura reading',

  operate: async (ctx) => {

    const auras = [

      "✨ *Golden Aura:* You attract success naturally.",

      "🔥 *Red Aura:* You are bold, passionate, and fearless.",

      "💙 *Blue Aura:* Calm, wise, and deeply intuitive.",

      "💜 *Purple Aura:* Highly spiritual and creative.",

      "💚 *Green Aura:* Healer energy, peaceful and loving."

    ];

    await ctx.reply(auras[Math.floor(Math.random() * auras.length)], { parse_mode: "Markdown" });

  }

};

export default helper;
import { withTyping } from '../lib/utils.js';
const helper = {

  command: ["debinary"],

  category: "converter",

  description: "Convert binary to text",

  operate: async (ctx) => {

    const text = ctx.text?.trim();

    if (!text) return ctx.reply("Send binary to convert.");

    try {

      const result = text

        .split(" ")

        .map(bin => String.fromCharCode(parseInt(bin, 2)))

        .join("");

      await ctx.reply(`🔤 *TEXT RESULT*\n\n${result}`, {

        parse_mode: "Markdown"

      });

    } catch {

      ctx.reply("Invalid binary.");

    }

  },

  noPrefix: false,

};

export default helper;
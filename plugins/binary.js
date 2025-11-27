import { withTyping } from '../lib/utils.js';
const helper = {

  command: ["binary"],

  category: "converter",

  description: "Convert text to binary",

  operate: async (ctx) => {

    const text = ctx.text?.trim();

    if (!text) return ctx.reply("Send text to convert.");

    const binary = text

      .split("")

      .map(ch => ch.charCodeAt(0).toString(2))

      .join(" ");

    await ctx.reply(`🔢 *BINARY CONVERSION*\n\n${binary}`, {

      parse_mode: "Markdown"

    });

  },

  noPrefix: false,

};

export default helper;
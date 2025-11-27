const helper = {

  command: ["say"],

  category: "tools",

  description: "Bot repeats what you say",

  operate: async (ctx) => {

    const text = ctx.message?.text?.trim();

    if (!text) return ctx.reply("Enter text to repeat.");

    await ctx.reply(`🗣️ ${text}`);

  },

  noPrefix: false,

  isOwner: false,

  isGroup: false,

  isPremium: false,

};

export default helper;
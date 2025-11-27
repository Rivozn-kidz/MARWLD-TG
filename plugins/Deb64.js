const helper = {

  command: ["decode64"],

  category: "converter",

  description: "Decode Base64",

  operate: async (ctx) => {

    const txt = ctx.text?.trim();

    if (!txt) return ctx.reply("Provide Base64 string.");

    try {

      const decoded = Buffer.from(txt, "base64").toString("utf-8");

      ctx.reply(`🔓 *DECODED TEXT*\n\n${decoded}`, {

        parse_mode: "Markdown"

      });

    } catch {

      ctx.reply("Invalid Base64.");

    }

  },

  noPrefix: false,

};

export default helper;
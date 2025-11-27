const helper = {

  command: ["base64"],

  category: "converter",

  description: "Encode text to Base64",

  operate: async (ctx) => {

    const txt = ctx.text?.trim();

    if (!txt) return ctx.reply("Provide text to encode.");

    const encoded = Buffer.from(txt, "utf-8").toString("base64");

    ctx.reply(`🥶 *BASE64 ENCODED BY MAWRLD MD*\n\n${encoded}`, {

      parse_mode: "Markdown"

    });

  },

  noPrefix: false,

};

export default helper;
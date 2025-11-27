const helper = {
  command: ["fancy"],
  category: "converter",
  description: "Convert text into fancy styles",
  operate: async (ctx) => {
    const txt = ctx.text?.trim();
    if (!txt) return ctx.reply("Provide text.");

    const fancy1 = txt.replace(/[a-zA-Z]/g, c => String.fromCharCode(c.charCodeAt(0) + 65248));
    const reversed = txt.split("").reverse().join("");
    const fancy2 = txt.replace(/[a-zA-Z]/g, c => c.toUpperCase());
    const fancy3 = txt.replace(/[a-zA-Z]/g, c => c.toLowerCase());
    const fancy4 = txt.replace(/./g, c => `*${c}*`);
    const fancy5 = txt.replace(/./g, c => `_${c}_`);
    const fancy6 = txt.replace(/./g, c => `~${c}~`);
    const fancy7 = txt.replace(/[a-zA-Z]/g, c => String.fromCharCode(c.charCodeAt(0) + 119808));
    const fancy8 = txt.replace(/[a-zA-Z]/g, c => String.fromCharCode(c.charCodeAt(0) + 119840));

    const msg = `
 ✨ *FANCY TEXT STYLES* ✨
 ➤ *Bold Wide:* ${fancy1}
 ➤ *Reversed:* ${reversed}
 ➤ *ALL CAPS:* ${fancy2}
 ➤ *all lowercase:* ${fancy3}
 ➤ *Italic:* ${fancy4}
 ➤ *Underline:* ${fancy5}
 ➤ *Strikethrough:* ${fancy6}
 ➤ *Fancy Script:* ${fancy7}
 ➤ *Fancy Bold:* ${fancy8}
 `.trim();

    ctx.reply(msg, { parse_mode: "Markdown" });
  },
  noPrefix: false,
};

export default helper;
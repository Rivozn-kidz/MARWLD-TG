import QRCode from "qrcode";

const helper = {

  command: ['qr'],

  category: 'tools',

  description: 'Generate a QR code',

  operate: async (ctx) => {

    const text = ctx.text;

    if (!text) return ctx.reply("Example: .qr Hello World");

    try {

      const buffer = await QRCode.toBuffer(text);

      await ctx.replyWithPhoto({ source: buffer }, { caption: "QR Code Generated" });

    } catch (e) {

      console.error(e);

      ctx.reply("Failed to generate QR code.");

    }

  },

};

export default helper;
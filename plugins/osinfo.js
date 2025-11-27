import os from "os";

const helper = {

  command: ["sysinfo"],

  category: "info",

  description: "Show server operating system info",

  operate: async (ctx) => {

    const msg = `

💻 *Server OS Info*

- Platform: ${os.platform()}

- Architecture: ${os.arch()}

- CPU Cores: ${os.cpus().length}

- Total RAM: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB

- Free RAM: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB
    `.trim();

    await ctx.reply(msg, { parse_mode: "Markdown" });

  },

  noPrefix: false,

  isOwner: false,

  isGroup: false,

  isPremium: false,

};

export default helper;
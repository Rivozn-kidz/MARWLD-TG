import axios from "axios";

const helper = {

  command: ["fact"],

  category: "tools",

  description: "Send a random interesting fact",

  operate: async (ctx) => {

    try {

      const { data } = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");

      await ctx.reply(`💡 Fact: ${data.text}`);

    } catch (err) {

      ctx.reply("Failed to fetch fact: " + err.message);

    }

  },

  noPrefix: false,

  isOwner: false,

  isGroup: false,

  isPremium: false,

};

export default helper;
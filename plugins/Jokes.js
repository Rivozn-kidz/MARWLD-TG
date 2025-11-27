import axios from "axios";

const helper = {

  command: ["joke"],

  category: "tools",

  description: "Get a random joke",

  operate: async (ctx) => {

    try {

      const { data } = await axios.get("https://official-joke-api.appspot.com/jokes/random");

      const msg = `😂 *Here's a joke for you:*\n\n${data.setup}\n${data.punchline}`;

      await ctx.reply(msg, { parse_mode: "Markdown" });

    } catch (err) {

      ctx.reply("Failed to fetch joke: " + err.message);

    }

  },

  noPrefix: false,

  isOwner: false,

  isGroup: false,

  isPremium: false,

};

export default helper;
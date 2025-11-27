import JavaScriptObfuscator from "javascript-obfuscator";
import { withTyping } from '../lib/utils.js';
const helper = {

  command: ['obfuscate'],

  category: 'tools',

  description: 'Obfuscate JavaScript code',

  operate: async (ctx) => {

    const code = ctx.text;

    if (!code) return ctx.reply("Send JS code to obfuscate.\nExample: .obfuscate console.log('hi')");

    try {

      const result = JavaScriptObfuscator.obfuscate(code, {

        compact: true,

        controlFlowFlattening: true,

        stringArray: true,

        stringArrayThreshold: 0.75

      });

      await ctx.reply("```js\n" + result.getObfuscatedCode() + "\n```");

    } catch (e) {

      console.error(e);

      ctx.reply("Invalid JavaScript code.");

    }

  },

};

export default helper;
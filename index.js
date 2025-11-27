import config from './config.js';
import { Telegraf } from 'telegraf';
import chalk from 'chalk';
import handler from './client.js';
import { cmdLoader } from './lib/plugins.js';
import Function from './lib/function.js';

global.Func = Function;

const bot = new Telegraf(config.BOT_TOKEN);

(async () => {
  try {
    console.log(chalk.blue('Loading MAWRLD MD commands...'));
    await cmdLoader(bot);

    handler(bot);
if (!bot) {

  console.error(chalk.red.bold('Error: BOT_TOKEN not found in environment variables.'));

  process.exit(1);

}
 
console.log(chalk.green.bold('MAWRLD-MD started successfully!'));
    await bot.launch();

  } catch (error) {
    console.error(chalk.red.bold('Error starting bot:'), error);
  }

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
})();

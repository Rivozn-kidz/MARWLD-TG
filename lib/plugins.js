import config from '../config.js';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { isPremiumUser } from './database.js';

const pluginsDir = path.resolve('./plugins');
let plugins = new Map();
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i;
const owner = config.OWNER;

async function loadPlugin(file) {
  try {
    const pluginPath = `file://${path.resolve(pluginsDir, file)}?${Date.now()}`;
    const { default: helper } = await import(pluginPath);
    helper.file = file;
    plugins.set(helper.command[0], helper);
  } catch (error) {
    console.log(chalk.red(`Failed to load Mawrld MD plugin ${file}: ${error.message}`));
  }
}

async function loadPlugins() {
  plugins.clear();
  const files = fs.readdirSync(pluginsDir).filter(file => file.endsWith('.js'));
  for (const file of files) {
    await loadPlugin(file);
  }
  console.log(chalk.blue('Total Mawrld MD plugins loaded:'), chalk.yellow(plugins.size));
}

async function getPluginsByCategory(categories) {
  const matchingPlugins = [];
  for (const plugin of plugins.values()) {
    if (categories.includes(plugin.category)) {
      matchingPlugins.push(plugin);
    }
  }
  return matchingPlugins;
}

async function cmdLoader(bot) {
  await loadPlugins();

  fs.watch(pluginsDir, async (eventType, filename) => {
    if (filename && filename.endsWith('.js')) {
      const filePath = path.resolve(pluginsDir, filename);
   await loadPlugin(filename);
console.log(chalk.magenta(`Mawrld MD Plugin reloaded: ${filename}`));
      } else if (eventType === 'unlink') {
        plugins.delete(pluginKey);
        console.log(chalk.red(`Mawrld MD Plugin deleted: ${filename}`));
      }
    }
  });
}

export { loadPlugins, cmdLoader, getPluginsByCategory, plugins, owner, prefixRegex, isPremiumUser };

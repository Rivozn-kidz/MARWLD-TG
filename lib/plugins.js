import config from '../config.js';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { isPremiumUser } from './database.js';

const pluginsDir = path.resolve('./plugins');
let plugins = new Map();
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i;

// Ensure owner is always an array
const owner = Array.isArray(config.OWNER) ? config.OWNER : [config.OWNER];

async function loadPlugin(file) {
  try {
    const pluginPath = `file://${path.resolve(pluginsDir, file)}?${Date.now()}`;
    const { default: helper } = await import(pluginPath);
    helper.file = file;
    if (!helper.command || !helper.command[0]) {
      console.log(chalk.yellow(`Plugin ${file} has no command defined, skipping.`));
      return;
    }
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

  // Watch plugins directory for changes
  fs.watch(pluginsDir, async (eventType, filename) => {
    if (!filename || !filename.endsWith('.js')) return;

    try {
      const pluginKey = filename.replace('.js', '');
      await loadPlugin(filename);
      console.log(chalk.magenta(`Mawrld MD Plugin reloaded: ${filename}`));
    } catch (err) {
      console.log(chalk.red(`Error reloading plugin ${filename}: ${err.message}`));
    }
  });
}

export { loadPlugins, cmdLoader, getPluginsByCategory, plugins, owner, prefixRegex, isPremiumUser };
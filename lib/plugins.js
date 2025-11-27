import config from '../config.js';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { isPremiumUser } from './database.js';

const pluginsDir = path.resolve('./plugins');
let plugins = new Map();

const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i;
const owner = config.OWNER; // MUST be array or string in config

// Load a single plugin file
async function loadPlugin(file) {
  try {
    const pluginPath = `file://${path.resolve(pluginsDir, file)}?${Date.now()}`;
    const { default: helper } = await import(pluginPath);

    if (!helper || !helper.command) {
      console.log(chalk.red(`⚠ Plugin ${file} is missing "command" export.`));
      return;
    }

    helper.file = file; // store filename for deletion mapping
    plugins.set(helper.command[0], helper);

  } catch (error) {
    console.log(chalk.red(`Failed to load Mawrld MD plugin ${file}: ${error.message}`));
  }
}

// Load all plugins
async function loadPlugins() {
  plugins.clear();

  const files = fs.readdirSync(pluginsDir)
    .filter(file => file.endsWith('.js'));

  for (const file of files) {
    await loadPlugin(file);
  }

  console.log(
    chalk.blue('Total Mawrld MD plugins loaded:'),
    chalk.yellow(plugins.size)
  );
}

// Get plugins by category
async function getPluginsByCategory(categories) {
  const matchingPlugins = [];

  for (const plugin of plugins.values()) {
    if (categories.includes(plugin.category)) {
      matchingPlugins.push(plugin);
    }
  }

  return matchingPlugins;
}

// Watch & hot-reload plugins
async function cmdLoader(bot) {
  await loadPlugins();

  fs.watch(pluginsDir, async (eventType, filename) => {
    if (!filename || !filename.endsWith('.js')) return;

    const filePath = path.resolve(pluginsDir, filename);

    // Plugin changed or added
    if (eventType === 'change' || eventType === 'rename') {
      await loadPlugin(filename);
      console.log(chalk.magenta(`Mawrld MD Plugin reloaded: ${filename}`));
    }

    // Plugin deleted
    if (eventType === 'unlink') {
      for (const [key, plugin] of plugins.entries()) {
        if (plugin.file === filename) {
          plugins.delete(key);
          break;
        }
      }

      console.log(chalk.red(`Mawrld MD Plugin deleted: ${filename}`));
    }
  });
}

export {
  loadPlugins,
  cmdLoader,
  getPluginsByCategory,
  plugins,
  owner,
  prefixRegex,
  isPremiumUser
};
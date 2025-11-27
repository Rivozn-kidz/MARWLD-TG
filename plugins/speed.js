import os from "os";
import { performance } from "perf_hooks";
import { formatBytes } from "../components/spotify.js"; // adjust path if needed

const helper = {
  command: ['ping'],
  category: 'info',
  description: 'Bot speed & server info',
  operate: async (ctx) => {
    const start = performance.now();

    // Gather system info
    const cpus = os.cpus();
    const uptimeSeconds = os.uptime();
    const uptimeDays = Math.floor(uptimeSeconds / 86400);
    const uptimeHours = Math.floor((uptimeSeconds % 86400) / 3600);
    const uptimeMinutes = Math.floor((uptimeSeconds % 3600) / 60);
    const uptimeSecs = Math.floor(uptimeSeconds % 60);

    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;

    const loadAvg = os.loadavg().map(avg => avg.toFixed(2)).join(", ");
    const responseTime = (performance.now() - start).toFixed(3);

    // Stylish formatted message
    const serverInfo = `
╭─〔 *BOT & SERVER INFO* 〕
│
├─ *CPU Cores:* ${cpus.length} (${cpus[0].model})
├─ *Platform:* ${os.platform()} (${os.arch()})
├─ *Uptime:* ${uptimeDays}d ${uptimeHours}h ${uptimeMinutes}m ${uptimeSecs}s
├─ *RAM Usage:* ${formatBytes(usedMem)} / ${formatBytes(totalMem)}
├─ *Load Average (1,5,15 min):* ${loadAvg}
├─ *Response Time:* ${responseTime} seconds
╰─ *⚡ Powered by Ridz Coder*
`.trim();

    await ctx.reply(serverInfo, { parse_mode: "Markdown" });
  },
  noPrefix: false,
  isOwner: false,
  isGroup: false,
  isPremium: false,
};

export default helper;
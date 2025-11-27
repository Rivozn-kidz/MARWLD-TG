import { withTyping } from '../lib/utils.js';
import axios from 'axios';

const helper = {
  command: ['repo'],
  category: 'info',
  description: 'Original script bot',
  operate: async (ctx) => {
    const githubRepoURL = 'https://github.com/Ridz-coder01/MAWRLD-TG';

    try {
      // Extract username and repo name
      const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

      // Fetch repository details from GitHub API
      const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);
      const repoData = response.data;

      // Format message in stylish format
      const formattedInfo = `
╭─〔 *MAWRLD MD REPOSITORY* 〕
│
├✦➤ *📌 Repository Name:* ${repoData.name}
├✦➤ *👑 Owner:* Ridz Coder 
├✦➤ *⭐ Stars:* ${repoData.stargazers_count}
├✦➤ *⑂ Forks:* ${repoData.forks_count}
├✦➤ *📝 Des:* ${repoData.description || '100% original bot base by Ridz Coder'}
│
├─ *🔗 GitHub Link:*
│   ${repoData.html_url}
│
╰─ *⚡ ᴘᴏᴡᴇʀᴇᴅ ʙʏ Rɪᴅᴢ Cᴏᴅᴇʀ*─────
`.trim();

      await ctx.reply(formattedInfo, { parse_mode: 'Markdown' });
    } catch (error) {
      console.error(error);
      await ctx.reply('Unable to fetch repository information at the moment.');
    }
  },
  noPrefix: false,
  isOwner: false,
  isGroup: false,
  isPremium: false,
};

export default helper;
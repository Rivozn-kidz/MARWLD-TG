import { withTyping } from '../lib/utils.js';
const helper = {

  command: ['quran'],

  category: 'religion',

  description: 'Sends a random Quran verse (with translation)',

  operate: async (ctx) => {

    const ayahs = [

      "Quran 94:6 — *Indeed, with hardship comes ease.*",

      "Quran 2:286 — *Allah does not burden a soul beyond what it can bear.*",

      "Quran 13:28 — *Verily, in the remembrance of Allah do hearts find rest.*",

      "Quran 3:139 — *Do not lose hope, nor be sad.*",

      "Quran 65:3 — *Whoever relies upon Allah — He is sufficient for him.*",

      "Quran 8:46 — *Obey Allah and His Messenger and do not dispute, or you will lose courage.*",

      "Quran 20:46 — *Fear not, for I am with you; I hear and see everything.*",

      "Quran 2:153 — *Indeed, Allah is with the patient.*",

      "Quran 39:53 — *O My servants who have sinned, do not despair of Allah’s mercy.*",

      "Quran 2:45 — *Seek help through patience and prayer.*",

      "Quran 65:2 — *And whoever fears Allah — He will make for him a way out.*",

      "Quran 57:4 — *He is with you wherever you are.*",

      "Quran 24:35 — *Allah is the Light of the heavens and the earth.*",

      "Quran 29:69 — *Those who strive in Our cause — We will guide them to Our ways.*",

      "Quran 14:7 — *If you are grateful, I will surely increase you.*",

      "Quran 93:5 — *Your Lord will give you, and you will be satisfied.*",

      "Quran 94:1 — *Have We not expanded for you your chest?*",

      "Quran 16:127 — *Be patient — your patience is only through Allah.*",

      "Quran 3:160 — *If Allah helps you, none can overcome you.*",

      "Quran 28:77 — *Do good as Allah has done good to you.*",

      "Quran 4:36 — *Worship Allah and be good to others.*",

      "Quran 31:17 — *Establish prayer, enjoin good, forbid evil, and be patient.*",

      "Quran 41:34 — *Repel evil with what is better.*",

      "Quran 42:43 — *Patience and forgiveness are acts of great courage.*",

      "Quran 4:86 — *When greeted with a greeting, respond with something better.*",

      "Quran 55:13 — *Which of your Lord’s favors will you deny?*",

      "Quran 3:185 — *The life of this world is only enjoyment of deception.*",

      "Quran 57:20 — *This worldly life is but temporary illusion.*",

      "Quran 64:11 — *Nothing strikes except by Allah’s permission.*",

      "Quran 39:10 — *The patient will be given their reward without measure.*",

      "Quran 40:60 — *Call upon Me; I will respond.*",

      "Quran 11:114 — *Good deeds erase bad deeds.*",

      "Quran 59:9 — *Whoever is protected from the greed of his soul — they are successful.*",

      "Quran 30:60 — *Be patient. Indeed, the promise of Allah is true.*",

      "Quran 17:36 — *Do not follow that which you have no knowledge of.*",

      "Quran 17:23 — *Be kind to parents.*",

      "Quran 2:286 — *Lord, do not burden us with more than we can bear.*",

      "Quran 2:152 — *Remember Me; I will remember you.*",

      "Quran 49:13 — *The most noble of you in the sight of Allah is the most righteous.*",

      "Quran 39:9 — *Are those who know equal to those who do not know?*",

      "Quran 5:8 — *Be just; that is nearer to righteousness.*",

      "Quran 7:31 — *Eat and drink, but do not waste.*",

      "Quran 28:56 — *Allah guides whom He wills.*",

      "Quran 42:30 — *Whatever difficulty you face is because of what your hands earned.*",

      "Quran 24:22 — *Forgive and overlook. Do you not desire Allah’s forgiveness?*",

      "Quran 2:216 — *Perhaps you hate something that is good for you.*",

      "Quran 21:87 — *There is no deity but You; indeed, I was among the wrongdoers.*",

      "Quran 12:86 — *I only complain of my sorrow to Allah.*",

      "Quran 3:200 — *Be patient, persevere, and fear Allah so you may succeed.*",

      "Quran 6:141 — *Allah does not love the wasters.*",

      "Quran 107:1–2 — *Do you see the one who denies religion? It is the one who pushes away the orphan.*",

      "Quran 90:12 — *And what will explain to you the steep path?*",

      "Quran 5:11 — *Remember God’s favor upon you when enemies wished to harm you.*"

    ];

    await ctx.reply(ayahs[Math.floor(Math.random() * ayahs.length)], {

      parse_mode: "Markdown"

    });

  }

};

export default helper;
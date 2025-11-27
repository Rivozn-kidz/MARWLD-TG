const helper = {

  command: ['bible'],

  category: 'religion',

  description: 'Sends a random Bible verse',

  operate: async (ctx) => {

    const verses = [

      "Philippians 4:13 — *I can do all things through Christ who strengthens me.*",

      "Psalm 23:1 — *The Lord is my shepherd; I shall not want.*",

      "Proverbs 3:5 — *Trust in the Lord with all your heart.*",

      "Isaiah 41:10 — *Do not fear, for I am with you.*",

      "Jeremiah 29:11 — *For I know the plans I have for you.*",

      "Romans 8:28 — *All things work together for good to those who love God.*",

      "Psalm 46:1 — *God is our refuge and strength.*",

      "Joshua 1:9 — *Be strong and courageous.*",

      "Matthew 5:14 — *You are the light of the world.*",

      "Psalm 27:1 — *The Lord is my light and salvation.*",

      "1 Peter 5:7 — *Cast all your worries on Him.*",

      "Psalm 91:2 — *He is my refuge and fortress.*",

      "Romans 12:12 — *Be joyful in hope, patient in affliction, faithful in prayer.*",

      "Matthew 11:28 — *Come to me, all who are weary and burdened.*",

      "Psalm 34:18 — *The Lord is close to the brokenhearted.*",

      "Hebrews 11:1 — *Faith is the substance of things hoped for.*",

      "Psalm 121:7 — *The Lord will keep you from all harm.*",

      "John 14:27 — *My peace I give you.*",

      "Psalm 37:4 — *Delight in the Lord and He will give you the desires of your heart.*",

      "Proverbs 18:10 — *The name of the Lord is a strong tower.*",

      "Isaiah 40:31 — *Those who hope in the Lord will renew their strength.*",

      "Psalm 55:22 — *Cast your burden on the Lord.*",

      "Romans 15:13 — *May the God of hope fill you with joy and peace.*",

      "Psalm 119:105 — *Your word is a lamp to my feet.*",

      "Matthew 6:33 — *Seek first the Kingdom of God.*",

      "Psalm 56:3 — *When I am afraid, I trust in You.*",

      "Ephesians 2:8 — *By grace you have been saved through faith.*",

      "John 3:16 — *For God so loved the world.*",

      "Psalm 62:1 — *My soul finds rest in God alone.*",

      "Psalm 103:12 — *As far as the east is from the west, so far has He removed our sins.*",

      "Proverbs 16:3 — *Commit your work to the Lord.*",

      "Isaiah 43:2 — *When you pass through the waters, I will be with you.*",

      "2 Corinthians 5:7 — *We walk by faith, not by sight.*",

      "Romans 8:31 — *If God is for us, who can be against us?*",

      "1 Corinthians 16:14 — *Do everything in love.*",

      "Psalm 118:24 — *This is the day the Lord has made.*",

      "James 4:8 — *Draw near to God and He will draw near to you.*",

      "Psalm 30:5 — *Joy comes in the morning.*",

      "Proverbs 4:23 — *Guard your heart above all else.*",

      "Colossians 3:23 — *Whatever you do, do it with all your heart.*",

      "Psalm 145:18 — *The Lord is near to all who call on Him.*",

      "Matthew 17:20 — *Faith the size of a mustard seed can move mountains.*",

      "Psalm 139:14 — *I am fearfully and wonderfully made.*",

      "Romans 12:21 — *Do not be overcome by evil, but overcome evil with good.*",

      "Psalm 100:5 — *The Lord is good; His love endures forever.*",

      "1 John 4:19 — *We love because He first loved us.*",

      "Psalm 147:3 — *He heals the brokenhearted.*",

      "Isaiah 26:3 — *You will keep in perfect peace those whose minds are steadfast.*",

      "Romans 5:8 — *God shows His love in that Christ died for us.*",

      "Psalm 28:7 — *The Lord is my strength and my shield.*",

      "Hebrews 13:5 — *I will never leave you nor forsake you.*"

    ];

    await ctx.reply(verses[Math.floor(Math.random() * verses.length)], {

      parse_mode: "Markdown"

    });

  }

};

export default helper;
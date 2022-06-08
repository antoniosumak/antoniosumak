// const md = require('markdown-it')({ html: true, linkify: true, breaks: true });
// const mdEmoji = require('markdown-it-emoji');
// const fs = require('fs');
// const axios = require('axios').default;
// md.use(mdEmoji);

// const mainTitle = generateTitle(1, `Hey :wave:, I'm Antonio`);

// const shortDescription = `Software developer with main focus on front-end development, currently working at **${generateLink(
//   'Mobilisis',
//   'https://www.mobilisis.hr/'
// )}**`;

// (async () => {
//   const content = `${mainTitle}\n
//     ${shortDescription}`;

//   const markdownContent = md.render(content);

//   fs.writeFile('README.md', markdownContent, (err) => {
//     if (err) {
//       return console.error(err);
//     }
//     console.info(`Writing to README.md`);
//   });
// })();

// function generateTitle(size, title) {
//   return `${'#'.repeat(size)} ${title}`;
// }

// function generateLink(label, link) {
//   return `[${label}](${link})`;
// }

/**
 * README Generator
 */
const md = require('markdown-it')({
  html: true,
  linkify: true,
  breaks: true,
});
const mdEmoji = require('markdown-it-emoji');
const fs = require('fs');
const axios = require('axios').default;

md.use(mdEmoji);

const BLOG_HOST = `https://blog.stanleylim.me`;

/* README Sections */
const introTitle = generateTitle(
  2,
  `Hey :wave:, I'm ${generateLink(
    'Antonio',
    'https://www.linkedin.com/in/antoniosumak/'
  )}`
);
const location = `📍 Varaždin, Croatia :croatia:`;
const introDescription = `Software engineer and student, focused on front-end development at **${generateLink(
  'Mobilisis',
  'https://www.mobilisis.hr/'
)}** based in Varaždin, Croatia. Always working on my smaller side projects, trying to improve my development skills`;

const badgeConfigs = [
  {
    name: 'LinkedIn',
    badgeText: '@antoniosumak',
    labelBgColor: '0077B5',
    logoBgColor: '0077B5',
    logo: 'LinkedIn',
    link: 'https://www.linkedin.com/in/antoniosumak/',
  },
  {
    name: 'Instagram',
    badgeText: '@antonio_sumak',
    labelBgColor: 'E4405F',
    logoBgColor: 'E4405F',
    logo: 'Instagram',
    link: 'https://www.instagram.com/antonio_sumak/',
  },
];
const badges = badgeConfigs.reduce(
  (result, config) => result + ' ' + generateBadge(config),
  ''
);

const gif = `<img align="right" src="https://cdn.dribbble.com/users/1162077/screenshots/5403918/focus-animation.gif" width="700"/>`;
const factsTitle = generateTitle(2, `:zap: A Few Quick Facts`);
const factsConfigs = [
  `🏋🏻‍♂️  I love working out and gym all around`,
  `🧐  Currently learning **Nuxt3, working with Prisma and trying out Supabase**`,
  `🗺  I enjoy working with maps (HERE, Google, Leaflet)`,
  `💬  Ping me about **react, vue**.`,
  `📝  Thinking about starting my own blog or portal`,
];
const facts = factsConfigs.reduce(
  (result, fact) => result + `\n - ${fact}`,
  ''
);

const postsTitle = generateTitle(2, `:black_nib: Recent Posts`);

const toolsTitle = generateTitle(
  2,
  `:rocket: Some Tools and Technologies I Use`
);
const toolsIconSize = 25;
const toolsConfig = [
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    alt: 'react',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
    alt: 'vue',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nuxtjs/nuxtjs-original.svg',
    alt: 'nuxtJS',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg',
    alt: 'TailwindCSS',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    alt: 'css3',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    alt: 'sass',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    alt: 'javascript',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    alt: 'typescript',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg',
    alt: '.NET',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg',
    alt: 'postgresql',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg',
    alt: 'nodejs',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    alt: 'express',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-plain.svg',
    alt: 'heroku',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
    alt: 'Docker',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
    alt: 'Firebase',
  },
];
const tools = toolsConfig.reduce(
  (result, toolConfig) =>
    result + '\n' + generateIcon(toolConfig, toolsIconSize),
  ''
);

const stats = `[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=antoniosumak&layout=compact&hide=php)](https://github.com/anuraghazra/github-readme-stats)`;

(async () => {
  const content = `${introTitle}\n
  ${location}\n
${introDescription}\n
${badges}\n
${gif}\n
${factsTitle}\n
${facts}\n
${toolsTitle}\n
<p align="left">\n
    ${tools}\n
</p>\n
${stats}\n
`;

  const markdownContent = md.render(content);

  fs.writeFile('README.md', markdownContent, (err) => {
    if (err) {
      return console.error(err);
    }
    console.info(`Writing to README.md`);
  });
})();

function generateBadge(badgeConfig) {
  return `[![${badgeConfig.name} Badge](https://img.shields.io/badge/-${badgeConfig.badgeText}-${badgeConfig.labelBgColor}?style=flat-square&labelColor=${badgeConfig.logoBgColor}&logo=${badgeConfig.logo}&logoColor=white&link=${badgeConfig.link})](${badgeConfig.link})`;
}

function generateIcon(iconConfig, toolsIconSize) {
  return `<img src="${iconConfig.src}" alt="${iconConfig.alt}" width="${toolsIconSize}" height="${toolsIconSize}" />`;
}

function generateTitle(size, title) {
  return `${'#'.repeat(size)} ${title}`;
}

function generateLink(label, link) {
  return `[${label}](${link})`;
}

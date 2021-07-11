module.exports = {
  title: "Monster's Blog",
  // description: 'welcome',
  head: [['link', { rel: 'icon', href: '/gh-page.ico' }]],
  base: '/',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'GitHub', link: '/git/' },
      { text: 'InterView', link: '/interview/' },
      { text: '浏览器缓存', link: '/cache/' },
      { text: 'Monster', link: 'https://github.com/BigBigBigLemon' },
    ],
    lastUpdated: 'Last Updated',
  },
};

module.exports = {
  title: "Monster's Blog",
  description: 'welcome',
  head: [['link', { rel: 'icon', href: '/gh-page.ico' }]],
  base: '/',
  themeConfig: {
    sidebar: 'auto',
    nav: require('./nav/nav'),
    lastUpdated: 'Last Updated',
  },
  plugins: ['@vuepress/back-to-top']
};

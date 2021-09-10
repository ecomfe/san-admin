module.exports = {
  title: 'San Admin',
  description: 'San Admin',
  base: '/san-admin/',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    repo: 'ecomfe/san-admin',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 Github 上帮助我们编辑此页',
    nav: [
      {text: '首页', link: '/'},
      {text: '指南', link: '/start/use.html'},
    ],
    lastUpdated: '最后更新时间',
    sidebar: [
      {
        title: '引导',
        collapsable: false,
        children: [
          '/guide/changelog'
        ]
      },
      {
        title: '入门',
        collapsable: false,
        children: [
          '/start/use',
          '/start/route',
          '/start/layout',
          '/start/new-page',
          '/start/new-component',
          '/start/server',
          '/start/import',
          '/start/style'
        ]
      },
      {
        title: '进阶',
        collapsable: false,
        children: [
          '/advance/biz-icon',
          '/advance/error',
          '/advance/dynamic-theme',
          '/advance/authority',
          '/advance/remove-authority-management'
        ]
      }
    ],
    nextLinks: true,
    prevLinks: true,
  },
  markdown: {
    lineNumbers: false,
  }
}

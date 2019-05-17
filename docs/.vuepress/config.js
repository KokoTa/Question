module.exports = {
  base: '/Question/',
  title: '前端知识点汇总',
  description: '看完这个我就回老家结婚>_0',
  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'html',
        collapsable: true,
        children: [
          '/html/tag',
          '/html/browser',
        ]
      },
      {
        title: 'css',
        collapsable: true,
        children: [
          '/css/attribute',
          '/css/unit',
          '/css/layout',
          '/css/other'
        ]
      },
      {
        title: 'javascript',
        collapsable: true,
        children: [
          '/js/api',
          '/js/es6',
          '/js/node',
          '/js/webpack',
          '/js/other',
        ]
      },
      {
        title: 'net',
        collapsable: true,
        children: [
          '/net/http',
          '/net/tcp',
          '/net/other'
        ]
      },
      '/vue/',
      '/mongodb/',
      '/weixin/',
      '/other',
      '/interview'
    ]
  }
}
const withNextra = require('nextra')({
  title: 'Physics 150, Luther College',
  description: 'Engineering 101 course at Luther',
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()

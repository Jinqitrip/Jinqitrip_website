import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN', // Matches 'zh-cmn-Hans' closely enough for config
  title: '锦麒行旅游',
  description: '锦麒行旅游官方网站 - 您的一站式出行专家',
  base: '/', // Adjust if deploying to a subpath

  head: [
    // Meta tags, Favicon
    ['link', { rel: 'icon', href: '/assets/img/logo/logo_sqr.png' }],
    ['meta', { name: 'author', content: 'fQwQf' }],
    // ... other meta tags

    // Link CSS files from the public directory
    // Order matters: Bootstrap -> FontAwesome -> Other Libs -> Main -> Style
    ['link', { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/font-awesome.css' }], // Path adjusted inside this file
    ['link', { rel: 'stylesheet', href: '/assets/css/animate.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/magnific-popup.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/nice-select.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/main.css' }],
    // Link your custom overrides LAST
    //['link', { rel: 'stylesheet', href: '/assets/css/style.css' }],
  ],

  // Theme Configuration
  themeConfig: {
    logo: '/assets/img/logo/logo.png', // Path relative to public directory

    // Navigation Links (from header.html)
    nav: [
      { text: '校园引路人', link: '/unimentor' },
      { text: '文章一览', link: '/posts' }, 
      { text: '关于', link: '/about' },
      { text: '联系我们', link: '/contact' },
    ],

    // Sidebar (can be configured if needed, but nav might be sufficient)
    // sidebar: [...],

    // Footer configuration (based on footer.html)
    footer: {
      // message: 'Released under the MIT License.', // Optional
      copyright: `沪ICP备2024085336号 | Copyright © 2024-2025 by fQwQf. All Rights Reserved.`
    },

    // Add other themeConfig options if needed (e.g., social links, edit links)
    // Simulating the header phone number - needs theme customization or placement in footer/contact page
    // Example: Could add to footer message or create custom layout slot

    // Social Links (example - add if you have them)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Jinqitrip' }
    ],

    // Search (Optional, enable if desired)
    //search: {
    //   provider: 'local'
    //}

    // 覆盖侧边栏 "On this page" 标题
    outlineTitle: '本页目录',

    // 覆盖404页面提示文本
    notFound: {
      title: '页面未找到',
      quote: '也许你输入了一个错误的链接，或者内容已被移动。',
      linkLabel: '返回首页',
      linkText: '返回主页'
    },

    // 其他中文覆盖项（可选）
    darkModeSwitchLabel: '切换主题', // 深色模式切换按钮文字
    sidebarMenuLabel: '菜单',        // 移动端侧边栏菜单按钮文字
    returnToTopLabel: '返回顶部'     // 返回顶部按钮文字
  },

  // Custom 404 page handling (VitePress looks for .vitepress/theme/NotFound.vue)
  // No explicit config needed here if you create the file.

  // Markdown configuration (Optional)
  // markdown: {
  //   // options for markdown-it plugins
  // }
});

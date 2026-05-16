# 锦麒行旅游官方网站

**Jinqitrip Travel & Consulting — 您的一站式出行专家**

---

## 技术栈

| 用途 | 技术 | 协议 |
|------|------|------|
| 框架 | Next.js 16 App Router（静态导出） | MIT |
| UI 组件 | Ant Design 5 | MIT |
| 图标 | @ant-design/icons | MIT |
| 轮播 | Swiper 11 | MIT |
| 邮件 | EmailJS | — |
| 字体 | Google Fonts（Ma Shan Zheng, Noto Serif SC, Noto Sans SC） | OFL |
| 语言 | TypeScript | — |

所有依赖均为 MIT / OFL 协议，可商用。

---

## 功能

- 双语支持（中文 / English）
- 全响应式设计，适配移动端
- Hero 轮播（Swiper + Fade 效果）
- 联系表单（EmailJS 实发邮件 + 自动回复）
- 博客系统（Markdown + gray-matter）
- 滚动动画（IntersectionObserver）
- 纯静态输出，可部署至任意 CDN

---

## 本地开发

```bash
# 安装依赖
npm install

# 配置 EmailJS（复制后填入实际值）
cp .env.example .env.local

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000

---

## EmailJS 配置

在 [emailjs.com](https://emailjs.com) 注册后，将以下变量填入 `.env.local`：

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_REPLY_ID=your_autoreply_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 构建部署

```bash
# 生成静态文件到 out/ 目录
npm run build

# 本地预览静态文件
npx serve out
```

---

## 项目结构

```
src/
├── app/[locale]/          # 双语路由页面
├── components/
│   ├── layout/            # NavBar、Footer
│   └── sections/          # 各功能区块组件
├── i18n/translations.ts   # 中英文翻译
├── lib/posts.ts           # 博客读取逻辑
└── styles/                # 全局样式
content/posts/             # Markdown 博客文章
public/assets/             # 静态图片资源
```

---

## 版权

Copyright © 2024-2025 锦麒行旅游信息咨询有限公司. All Rights Reserved.

沪ICP备2024085336号

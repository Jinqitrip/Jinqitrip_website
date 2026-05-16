export interface Slide {
  img: string; tagline: string; titleLine1: string; titleLine2?: string; showFrame: boolean;
}
export interface Feature {
  category: string; title: string; icon: string; active: boolean;
}
export interface Tab { key: string; label: string; }
export interface CounterItem {
  icon: string; target: number; suffix: string; label: string; active: boolean;
}
export interface SeeMenuFeature { title: string; desc: string; }

export interface Translations {
  heroSlides: Slide[];
  heroContact: string;
  features: Feature[];
  trustedClient: {
    tagline: string; title: string; desc: string;
    tabs: Tab[];
    tabContent: Record<string, string[]>;
  };
  manageIt: {
    tagline: string; title: string;
    tabs: Tab[];
    tabContent: Record<string, string>;
  };
  caseStudies: {
    tagline: string; title: string; desc: string;
    demandLabel: string; demandText: string;
    processLabel: string; processLines: string[];
  };
  serviceCounter: {
    tagline: string; title: string; subtitle: string; contact: string;
    counters: CounterItem[];
  };
  about: {
    tagline: string; title: string; desc: string;
    marketTitle: string; marketItems: string[];
  };
  contactForm: {
    title: string; desc: string;
    namePlaceholder: string; emailPlaceholder: string; messagePlaceholder: string;
    submit: string; alertMsg: string;
    successMsg?: string; errorMsg?: string; sending?: string;
  };
  seeMenu: {
    badge: string; tagline: string; title: string; subtitle: string; desc: string;
    features: SeeMenuFeature[];
    stackLabel: string; cta: string;
    mockPhotoLabel: string; mockDishEn: string; mockDishCn: string;
    mockTagOk: string; mockTagWarn: string; mockTagNeutral: string;
    mockCart: string; mockCartCta: string;
  };
  nav: {
    home: string; posts: string; about: string; contact: string;
  };
  footer: {
    copyright: string; github: string; company: string;
  };
  posts: {
    title: string; tagline: string; readMore: string; noPosts: string;
  };
  about_page: {
    breadcrumbHome: string; breadcrumbAbout: string;
  };
  contact_page: {
    breadcrumbHome: string; breadcrumbContact: string;
    address: string; addressVal: string;
    phone: string; phoneVal: string;
    email: string; emailVal: string;
  };
  unimentor_page: {
    breadcrumbHome: string; breadcrumbTitle: string;
    title: string; content: string;
  };
  notFound: {
    title: string; desc: string; back: string;
  };
  testimonial: {
    title: string; tagline: string;
    items: Array<{ name: string; role: string; text: string; date: string; rating: number }>;
  };
  serviceCarousel: {
    title: string; tagline: string;
    items: Array<{ title: string; desc: string; icon: string }>;
  };
}

const zh: Translations = {
  heroSlides: [
    { img: '/assets/img/hero/hero-1.jpg', tagline: '欢迎来到锦麒行旅游', titleLine1: '锦麒行', titleLine2: '您的一站式出行专家。', showFrame: true },
    { img: '/assets/img/hero/hero-2.jpg', tagline: '酒店代订', titleLine1: '精选全球优质酒店，确保您的住宿舒适安心。', showFrame: true },
    { img: '/assets/img/hero/hero-3.jpg', tagline: '机票预定', titleLine1: '合作多家航空公司，为您提供最优惠的机票价格。', showFrame: true },
    { img: '/assets/img/hero/hero-4.jpg', tagline: '演唱会票务', titleLine1: '独家票源，让您不错过任何精彩瞬间。', showFrame: true },
    { img: '/assets/img/hero/hero-5.jpg', tagline: '车辆安排', titleLine1: '从豪华轿车到舒适巴士，满足您的各种需求。', showFrame: true },
  ],
  heroContact: '联系我们',
  features: [
    { category: '特色', title: '技术驱动', icon: 'BulbOutlined', active: false },
    { category: '特色', title: '全方位出行安排', icon: 'CompassOutlined', active: true },
    { category: '特色', title: '专业管家服务', icon: 'CustomerServiceOutlined', active: false },
  ],
  trustedClient: {
    tagline: '只需一步，锦麒帮你搞定所有旅行难题。',
    title: '全方位出行安排',
    desc: '锦麒行旅游信息咨询有限公司提供的全方位出行安排，确保客户的每一次出行都无忧无虑。',
    tabs: [
      { key: 'transport', label: '交通安排' },
      { key: 'optimize', label: '行程优化' },
      { key: 'support', label: '紧急支持' },
    ],
    tabContent: {
      transport: ['私人车辆服务：为追求私密和舒适旅行体验的客户提供专车服务。', '租车服务：为喜欢自驾的客户提供各种类型的租车选项。', '公共交通建议：为预算有限或希望体验当地生活的客户提供公共交通路线建议。'],
      optimize: ['利用先进的技术和丰富的行业经验，为客户优化行程安排。', '通过实时监控交通状况和天气预报，及时调整行程。', '避免不必要的延误和等待，确保客户能够高效地完成旅程。'],
      support: ['在客户旅行过程中，如遇任何紧急情况，均可联系我们取得帮助。', '客服团队将提供24小时支持，解决如交通延误、行程变更等不可预见的事件。', '迅速响应并提供解决方案，确保客户的旅行计划不受影响。'],
    },
  },
  manageIt: {
    tagline: '锦麒携手，共赴精彩。',
    title: '公司概述',
    tabs: [
      { key: 'background', label: '公司背景' },
      { key: 'mission', label: '公司使命' },
      { key: 'vision', label: '公司愿景' },
    ],
    tabContent: {
      background: '锦麒行旅游信息咨询有限公司计划成立于2024年，注册地位于上海，注册资金100万元人民币。公司由一群热爱旅行和科技的人士创立，旨在通过技术手段提升出行服务的效率和质量。',
      mission: '我们的使命是提供优质、便捷、个性化的出行服务，让每一次出行都成为美好的体验。',
      vision: '我们的愿景是成为国内领先的出行服务提供商，赢得广大客户的信赖和认可。',
    },
  },
  caseStudies: {
    tagline: '专业、便捷、贴心，锦麒值得信赖。',
    title: '业务实例',
    desc: '感受我们专业的一站式服务',
    demandLabel: '客户需求：',
    demandText: '一家三口计划在国庆节期间前往云南旅游，希望体验当地的自然风光和民族文化。',
    processLabel: '服务流程：',
    processLines: [
      '旅行规划：我们的管家服务团队与客户进行深入沟通，了解他们对旅行的具体期望，包括景点偏好、酒店要求和餐饮限制。',
      '机票预定：根据客户的时间安排，我们为他们预定了从上海出发到昆明的往返机票，并确保航班时间与整个旅行计划相匹配。',
      '酒店代订：我们为客户预定了昆明市中心的高端酒店，方便他们游览周边的著名景点。',
      '行程安排：安排了一系列的旅游活动，包括参观石林、游览大理古城和丽江古镇，以及体验云南少数民族的文化和美食。',
      '车辆安排：提供了私家车服务，确保客户在旅行期间的交通便利和舒适。',
      '特色体验：安排客户参加了当地的民族节庆活动，让他们深入体验云南的民族风情。',
      '客户反馈：客户对于整个旅行安排感到非常满意，特别是对我们提供的个性化服务和细致的行程规划表示赞赏。',
    ],
  },
  serviceCounter: {
    tagline: '旅行新选择，麟行不负所托。',
    title: '锦麒行旅游——',
    subtitle: '您的一站式出行专家。',
    contact: '联系我们',
    counters: [
      { icon: 'global', target: 35, suffix: '+', label: '合作酒店集团', active: false },
      { icon: 'file-text', target: 853, suffix: '+', label: '合作景点', active: true },
      { icon: 'rise', target: 35, suffix: '+', label: '合作票务商', active: false },
    ],
  },
  about: {
    tagline: '锦麒行，让每一次出行从容精彩。',
    title: '公司概述',
    desc: '锦麒行旅游信息咨询有限公司致力于为商务旅客和高端休闲旅客提供一站式出行服务，涵盖酒店代订、机票预定、演唱会票务预定及车辆安排。通过特色管家服务、会员代订、积分预定和独家内部票等多种方式，确保客户享受最优质、最便捷的服务。',
    marketTitle: '目标市场',
    marketItems: ['学生及其亲戚朋友：需要高效、便捷的出行服务。', '商务旅客：需要高效、便捷的出行安排。', '高端休闲旅客：追求高质量的旅行体验。', '演唱会爱好者：希望获得优质票务服务。'],
  },
  contactForm: {
    title: '联系我们',
    desc: '有任何出行需求或疑问，欢迎填写下方表单，我们将在 1-2 个工作日内与您联系。带星号*的为必填项。',
    namePlaceholder: '用户名*',
    emailPlaceholder: '电子邮件地址*',
    messagePlaceholder: '备注',
    submit: '提交',
    alertMsg: '我们尚未取得收集用户信息资质，请使用其他方式联系我们。',
    successMsg: '提交成功，我们会尽快联系您！',
    errorMsg: '发送失败，请稍后重试或直接联系我们。',
    sending: '发送中…',
  },
  seeMenu: {
    badge: '在研项目', tagline: '跨境旅行 · 智能点餐新体验', title: 'SeeMenu',
    subtitle: '让世界的每一份菜单都能被读懂',
    desc: '面向跨境旅行者的 AI 菜单识别与协同点单工具。拍下任意语言的纸质菜单，即时识别菜名、翻译说明、标注过敏与饮食风险；同行伙伴扫码加入房间，各自下单后生成一份双语小票，递给店员即可。',
    features: [
      { title: '双步 AI 流水线', desc: 'OCR 识别 + 增强翻译，覆盖多语种手写菜单' },
      { title: '菜单图像热区', desc: '所见即所点，点击图片直接查看菜品详情' },
      { title: '个人饮食档案', desc: '过敏与忌口实时提示，让每一口都安心' },
      { title: '多人协同房间', desc: '同行伙伴共享菜单，双语小票一键生成' },
    ],
    stackLabel: '技术栈：', cta: '了解项目进展',
    mockPhotoLabel: '原始菜单', mockDishEn: 'Risotto alla Milanese', mockDishCn: '米兰藏红花烩饭',
    mockTagOk: '素食可', mockTagWarn: '含乳制品', mockTagNeutral: '藏红花 · 米',
    mockCart: '购物车 · 3 道菜', mockCartCta: '生成双语小票 →',
  },
  nav: { home: '首页', posts: '文章一览', about: '关于', contact: '联系我们' },
  footer: { copyright: 'Copyright © 2024-2026 锦麒行旅游. All Rights Reserved.', github: '我们的开源项目', company: '上海锦麒行旅游信息咨询有限公司' },
  posts: { title: '文章一览', tagline: '锦麒，旅行知识的源泉。', readMore: '阅读全文', noPosts: '暂无文章' },
  about_page: { breadcrumbHome: '首页', breadcrumbAbout: '关于我们' },
  contact_page: {
    breadcrumbHome: '首页', breadcrumbContact: '联系我们',
    address: '地址', addressVal: '上海市',
    phone: '电话', phoneVal: '+86 131-0075-2288',
    email: '邮箱', emailVal: 'harry@jinqitrip.com',
  },
  unimentor_page: {
    breadcrumbHome: '首页', breadcrumbTitle: '校园引路人',
    title: '校园引路人', content: '校园引路人（Unimentor）是锦麒行旅游旗下的校园留学规划服务，为有意向出国留学的学生提供一站式规划、申请和出行支持。',
  },
  notFound: { title: '页面未找到', desc: '您访问的页面不存在或已被移动。', back: '返回首页' },
  testimonial: {
    title: '客户评价', tagline: '锦麒，我的旅行专家。',
    items: [
      { name: '潘*欣', role: '演唱会爱好者', text: '酒店优惠折扣很大，没有遇到问题，服务很好。机票和保险都是提前订好的，没怎么操心。', date: '2024/3/26', rating: 5 },
      { name: '刘*然', role: '游客', text: '非常满意！服务的速度和质量都很好，酒店真的离各个商区都很近，并且物美价廉。特别喜欢把客户当朋友的态度，对我们的态度既亲切同时也不失专业和礼数。非常完美，留给了我们自主选择的权利，同时帮我们解决了出行住宿等一系列问题。', date: '2023/5/15', rating: 5 },
      { name: '裴*豪', role: '商务人士', text: '还算满意，预订住宿、车票都很好；希望可以提供异性朋友同行！！（doge）', date: '2024/1/23', rating: 5 },
    ],
  },
  serviceCarousel: {
    title: '技术驱动', tagline: '锦麒，出行的智能选择。',
    items: [
      { title: '自动化预定', desc: '通过先进技术自动处理预定请求，提高效率并减少人为错误。', icon: 'CalendarOutlined' },
      { title: '数据分析', desc: '利用大数据分析，为客户提供个性化的出行建议和优化方案。', icon: 'BarChartOutlined' },
      { title: '在线服务平台', desc: '提供一站式在线服务平台，客户可以随时随地管理自己的行程。', icon: 'GlobalOutlined' },
      { title: '技术整合', desc: '将最新技术整合到传统旅游服务中，提升客户体验。', icon: 'ApiOutlined' },
    ],
  },
};

const en: Translations = {
  heroSlides: [
    { img: '/assets/img/hero/hero-1.jpg', tagline: 'Welcome to Jinqitrip', titleLine1: 'Jinqitrip', titleLine2: 'Your One-Stop Travel Expert.', showFrame: true },
    { img: '/assets/img/hero/hero-2.jpg', tagline: 'Hotel Booking', titleLine1: 'Premium hotels worldwide, ensuring your comfortable and worry-free stay.', showFrame: true },
    { img: '/assets/img/hero/hero-3.jpg', tagline: 'Flight Booking', titleLine1: 'Partnered with multiple airlines to bring you the best fares.', showFrame: true },
    { img: '/assets/img/hero/hero-4.jpg', tagline: 'Event Ticketing', titleLine1: 'Exclusive tickets so you never miss a great moment.', showFrame: true },
    { img: '/assets/img/hero/hero-5.jpg', tagline: 'Transportation', titleLine1: 'From luxury sedans to comfortable coaches — every journey covered.', showFrame: true },
  ],
  heroContact: 'Contact Us',
  features: [
    { category: 'Feature', title: 'Technology-Driven', icon: 'BulbOutlined', active: false },
    { category: 'Feature', title: 'Full-Service Travel', icon: 'CompassOutlined', active: true },
    { category: 'Feature', title: 'Personal Butler Service', icon: 'CustomerServiceOutlined', active: false },
  ],
  trustedClient: {
    tagline: 'One step — Jinqitrip handles every travel need for you.',
    title: 'Full-Service Travel Arrangements',
    desc: "Jinqitrip's comprehensive travel arrangements ensure a seamless, worry-free experience for every client.",
    tabs: [
      { key: 'transport', label: 'Transportation' },
      { key: 'optimize', label: 'Itinerary Optimization' },
      { key: 'support', label: 'Emergency Support' },
    ],
    tabContent: {
      transport: ['Private car service: dedicated vehicles for clients seeking privacy and comfort.', 'Car rental: a wide selection of rental options for self-drive travelers.', 'Public transit guidance: recommended routes for budget-conscious or local-immersion travelers.'],
      optimize: ['Leverage advanced technology and deep industry experience to optimize every itinerary.', 'Monitor traffic conditions and weather forecasts in real time to adjust plans proactively.', 'Eliminate unnecessary delays so clients complete their journeys efficiently.'],
      support: ['Reach us anytime during your trip for assistance with any urgent situation.', 'Our team provides 24/7 support for flight delays, itinerary changes, and other unforeseen events.', 'Rapid response and actionable solutions to keep your travel plans on track.'],
    },
  },
  manageIt: {
    tagline: 'Jinqitrip — journey together, achieve more.',
    title: 'Company Overview',
    tabs: [
      { key: 'background', label: 'Background' },
      { key: 'mission', label: 'Mission' },
      { key: 'vision', label: 'Vision' },
    ],
    tabContent: {
      background: 'Jinqitrip Travel & Consulting Co., Ltd. was incorporated in Shanghai with a registered capital of RMB 1,000,000. Founded by a passionate team of travel and technology enthusiasts, our goal is to enhance travel services through innovation.',
      mission: 'Our mission is to deliver high-quality, convenient, and personalized travel services that turn every journey into an unforgettable experience.',
      vision: 'Our vision is to become a leading travel service provider in China, earning the trust and loyalty of clients nationwide.',
    },
  },
  caseStudies: {
    tagline: 'Professional, convenient, attentive — trust Jinqitrip.',
    title: 'Case Studies',
    desc: 'Experience our professional one-stop travel service.',
    demandLabel: 'Client Need:',
    demandText: "A family of three planned a trip to Yunnan during China's National Day holiday, hoping to experience the local natural scenery and ethnic culture.",
    processLabel: 'Service Process:',
    processLines: [
      "Travel planning: Our butler team held in-depth consultations to understand the family's preferences, including desired attractions, hotel standards, and dietary requirements.",
      'Flight booking: Based on the client\'s schedule, we secured round-trip tickets from Shanghai to Kunming, ensuring flight times aligned with the overall itinerary.',
      'Hotel booking: We reserved a premium hotel in downtown Kunming, conveniently located near major attractions.',
      'Itinerary design: We arranged a series of activities including Stone Forest, Dali Ancient City, and Lijiang Old Town, plus authentic ethnic cuisine experiences.',
      'Transportation: Private car service was provided to ensure comfortable and convenient travel throughout the trip.',
      'Signature experience: Clients were invited to a local ethnic festival, offering an immersive cultural encounter.',
      'Client feedback: The family expressed high satisfaction with the entire arrangement, particularly praising our personalized service and meticulous itinerary planning.',
    ],
  },
  serviceCounter: {
    tagline: 'New travel choices — Jinqitrip delivers.',
    title: 'Jinqitrip Travel —',
    subtitle: 'Your one-stop travel expert.',
    contact: 'Contact Us',
    counters: [
      { icon: 'global', target: 35, suffix: '+', label: 'Partner Hotel Groups', active: false },
      { icon: 'file-text', target: 853, suffix: '+', label: 'Partner Attractions', active: true },
      { icon: 'rise', target: 35, suffix: '+', label: 'Ticketing Partners', active: false },
    ],
  },
  about: {
    tagline: 'Jinqitrip — every journey, effortlessly extraordinary.',
    title: 'Company Overview',
    desc: 'Jinqitrip Travel & Consulting Co., Ltd. is dedicated to providing one-stop travel services for business and leisure travelers, covering hotel reservations, flight booking, event ticketing, and transportation.',
    marketTitle: 'Target Market',
    marketItems: ['Students and their family & friends: seeking efficient, hassle-free travel services.', 'Business travelers: requiring streamlined and reliable travel arrangements.', 'Premium leisure travelers: pursuing high-quality, curated travel experiences.', 'Concert and event enthusiasts: looking for premium ticket access.'],
  },
  contactForm: {
    title: 'Contact Us',
    desc: 'Have a travel inquiry or question? Fill in the form below and we\'ll get back to you within 1-2 business days. Fields marked * are required.',
    namePlaceholder: 'Username *', emailPlaceholder: 'Email Address *', messagePlaceholder: 'Notes (optional)',
    submit: 'Submit',
    alertMsg: 'We have not yet obtained the qualification to collect user information. Please contact us through other channels.',
    successMsg: 'Submitted successfully! We will get back to you shortly.',
    errorMsg: 'Failed to send. Please try again or contact us directly.',
    sending: 'Sending…',
  },
  seeMenu: {
    badge: 'In Development', tagline: 'Cross-border Travel · Smart Ordering Experience', title: 'SeeMenu',
    subtitle: 'Making every menu in the world understandable',
    desc: 'An AI-powered menu scanning and collaborative ordering tool for cross-border travelers. Snap a photo of any menu in any language — instantly recognize dishes, translate descriptions, and flag allergens.',
    features: [
      { title: 'Two-Step AI Pipeline', desc: 'OCR recognition + enhanced translation, supporting handwritten menus in multiple languages' },
      { title: 'Menu Image Hotspots', desc: 'What you see is what you order — tap any item on the photo to view full details' },
      { title: 'Personal Dietary Profile', desc: 'Real-time allergen and dietary restriction alerts for a worry-free dining experience' },
      { title: 'Multi-Person Collaboration', desc: 'Share the menu with your group and generate a bilingual receipt in one tap' },
    ],
    stackLabel: 'Tech Stack:', cta: 'View Project',
    mockPhotoLabel: 'Original Menu', mockDishEn: 'Risotto alla Milanese', mockDishCn: 'Milanese Saffron Risotto',
    mockTagOk: 'Vegetarian', mockTagWarn: 'Contains Dairy', mockTagNeutral: 'Saffron · Rice',
    mockCart: 'Cart · 3 dishes', mockCartCta: 'Generate Receipt →',
  },
  nav: { home: 'Home', posts: 'Blog', about: 'About', contact: 'Contact' },
  footer: { copyright: 'Copyright © 2024-2026 Jinqitrip. All Rights Reserved.', github: 'Our Open Source Projects', company: 'Shanghai Jinqitrip Travel & Consulting Co., Ltd.' },
  posts: { title: 'Blog', tagline: 'Jinqitrip — your source of travel knowledge.', readMore: 'Read More', noPosts: 'No posts yet.' },
  about_page: { breadcrumbHome: 'Home', breadcrumbAbout: 'About Us' },
  contact_page: {
    breadcrumbHome: 'Home', breadcrumbContact: 'Contact Us',
    address: 'Address', addressVal: 'Shanghai, China',
    phone: 'Phone', phoneVal: '+86 131-0075-2288',
    email: 'Email', emailVal: 'harry@jinqitrip.com',
  },
  unimentor_page: {
    breadcrumbHome: 'Home', breadcrumbTitle: 'Unimentor',
    title: 'Unimentor', content: 'Unimentor is a campus study-abroad planning service under Jinqitrip, providing one-stop planning, application, and travel support for students considering overseas education.',
  },
  notFound: { title: 'Page Not Found', desc: 'The page you are looking for does not exist or has been moved.', back: 'Back to Home' },
  testimonial: {
    title: 'Client Reviews', tagline: 'Jinqitrip — your travel expert.',
    items: [
      { name: '潘*欣', role: 'Concert Enthusiast', text: 'Great hotel discounts, no issues at all, and excellent service. Flights and insurance were all arranged in advance — totally stress-free.', date: '2024/3/26', rating: 5 },
      { name: '刘*然', role: 'Traveler', text: 'Very satisfied! Fast and high-quality service. The hotels were close to all the shopping areas and offered great value. I especially loved how they treated us like friends — warm and professional at the same time. They gave us the freedom to choose while handling all the logistics for us.', date: '2023/5/15', rating: 5 },
      { name: '裴*豪', role: 'Business Traveler', text: 'Pretty satisfied overall — hotel and transportation bookings went smoothly. Hope they can support bringing a partner of the opposite gender next time lol.', date: '2024/1/23', rating: 5 },
    ],
  },
  serviceCarousel: {
    title: 'Technology-Driven', tagline: 'Jinqitrip — the intelligent choice for travel.',
    items: [
      { title: 'Automated Booking', desc: 'Advanced technology handles booking requests automatically, improving efficiency and reducing errors.', icon: 'CalendarOutlined' },
      { title: 'Data Analytics', desc: 'Big data analysis provides personalized travel recommendations and optimization strategies.', icon: 'BarChartOutlined' },
      { title: 'Online Service Platform', desc: 'A one-stop online platform lets clients manage their itineraries anytime, anywhere.', icon: 'GlobalOutlined' },
      { title: 'Technology Integration', desc: 'Integrating the latest technology into traditional travel services to elevate the client experience.', icon: 'ApiOutlined' },
    ],
  },
};

export const translations: Record<string, Translations> = { zh, en };

export function getT(locale: string): Translations {
  return translations[locale] ?? translations['zh'];
}

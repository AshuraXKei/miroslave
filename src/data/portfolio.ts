// ============================================
// Данные портфолио — редактируйте здесь
// ============================================

export const personalInfo = {
  name: "Файзулин Мирослав",
  title: "Full-Stack Developer",
  tagline: "Создаю современные веб-приложения с вниманием к деталям",
  email: "miroslav@fayzulin.dev",
  location: "Москва, Россия",
  avatar: "", // URL аватара или оставьте пустым для генерации
  bio: `Я — Full-Stack разработчик с 5+ годами опыта создания веб-приложений. 
Специализируюсь на React, Next.js, Node.js и TypeScript. 
Увлечён чистым кодом, производительностью и пользовательским опытом. 
Люблю решать сложные задачи и постоянно учиться новому.`,
  resumeUrl: "#", // Ссылка на резюме
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "Telegram", url: "https://t.me/", icon: "telegram" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "VK", url: "https://vk.com", icon: "vk" },
  { name: "Email", url: "mailto:miroslav@fayzulin.dev", icon: "email" },
];

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 97 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 78 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "REST API", level: 90 },
    { name: "GraphQL", level: 72 },
  ],
  tools: [
    { name: "Git/GitHub", level: 92 },
    { name: "Docker", level: 70 },
    { name: "Linux", level: 75 },
    { name: "Figma", level: 68 },
    { name: "CI/CD", level: 72 },
    { name: "Testing", level: 78 },
  ],
};

export const experience = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp",
    period: "2023 — настоящее время",
    description:
      "Разработка и архитектура крупных SPA-приложений на React/Next.js. Менторинг junior-разработчиков. Оптимизация производительности.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    title: "Full-Stack Developer",
    company: "WebStudio",
    period: "2021 — 2023",
    description:
      "Создание веб-приложений полного цикла. Разработка REST API на Node.js. Интеграция платёжных систем.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Junior Frontend Developer",
    company: "StartupHub",
    period: "2019 — 2021",
    description:
      "Вёрстка лендингов и корпоративных сайтов. Разработка интерактивных компонентов. Работа с CMS.",
    technologies: ["JavaScript", "React", "SASS", "WordPress"],
  },
];

export const education = [
  {
    degree: "Магистр информатики",
    institution: "МГУ им. М.В. Ломоносова",
    period: "2017 — 2019",
    description: "Кафедра вычислительной математики и кибернетики.",
  },
  {
    degree: "Бакалавр прикладной математики",
    institution: "МГТУ им. Н.Э. Баумана",
    period: "2013 — 2017",
    description: "Факультет информатики и систем управления.",
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Полнофункциональный интернет-магазин с корзиной, оплатой и панелью администратора. Оптимизирован для SEO и высокой конверсии.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Приложение для управления задачами с канбан-досками, командной работой и real-time обновлениями через WebSocket.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "Интерактивный дашборд погоды с геолокацией, графиками и прогнозом на 14 дней. Интеграция с несколькими API.",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "Платформа для ведения блога с Markdown-редактором, системой тегов, комментариями и RSS-лентой.",
    technologies: ["Next.js", "MDX", "PostgreSQL", "Tailwind CSS", "NextAuth"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Chat Application",
    description:
      "Real-time мессенджер с поддержкой групповых чатов, отправки файлов, эмодзи и уведомлений.",
    technologies: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Portfolio Generator",
    description:
      "Генератор портфолио из GitHub-репозиториев. Автоматическое создание красивого сайта-визитки разработчика.",
    technologies: ["React", "GitHub API", "Tailwind CSS", "Vite", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const stats = [
  { value: "5+", label: "Лет опыта" },
  { value: "50+", label: "Проектов" },
  { value: "30+", label: "Клиентов" },
  { value: "1000+", label: "Коммитов" },
];

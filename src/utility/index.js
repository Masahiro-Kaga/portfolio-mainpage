// レジュメ関連のドキュメント
export const resumeDocuments = [
  {
    title: "Cover Letter",
    src: "contents/Coverletter_MasahiroKaga.jpg",
    download: "contents/Coverletter_MasahiroKaga.pdf",
  },
  {
    title: "Resume",
    src: "contents/Resume_MasahiroKaga.jpg",
    download: "contents/Resume_MasahiroKaga.pdf",
  },
];

// ポートフォリオプロジェクト
export const portfolioProjects = [
  {
    isNew: false,
    title: "AI Play Ground App",
    pageUrl: "https://mkportfolio.link/",
    githubUrl: "https://github.com/Masahiro-Kaga/gpt-app",
    imageUrl: "img/work/gif/aiapp.gif",
    keyFeatures: "MERN, Redux, AWS, Typescript, MUI",
    imageAlt: "AI app with React MERN stack",
    canAccess: false,
  },
  {
    isNew: false,
    title: "Hokkaido Reunion",
    pageUrl: "https://dojinkai-bc.ca/",
    githubUrl: "",
    imageUrl: "img/work/png/reunion.png",
    keyFeatures: "WordPress, PHP, Elementor",
    imageAlt: "Hokkaidojinkai website",
    canAccess: false,
  },
  {
    isNew: false,
    title: "Diary app",
    pageUrl: "https://note-app-masamern.herokuapp.com/",
    githubUrl: "https://github.com/Masahiro-Kaga/practiceFour",
    imageUrl: "img/work/jpg/diaryapp.jpg",
    keyFeatures: "MERN, Redux, Axios, Cloudinary",
    imageAlt: "Diary app with React MERN stack",
    canAccess: false,
  },
  {
    isNew: false,
    title: "Shooting game",
    pageUrl: "https://masahiro-kaga.github.io/portfolio-santa-shooting/",
    githubUrl: "https://github.com/Masahiro-Kaga/portfolio_SantaShooting",
    imageUrl: "img/work/gif/shootinggame.gif",
    keyFeatures: "VanilaJS, Canvas",
    imageAlt: "javascript shooting game",
    canAccess: true,
  },
  {
    isNew: false,
    title: "Blog App",
    pageUrl: "https://portfolio-blog-app.vercel.app/",
    githubUrl: "https://github.com/Masahiro-Kaga/portfolio-blog-app",
    imageUrl: "img/work/gif/blogapp.gif",
    keyFeatures: "NextJS ,EmotionCSS",
    imageAlt: "Blog App with Next.js",
    canAccess: false,
  },
  {
    isNew: false,
    title: "ECommerce website",
    pageUrl: "https://masaecwebsite.netlify.app",
    githubUrl: "https://github.com/Masahiro-Kaga/portfolio-ECwebsite-serverside",
    imageUrl: "img/work/gif/ecommerce.gif",
    keyFeatures: "MERN, FetchAPI, MUI, CI/CD,",
    imageAlt: "Ecommerce website with MERN stack",
    canAccess: false,
  },
  // {
  //   isNew: false,
  //   title: "Main Portfolio Page",
  //   pageUrl: "https://masaportfolio.netlify.app/",
  //   githubUrl: "https://github.com/Masahiro-Kaga/portfolio",
  //   imageUrl: "img/work/gif/mainpage.gif",
  //   keyFeatures: "React, TailwindCSS, Netlify Form",
  //   imageAlt: "Portfolio main page",
  // },
  // {
  //   isNew: false,
  //   title: "[Proto]Portfolio toppage",
  //   pageUrl: "https://masahiro-kaga.github.io/portfolio-mainpage-proto/",
  //   githubUrl: "https://github.com/Masahiro-Kaga/portfolio-mainpage-proto",
  //   imageUrl: "img/work/gif/proto_portfolio.gif",
  //   keyFeatures: "Bootstrap, VanilaJS",
  //   imageAlt: "Portfolio proto",
  // },
];

// サイト全体のデータ設定
const portfolioData = {
  nav: {
    logo: "portfolio",
    links: [
      { text: "Work", to: "mywork" },
      { text: "Contact", to: "mycontact" },
    ],
  },
  header: {
    img: "img/background_image.jpg",
    type: "Full Stack Developer",
    name: "Masahiro Kaga",
    typical: ["No Tech , No Life 💻", 3000, " No Pain , No Gain💪", 3000],
  },
  stack: {
    title: "Stack",
    fireIcon1: {
      img: process.env.PUBLIC_URL + "/img/background_fire1.gif",
      alt: "backgroundFire",
    },
    fireIcon2: {
      img: process.env.PUBLIC_URL + "/img/background_fire2.gif",
      alt: "backgroundFire",
    },
    tech_frontend: [
      // Core Languages
      {
        level: 75,
        img: process.env.PUBLIC_URL + "/img/stackicons/javascript.svg",
        alt: "Javascript",
      },
      {
        level: 0,
        img: process.env.PUBLIC_URL + "/img/stackicons/typescript-icon.svg",
        alt: "Typescript",
      },
      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/html-5.svg", alt: "HTML" },
      { level: 25, img: process.env.PUBLIC_URL + "/img/stackicons/css-3.svg", alt: "CSS" },

      // JS Frameworks
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/vue.svg", alt: "Vue" },
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/nuxt-icon.svg", alt: "Nuxt" },
      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/react.svg", alt: "React" },
      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/nextjs.svg", alt: "Next" },
      {
        level: 0,
        img: process.env.PUBLIC_URL + "/img/stackicons/angular-icon.svg",
        alt: "Angular",
      },
      { level: 25, img: process.env.PUBLIC_URL + "/img/stackicons/jquery.svg", alt: "Jquery" },

      // CSS Frameworks & Preprocessors
      {
        level: 50,
        img: process.env.PUBLIC_URL + "/img/stackicons/tailwindcss-icon.svg",
        alt: "Tailwindcss",
      },

      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/sass.svg", alt: "SASS" },
    ],
    tech_backend: [
      // Runtime & Platforms
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/nodejs.svg", alt: "Nodejs" },
      { level: 25, img: process.env.PUBLIC_URL + "/img/stackicons/express.svg", alt: "Express" },
      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/linux-tux.svg", alt: "Linux" },

      // Programming Languages
      { level: 25, img: process.env.PUBLIC_URL + "/img/stackicons/java.svg", alt: "Java" },
      { level: 25, img: process.env.PUBLIC_URL + "/img/stackicons/php.svg", alt: "PHP" },
      { level: 0, img: process.env.PUBLIC_URL + "/img/stackicons/python.svg", alt: "Python" },

      // Databases & ORM
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/mongodb.svg", alt: "Mongodb" },
      { level: 25, img: process.env.PUBLIC_URL + "/img/stackicons/mysql.svg", alt: "Mysql" },
      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/sequelize.svg", alt: "Sequelize" },
    ],
    tech_devtool: [
      // Version Control
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/git-icon.svg", alt: "Git" },
      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/github-icon.svg", alt: "Github" },
      {
        level: 75,
        img: process.env.PUBLIC_URL + "/img/stackicons/bitbucket.svg",
        alt: "Bitbucket",
      },
      { level: 25, img: process.env.PUBLIC_URL + "/img/stackicons/gitlab.svg", alt: "Gitlab" },

      // Development Environments
      {
        level: 75,
        img: process.env.PUBLIC_URL + "/img/stackicons/visual-studio-code.svg",
        alt: "VScode",
      },
      {
        level: 25,
        img: process.env.PUBLIC_URL + "/img/stackicons/sublimetext-icon.svg",
        alt: "Sublimetext",
      },
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/cursor.svg", alt: "Cursor" },

      // API & Documentation Tools
      {
        level: 50,
        img: process.env.PUBLIC_URL + "/img/stackicons/postman-icon.svg",
        alt: "Postman",
      },
      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/swagger.svg", alt: "Swagger" },

      // Project Management & Communication
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/jira.svg", alt: "Jira" },
      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/redmine.svg", alt: "Redmine" },
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/slack-icon.svg", alt: "Slack" },
      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/microsoft-teams.svg", alt: "MSTeams" },

      // DevOps & Containerization
      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/docker-icon.svg", alt: "Docker" },
      { level: 0, img: process.env.PUBLIC_URL + "/img/stackicons/firebase.svg", alt: "Firebase" },
    ],
    tech_media: [
      // Web Content Management
      {
        level: 75,
        img: process.env.PUBLIC_URL + "/img/stackicons/wordpress-icon.svg",
        alt: "Wordpress",
      },

      // Adobe Creative Suite
      {
        level: 50,
        img: process.env.PUBLIC_URL + "/img/stackicons/Adobe_Photoshop_CC.svg",
        alt: "Photoshop",
      },
      {
        level: 50,
        img: process.env.PUBLIC_URL + "/img/stackicons/Adobe_Premiere_Pro_CC.svg",
        alt: "Premiere",
      },
      {
        level: 50,
        img: process.env.PUBLIC_URL + "/img/stackicons/Adobe_Audition_CC.svg",
        alt: "Audition",
      },

      // Design & Prototyping
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/figma.svg", alt: "Figma" },

      // 3D & Animation
      { level: 0, img: process.env.PUBLIC_URL + "/img/stackicons/blender.svg", alt: "Blender" },
    ],
    tech_cloud: [
      // Cloud Platforms
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/aws.svg", alt: "AWS" },
      { level: 25, img: process.env.PUBLIC_URL + "/img/stackicons/google-cloud.svg", alt: "GCP" },
    ],
    tech_ai: [
      // AI Development Tools
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/langgraph.svg", alt: "LangGraph" },
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/langchain.svg", alt: "LangChain" },
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/mcp.svg", alt: "MCP" },
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/chatgpt-6.svg", alt: "ChatGPT" },
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/claude-icon.svg", alt: "ClaudeCode" },
      { level: 75, img: process.env.PUBLIC_URL + "/img/stackicons/github-copilot.svg", alt: "Copilot" },
      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/perplexity-icon.svg", alt: "Perplexity" },
      { level: 50, img: process.env.PUBLIC_URL + "/img/stackicons/google-gemini.svg", alt: "Gemini" },
    ],
  },
};

export default portfolioData;

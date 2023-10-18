export const wordExperienceContents = [
  {
    title: "Cover Letter",
    src: "contents/Coverletter_MasahiroKaga.jpg",
    download: "Coverletter_MasahiroKaga.pdf",
  },
  {
    title: "Resume",
    src: "contents/Resume_MasahiroKaga.jpg",
    download: "Coverletter_MasahiroKaga.pdf",
  },
];
  
const allData = {
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
    typical: ["No Code , No Life 💻", 3000, " No Code , No Vibe 🎸", 3000],
  },
  stack: {
    title: "Stack",
    fireIcon1:{ img: process.env.PUBLIC_URL + "/img/background_fire1.gif", alt: "backgroundFire" },
    fireIcon2:{ img: process.env.PUBLIC_URL + "/img/background_fire2.gif", alt: "backgroundFire" },
    tech_frontend:[
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/vue.svg", alt: "Vue" },
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/nuxt-icon.svg", alt: "Nuxt" },
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/react.svg", alt: "React" },
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/nextjs.svg", alt: "Nextjs" },
      { level:0, img: process.env.PUBLIC_URL + "/img/stackicons/angular-icon.svg", alt: "Angular" },
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/tailwindcss-icon.svg",alt: "Tailwindcss"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/sass.svg",alt: "SASS"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/html-5.svg", alt: "HTML" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/css-3.svg", alt: "CSS" },
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/javascript.svg", alt: "Javascript" },
      { level:0, img: process.env.PUBLIC_URL + "/img/stackicons/typescript-icon.svg",alt: "Typescript"},
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/jquery.svg",alt: "Jquery"},
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/bootstrap.svg", alt: "Bootstrap" },
    ],
    tech_backend:[
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/nodejs.svg", alt: "Nodejs" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/java.svg", alt: "Java" },
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/linux-tux.svg", alt: "Linux" },
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/mongodb.svg", alt: "Mongodb" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/mysql.svg", alt: "Mysql" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/express.svg", alt: "Express" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/php.svg", alt: "PHP" },
      { level:0, img: process.env.PUBLIC_URL + "/img/stackicons/python.svg", alt: "Python" },
    ],
    tech_devtool:[
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/aws.svg",alt: "AWS"},
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/git-icon.svg", alt: "Git" },
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/bitbucket.svg", alt: "Bitbucket" },
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/jira.svg", alt: "Jira" },
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/github-icon.svg", alt: "Github" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/gitlab.svg", alt: "Gitlab" },
      { level:0, img: process.env.PUBLIC_URL + "/img/stackicons/firebase.svg",alt: "Firebase"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/docker-icon.svg",alt: "Docker"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/postman-icon.svg",alt: "Postman"},
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/sublimetext-icon.svg",alt: "Sublimetext"},
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/visual-studio-code.svg",alt: "VScode"},
    ],
    tech_media:[
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/wordpress-icon.svg",alt: "Wordpress"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/Adobe_Photoshop_CC.svg",alt: "Photoshop"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/Adobe_Premiere_Pro_CC.svg",alt: "Premiere" },
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/Adobe_Audition_CC.svg",alt: "Audition"},
      { level:0, img: process.env.PUBLIC_URL + "/img/stackicons/blender.svg", alt: "Blender" },
    ]
  },
};

export default allData;
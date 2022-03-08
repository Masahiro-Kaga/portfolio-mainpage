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
    text: ["Masahiro Kaga"],
    typical: ["No Code , No Life 💻", 3000, " No Code , No Vibe 🎸", 3000],
  },
  stack: {
    title: "Stack",
    fireIcon1:{ img: process.env.PUBLIC_URL + "/img/background_fire1.gif", alt: "backgroundFire" },
    fireIcon2:{ img: process.env.PUBLIC_URL + "/img/background_fire2.gif", alt: "backgroundFire" },
    tech_frontend:[
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/react.svg", alt: "React" },
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/nextjs.svg", alt: "Nextjs" },
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/tailwindcss-icon.svg",alt: "Tailwindcss"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/html-5.svg", alt: "HTML" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/css-3.svg", alt: "CSS" },
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/javascript.svg", alt: "Javascript" },
      { level:0, img: process.env.PUBLIC_URL + "/img/stackicons/typescript-icon.svg",alt: "Typescript"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/jquery.svg",alt: "Jquery"},
      { level:0, img: process.env.PUBLIC_URL + "/img/stackicons/angular-icon.svg", alt: "Angular" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/bootstrap.svg", alt: "Bootstrap" },
    ],
    tech_backend:[
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/nodejs.svg", alt: "Nodejs" },
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/java.svg", alt: "Java" },
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/linux-tux.svg", alt: "Linux" },
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/mongodb.svg", alt: "Mongodb" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/mysql.svg", alt: "Mysql" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/express.svg", alt: "Express" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/php.svg", alt: "PHP" },
      { level:0, img: process.env.PUBLIC_URL + "/img/stackicons/python.svg", alt: "Python" },
    ],
    tech_devtool:[
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/git-icon.svg", alt: "Git" },
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/github-icon.svg", alt: "Github" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/gitlab.svg", alt: "Gitlab" },
      { level:25, img: process.env.PUBLIC_URL + "/img/stackicons/aws-ec2.svg",alt: "AWS-EC2"},
      { level:0, img: process.env.PUBLIC_URL + "/img/stackicons/firebase.svg",alt: "Firebase"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/postman-icon.svg",alt: "Postman"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/sublimetext-icon.svg",alt: "Sublimetext"},
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/visual-studio-code.svg",alt: "VScode"},
    ],
    tech_media:[
      { level:75, img: process.env.PUBLIC_URL + "/img/stackicons/Adobe_Photoshop_CC.svg",alt: "Photoshop"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/Adobe_Premiere_Pro_CC.svg",alt: "Premiere Pro" },
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/Adobe_Audition_CC.svg",alt: "Audition"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/wordpress-icon.svg",alt: "Wordpress"},
      { level:50, img: process.env.PUBLIC_URL + "/img/stackicons/blender.svg", alt: "Blender" },
    ]
  },
};

export default allData;
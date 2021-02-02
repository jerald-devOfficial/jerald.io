export default {
  nav: {
    logo: ["JERALD", "IO"],
  },
  portfolio: {
    img: process.env.PUBLIC_URL + "/assets/portfolio.png",
    text: ["Hey!", "It's me, ", "Jerald."],
    typical: [
      "I am a Full Stack Web Developer. 🖥️ ",
      3000,
      "I'm a Gamer. 🎮  ",
      3000,
      "I'm a C/C++ programmer. ",
      3000,
    ],
  },
  stack: {
    title: "MERN Full Stack",
    tech: [
      {
        img: process.env.PUBLIC_URL + "/assets/mongo.png",
        alt: "mongodb",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/react.png",
        alt: "react",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/express.png",
        alt: "express",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/node.png",
        alt: "node",
      },
    ],
    desc: `I use the MERN Stack`,
    sub: `MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.`,
    list: [
      {
        text: "MongoDB",
        caption: "document database",
      },
      {
        text: "Express.js",
        caption: "Node.js web framework",
      },
      {
        text: "React.js",
        caption: "a client-side JavaScript framework",
      },
      {
        text: "Node.js",
        caption: "the premier JavaScript web server",
      },
    ],
  },
  skills: {
    title: "My Skills",
    list: [
      {
        lang: "HTML5",
        percent: "90%",
        barAnimation: "html5",
      },
      {
        lang: "CSS3",
        percent: "80%",
        barAnimation: "css3",
      },
      {
        lang: "Javascript",
        percent: "90%",
        barAnimation: "javascript",
      },
      {
        lang: "NodeJS",
        percent: "85%",
        barAnimation: "nodejs",
      },
      {
        lang: "ReactJS",
        percent: "88%",
        barAnimation: "reactjs",
      },
      {
        lang: "MongoDB",
        percent: "70%",
        barAnimation: "mongodb",
      },
      {
        lang: "Tailwind CSS",
        percent: "80%",
        barAnimation: "tailwindcss",
      },
      {
        lang: "Bootstrap 4+",
        percent: "60%",
        barAnimation: "bootstrap",
      },
      {
        lang: "Materialize CSS",
        percent: "60%",
        barAnimation: "materializecss",
      },
      {
        lang: "SASS",
        percent: "70%",
        barAnimation: "sass",
      },
      {
        lang: "ExpressJS",
        percent: "85%",
        barAnimation: "expressjs",
      },
      {
        lang: "SQL",
        percent: "50%",
        barAnimation: "sql",
      },
      {
        lang: "Material UI",
        percent: "60%",
        barAnimation: "materialui",
      },
      {
        lang: "JQUERY",
        percent: "90%",
        barAnimation: "jquery",
      },
    ],
  },
  projects: {
    title: "Projects I made",
    windows: {
      projectName: "MyShoppe",
      desc:
        "Point of Sale in C language with database for Windows 7|10. Download now!",
      url: process.env.PUBLIC_URL + "/assets/MyShoppe.exe",
      technologies: ["C", "Windows 7/8/10", "POS", "File I/O"],
      img: {
        img: process.env.PUBLIC_URL + "/assets/MyShoppe.jpg",
        alt: "MyShoppe",
      },
    },
    list: [
      {
        projectName: "Emailer",
        desc: "This is an emailing feedback app made with MERN.",
        url: "https://jerald-emailer.herokuapp.com",
        technologies: ["MongoDB", "Express", "ReactJS", "NodeJS"],
        img: {
          img: process.env.PUBLIC_URL + "/assets/emailer.jpg",
          alt: "Emailer",
        },
      },
      {
        projectName: "Todolist v1",
        desc: "A todolist with plain node and express server.",
        url: "https://jerald-todov1.herokuapp.com",
        technologies: ["MongoDB", "Express", "NodeJS"],
        img: {
          img: process.env.PUBLIC_URL + "/assets/todov1.jpg",
          alt: "Todolist v1",
        },
      },
      {
        projectName: "Notes",
        desc: "Based on Google's keeper app with react, node and express.",
        url: "https://jerald-notes.herokuapp.com/",
        technologies: ["Express", "ReactJS", "NodeJS"],
        img: {
          img: process.env.PUBLIC_URL + "/assets/note-app.jpg",
          alt: "Notes App",
        },
      },
    ],
  },
  certificates: {
    title: "Certifications",
    list: [
      {
        certificate: "The Complete 2020 Web Development Bootcamp",
        desc:
          "Udemy's best-selling web development course and one of HIGHEST RATED online courses in history of Udemy.",
        author: "Dr. Angela Yu",
        rating: 4.7,
        hours: "55 hours",
        img: {
          img: process.env.PUBLIC_URL + "/assets/webdevbootcamp.jpg",
          alt: "Complete 2020 Web Development Bootcamp",
        },
        link:
          "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
      },
      {
        certificate:
          "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
        desc: "The most advanced and modern CSS course on the internet.",
        author: "Jonas Schmedtmann",
        rating: 4.8,
        hours: "28 hours",
        img: {
          img: process.env.PUBLIC_URL + "/assets/cssandsass.jpg",
          alt: "Advanced CSS and Sass",
        },
        link: "https://www.udemy.com/course/advanced-css-and-sass/",
      },
      {
        certificate: "Node with React: Fullstack Web Development",
        desc:
          "Build and deploy fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.",
        author: "Stephen Grider",
        rating: 4.7,
        hours: "26 hours",
        img: {
          img: process.env.PUBLIC_URL + "/assets/reactwithnode.jpg",
          alt: "Node with React",
        },
        link:
          "https://www.udemy.com/course/node-with-react-fullstack-web-development/",
      },
    ],
  },
  blog: {
    editor: process.env.PUBLIC_URL + "/blog/editor.png",
    main: {
      title: "Getting Started",
      head: "Blog - Getting Started",
      img: {
        img: process.env.PUBLIC_URL + "/blog/getting_started.jpg",
        alt: "Let's Get Started by David Iskander, unsplash",
      },
      category: "Insights",
      content: [
        "Hi, welcome to my website. My name is Jerald Baroro from Philippines. I am a full-stack web developer with MERN Stack.",
        "I started learning programming since I was in my fourth year High School and started with Visual Basic 6. Later, I learned how HTML worked and I was inspired by the success of Facebook by Mark Zuckerberg and how he made it to become the Youngest Billionaire.",
        "Then I started coding with C and during first year college at UC Main Campus and was doing pretty well with the language. When I continued my college at my hometown, I made MyShoppe POS app using C with database already using C's File I/O.",
      ],
    },
    myshoppe: {
      title: "How to Fully Access MyShoppe POS in C",
      head: "Blog - How to Fully Access MyShoppe POS in C",
      img: {
        img: process.env.PUBLIC_URL + "/blog/blog_myshoppe.png",
        alt: "MyShoppe.exe",
      },
      category: "Programming",
      content: [
        "MyShoppe was developed in C language during my college days in 2017. It is a Point-of-Sale application that functions in a Command Line Interface as it is not an Object-oriented program. The interaction between the application and the user is through keyboard strokes. The program works only in Windows environment. So, if you want to test or use this application, make sure the OS you are using is in Windows.",
        "The most special feature of this app is that it uses database on its own, the File Input / Output (File I/O) and file pointers. Another feature that you would expect is its security. It has two gateways, the Admin access and the Cashier access.",
        "In order to access these gateways, while you are in the Main page, you have three choices of characters, A, B, and C. A is for admin access, B is for Cashier access, and C is for terminate program.",
        "To go to admin access, press A, and you will be prompted to Administrator login:",
        "To go to cashier access, press B, and you will be prompted to Cashier login:",
        "You can also login to cashier once you are in the Administrator menu. There in the Administrator menu, you can manage your inventory, see Purchase logs and Net Sales. Other codes will also work for shortcut, e.g. 'cancel' and 'exit'.",
      ],
    },
    tailwindcssandreact: {
      title: "Guide to Complete TailwindCSS and React Setup",
      head: "Blog - Guide to Complete TailwindCSS and React Setup",
      img: {
        img: process.env.PUBLIC_URL + "/blog/react_tailwind.png",
        alt: "React with Tailwindcss",
      },
      blogImages: [
        {
          img: process.env.PUBLIC_URL + "/blog/err_postcss8.png",
          alt: "Error: PostCSS requires Postcss 8",
        },
        {
          img: process.env.PUBLIC_URL + "/blog/react_tailwind.png",
          alt: "React with Tailwindcss",
        },
      ],
      category: "Programming",
      content: [
        "Tailwindcss 2.0 was released on November 18, 2020. I have never tried Tailwindcss before nor did taken on any of my online courses on Udemy. I was introduced to this framework on December 2020 when I look for a help to solve a code problem with SASS on Discord. A man who helped me solve it, also recommended me to try Tailwindcss, so I became curious about it.",
        "When I visited the site, I became very much fascinated by it. So, I tried it and soon enough I loved using it. So now, I just want to share how to setup a React App with Tailwindcss.",
        "Of course, you can just simply visit tailwind’s guide by just simply clicking here. But by experience, you might experience difficulty in setting up Tailwind inside your Create React App when faced with errors on your terminal by just doing so.",
        "Let’s say we follow everything from the site’s guide, and then you encounter this:",
        "Just a few of the bugs to deal with the setup. We’ll to tell you their guide could be so buggy. With that said, things could really go wrong with how to setup Tailwindcss with React. So if you find some of the errors for tailwind with react, you are on the right page.",
      ],
    },
  },
};

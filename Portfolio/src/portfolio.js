/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Adarsh",
  title: "A passionate problem solver .",
  subTitle:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1FhytKLqfKBxWEQHpFTF5Ai0WFAczQEVG/view?usp=drive_link",
  portfolio_repository: "https://github.com/adarshanand67/masterPortfolio",
  githubProfile: "https://github.com/adarshanand67",

  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "adarsh.anand.20031@iitgoa.com",
  linkedin: "https://www.linkedin.com/in/adarsh-anand-iitgoa/",
  github: "https://github.com/adarshanand67",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "🔧 What I do?",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://iconify.design/icon-sets/ */

  softwareSkills: [
    {
      skillName: "JavaScript",
      iconfiyClassname: "logos:javascript"
    },
    {
      skillName: "TypeScript",
      iconfiyClassname: "logos:typescript-icon"
      // iconfiyClassname: "vscode-icons:file-type-typescript-official"
    },
    {
      skillName: "React JS",
      // iconfiyClassname: "vscode-icons:file-type-reactjs"
      iconfiyClassname: "logos:react"
    },
    {
      skillName: "Next.js",
      iconfiyClassname: "logos:nextjs"
    },
    {
      skillName: "Node JS",
      iconfiyClassname: "logos:nodejs-icon"
    },
    {
      skillName: "Express JS",
      iconfiyClassname: "simple-icons:express"
    },

    {
      skillName: "BootStrap",
      iconfiyClassname: "logos:bootstrap"
    },
    {
      skillName: "Material-UI",
      iconfiyClassname: "logos:material-ui"
    },
    {
      skillName: "Tailwind ",
      iconfiyClassname: "vscode-icons:file-type-tailwind"
    },

    {
      skillName: "SQL",
      iconfiyClassname: "vscode-icons:file-type-sql"
    },

    // {
    //   skillName: "aws",
    //   iconfiyClassname: "logos:aws"
    // },
    {
      skillName: "mongoDB",
      iconfiyClassname: "vscode-icons:file-type-mongo"
    },
    {
      skillName: "Firebase",
      iconfiyClassname: "logos:firebase"
    },

    ,
    {
      skillName: "Figma",
      iconfiyClassname: "logos:figma"
    },

    {
      skillName: "docker",
      iconfiyClassname: "logos:docker-icon"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IIT Goa",
      logo: require("./assets/images/iitgoa.png"),
      subHeader: "B.Tech. in Computer Science",
      duration: "2020 - 2024",
      // desc: "Studied basic software engineering subjects like Data Structures Algorithms, DBMS, OS, CN, AI",
      descBullets: [
        "👨‍💻 Strong foundation in the core concepts and principles of CS and software engineering",
        " 📚 Studied data structures, algorithms, database management systems, operating systems, computer networks, OOPs and artificial intelligence."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

// TODO - Change proficiency levels
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "UI/UX",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Intern",
      company: "Intel",
      companylogo: require("./assets/images/intel.png"),
      date: "Jun 2023 - Dec 2023 (6 months)",
      descBullets: [
        "👨‍💻 Collaborating with the IPAS S3 team to identify and implement security measures for Zero-Touch provisioning Intel FDO Devices.",
        "🔧 Refactored Intel Client Software Development Kit Service info modules and helped improved Codebase.",
        "🎨 Reviewing and Creating the User Interface for the Bare Metal Device using Intel Design principles."
      ]
    },
    {
      role: "React Educator (Graphy by Unacademy)",
      company: "Graphy",
      companylogo: require("./assets/images/graphy.jpg"),
      date: "Jan 2023 - Feb 2023",
      descBullets: [
        "📚 Taught 20+ live sessions on React on the Graphy platform, designed course outlines, and did PR and marketing for the course.",
        "👨‍🏫 Provided students with a comprehensive understanding of React, including the fundamentals of the framework, the React ecosystem, and the latest features of the framework with a focus on practical application of React concepts."
      ]
    }
  ]
};

const resume = {
  display: true // Set false to hide this section, defaults to true
};

const volunteerExperience = {
  display: true,
  volunteerExperience: [
    {
      role: "Developer Student Club lead",
      company: "Google Developers",
      companylogo: require("./assets/images/googleLogo.png"),
      date: "Jun 2023 - Present",
      descBullets: [
        "📚 Conducted and organized workshops within the college, on topics such as web development and cloud computing.",
        "👨‍🏫 Motivated students to learn and explore new technologies by providing hands-on experiences, mentorship and engaging presentations."
      ]
    },
    {
      role: "Goymyno Coding Club ",
      company: "Gomyno",
      companylogo: require("./assets/images/gm.jpeg"),
      date: "Jun 2023 - Present",
      descBullets: [
        "📚 Actively participated in the planning and execution of club activities, including weekly coding workshops and hackathons.",
        "👨‍🏫 Helped to improve the coding skills of fellow members through collaborative problem-solving and peer-to-peer instruction."
      ]
    },
    {
      role: "Online Event Manager",
      company: "Cepheus",
      companylogo: require("./assets/images/ceph.jpeg"),
      date: "Sep 2022 - Present  ",
      descBullets: [
        "💻 Proficient in using various online event management tools and platforms to ensure smooth and seamless event execution.",
        "🎤 Experienced in managing virtual networking and engagement activities to enhance the overall attendee experience."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Notable Projects",
  subtitle: "Some of the Notable Projects that I have worked upon!",
  projects: [
    {
      image: require("./assets/images/ShareMe.png"),
      projectName: "ShareMe",
      projectDesc:
        "Created Social Media site where users can upload, search, save, filter, comment, delete and download posts.",
      footerLink: [
        {
          name: "🔗 Site",
          url: "https://share-me-web.netlify.app/login"
        },
        {
          name: "👩‍💻 Code",
          url: "https://github.com/adarshanand67/ShareMe"
        }
      ]
    },
    {
      image: require("./assets/images/stockX.png"),
      projectName: "StockX",
      projectDesc:
        "StockX is a stock market website that provides real-time stock data and technical Analysis to beginners and experts alike.",
      footerLink: [
        {
          name: "🔗 Site",
          url: "https://stockx-flipr.vercel.app/"
        },
        {
          name: "👩‍💻 Code",
          url: "https://github.com/adarshanand67/Flipr"
        }
      ]
    },
    {
      image: require("./assets/images/calmly.png"),
      projectName: "Calmly",
      projectDesc: "Developed a mental health web application using React JS",
      footerLink: [
        {
          name: "🔗 Site",
          url: "https://calmly-mental-health.vercel.app/"
        },
        {
          name: "👩‍💻 Code",
          url: "https://github.com/adarshanand67/Calmly"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: "🏆 Achievements And Certifications",
  subtitle: "Achievements and Some Cool Stuff that I have accomplished!",

  achievementsCards: [
    {
      title: "Flipr Hackathon XVI Winner",
      subtitle:
        "Won the Flipr Hackathon XVI by building a Stock Market website that provides real-time stock data and technical Analysis to beginners and experts alike.",
      image: require("./assets/images/flipr.webp"),
      imageAlign: "Flipr",
      footerLink: [
        {
          name: "🔗 Link",
          url: "https://www.linkedin.com/posts/adarsh-anand-iitgoa_teamwork-grateful-webdevelopment-activity-7024786821859393536-jC_j?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "ZetaPass Hackathon Winner",
      subtitle:
        "Won the ZetaPass Hackathon by building a UI design for Ed tech website.",
      image: require("./assets/images/zetapass.jpg"),
      imageAlign: "Flipr",
      footerLink: [
        {
          name: "🔗 Link",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7030097606164779008/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@adarsh.anand.20031/git-for-beginners-7a946bfaa4ba",
      title: "Git for beginners",
      description:
        "Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/Adarshpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Adarsh-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6207861361",
  email_address: "adarsh.anand.20031@iitgoa.ac.in"
};

// Twitter Section

const twitterDetails = {
  userName: "adarshanand67", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  openSource,
  podcastSection,
  resume,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  talkSection,
  techStack,
  twitterDetails,
  volunteerExperience,
  workExperiences
};

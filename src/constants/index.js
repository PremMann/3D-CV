import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    php,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    krawma,
    allweb,
    weeeee,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bootstrap,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Video Creator ",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    }
  ];
  
  const experiences = [
    {
      title: "React Native Developer",
      company_name: "Krawma & Associates",
      icon: krawma,
      iconBg: "white",
      date: "Feb 2022 - Present",
      points: [
       "Web application development",
       "Billing systems development and reconciliation",
       "Database management, Data summary & analysis",
       "Build reusable code and libraries for future use",
       "Optimize application for maximum speed and scalability",
       "Roll-out concepts and timing",
       "Present and defend work and key milestone deliverables to the development team, management, and stakeholders",
       "Establish and promote design guidelines, best practices, and standards",
      ],
    },
    {
      title: "Web Developer (PHP)",
      company_name: "ALLWEB Co., Ltd",
      icon: allweb,
      iconBg: "white",
      date: "January 2019 – December 2021",
      points: [
        "Design, build, and maintain efficient, reusable, and reliable PHP applications.",
        "Debug existing systems.",
        "Analyze the specifications given by the clients, feedback and impacts, regression and technical implements afterward.",
        "Review Code.",
        "Write Test Case.",
        "Help Teams (Cambodia, France, Vietnam)"
      ],
    },
    {
      title: "Internship",
      company_name: "W.E Bridge Technologies",
      icon: weeeee,
      iconBg: "rgb(0 191 237)",
      date: "June 2018 – December 2018",
      points: [
        "Working on Objective C",
        "Edit some feature on HenkelCRM App and iBrain Teacher App",
        "Create and testing on HR App",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
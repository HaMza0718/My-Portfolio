import blogApp from "../assets/portfolio/blogApp.PNG";
import fashionNova from "../assets/portfolio/fashionNova.PNG";
import foodTime from "../assets/portfolio/foodTime.PNG";
import hulu from "../assets/portfolio/hulu.PNG";
import realState from "../assets/portfolio/realState.PNG";
import snapLeather from "../assets/portfolio/snapLeather.PNG";

export const PROFILE = {
  name: "Hamza Yasir",
  title: "SharePoint Developer | Frontend Developer",
  shortTitle: "SharePoint Developer",
  summary: "SharePoint and Frontend Developer with 3 years of experience building custom SharePoint Framework (SPFx) web parts and enterprise intranet portals using React.js and TypeScript for SharePoint Online and SharePoint On-Premises. Experienced in automating business processes using Power Apps, Power Automate, and SharePoint Designer workflows, as well as integrating SAP and live business data into SharePoint through REST APIs. Skilled in delivering end-to-end enterprise solutions, from requirements gathering and UI development to SharePoint configuration, integration, and deployment.",
  email: "hamzayasir677@gmail.com",
  phone: "+92 347 2086321",
  phoneHref: "tel:+923472086321",
  location: "Karachi, Pakistan",
  linkedin: "https://www.linkedin.com/in/hamza-yasir-64885a230/",
  github: "https://github.com/HaMza0718",
  cvPath: "https://drive.google.com/file/d/1GJTGjJwvg_CG6YPtvAG-5jYi4Xbfm4JK/view?usp=sharing",
  whatsapp: "https://wa.me/923472086321",
};

export const NAV_LINKS = [
  { id: 1, link: "home", label: "Home" },
  { id: 2, link: "about", label: "About" },
  { id: 3, link: "experience", label: "Experience" },
  { id: 4, link: "skills", label: "Skills" },
  { id: 5, link: "projects", label: "Projects" },
  { id: 6, link: "certifications", label: "Certifications" },
  { id: 7, link: "contact", label: "Contact" },
];

export const ABOUT = {
  overview: [
    "3 years of professional development experience delivering enterprise SharePoint and frontend solutions.",
    "SharePoint Framework (SPFx) development for SharePoint Online and SharePoint On-Premises.",
    "Enterprise intranet portals built with React.js and TypeScript.",
    "Business process automation with Power Apps, Power Automate, and SharePoint Designer workflows.",
    "REST API and SAP integrations connecting live business data into SharePoint.",
    "End-to-end solution development from requirements gathering through deployment and support.",
  ],
  expertise: [
    "SharePoint Framework Development",
    "SharePoint Online and On-Premises",
    "Enterprise Intranet Development",
    "Frontend Development",
    "Business Process Automation",
    "API Integrations",
  ],
  education: {
    degree: "Bachelor's in Computer Science",
    institution: "Muhammad Ali Jinnah University, Karachi, Pakistan",
    period: "September 2019 – June 2023",
  },
};

export const EXPERIENCE = [
  {
    id: 1,
    role: "Associate Software Engineer",
    company: "Hexalyze Consulting Services (HCS)",
    period: "June 2024 – Present",
    responsibilities: [
      "Develop and deploy custom SPFx web parts for SharePoint Online and SharePoint On-Premises.",
      "Build dynamic and responsive SPFx components using React.js and TypeScript.",
      "Improve functionality and user experience.",
      "Collaborate directly with client teams to gather requirements and customize solutions.",
      "Provide deployment and post-deployment support.",
    ],
  },
  {
    id: 2,
    role: "Junior SharePoint Developer",
    company: "Code Creators Inc.",
    period: "February 2024 – May 2024",
    responsibilities: [
      "Collaborated with senior developers to design and deploy SharePoint solutions.",
      "Designed and configured Power Apps user interfaces.",
      "Developed Power Automate flows for approvals and notifications.",
      "Integrated SharePoint Lists and Document Libraries with Power Apps applications.",
    ],
  },
  {
    id: 3,
    role: "SharePoint Intern",
    company: "Code Creators Inc.",
    period: "November 2023 – January 2024",
    responsibilities: [
      "Created SharePoint web parts, lists, and workflows.",
      "Customized SharePoint site layouts.",
      "Built custom applications and forms using Power Apps.",
      "Developed and configured workflows.",
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    id: "sharepoint",
    title: "SharePoint & Microsoft Platform",
    skills: [
      "SharePoint Online",
      "SharePoint On-Premises",
      "SharePoint Framework (SPFx)",
      "SharePoint Lists",
      "Document Libraries",
      "SharePoint Designer",
      "Power Apps",
      "Power Automate",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
    ],
  },
  {
    id: "data",
    title: "Data & Integration",
    skills: ["REST APIs", "SAP Integration", "SQL"],
  },
  {
    id: "tools",
    title: "Development Tools",
    skills: ["Git", "GitHub", "Bitbucket"],
  },
];

export const ENTERPRISE_PROJECTS = [
  {
    id: 1,
    title: "PSO Intranet Portal & Workflow Applications",
    client: "Pakistan State Oil (PSO)",
    featured: true,
    accent: "from-cyan-500/20 to-blue-600/10",
    technologies: ["SPFx", "React.js", "TypeScript", "SharePoint", "REST APIs"],
    description:
      "Designed, developed, and delivered an end-to-end enterprise intranet portal and workflow applications for Pakistan State Oil using SharePoint Framework, React.js, and TypeScript.",
    features: [
      "News & Media",
      "Departments",
      "Policies & Forms",
      "HSE",
      "HR Services",
      "Employee Directory with Organization Chart",
      "Help Centre",
      "SharePoint Lists and Document Libraries",
      "SAP business data integration",
      "Live fuel price and PSO stock data integration",
      "Data Analytics dashboard",
    ],
    contribution: [
      "End-to-end portal development",
      "SharePoint data modeling",
      "Custom SPFx web parts",
      "React.js and TypeScript development",
      "REST API integrations",
      "Client coordination",
      "Deployment and post-deployment support",
    ],
  },
  {
    id: 2,
    title: "The Private Office (TPO)",
    client: null,
    featured: false,
    accent: "from-blue-500/20 to-indigo-600/10",
    technologies: ["SPFx", "React.js", "TypeScript", "SharePoint Designer"],
    description:
      "Developed department dashboards providing employees with a modern interface to manage tasks, updates, and departmental resources.",
    features: [
      "Department dashboards",
      "Task creation and assignment",
      "Task tracking",
      "Automated task approvals",
      "Status updates",
      "Notifications",
      "Responsive React.js components",
      "SharePoint Designer workflows",
    ],
    contribution: [],
  },
  {
    id: 3,
    title: "Tulloch Tracking System",
    client: null,
    featured: false,
    accent: "from-teal-500/20 to-cyan-600/10",
    technologies: ["Power Apps", "Power Automate", "SharePoint"],
    description:
      "Developed a barcode tracking solution to capture item information, retrieve records, validate data, and monitor scanning activities.",
    features: [
      "Barcode scanning",
      "Item information retrieval",
      "Real-time data validation",
      "Scanning history",
      "User activity tracking",
      "SharePoint dashboards and reports",
      "Automated approvals and notifications",
    ],
    contribution: [],
  },
  {
    id: 4,
    title: "Attendance Management System",
    client: null,
    featured: false,
    accent: "from-sky-500/20 to-blue-700/10",
    technologies: ["Power Apps", "Power Automate", "SharePoint"],
    description:
      "Developed an attendance and leave management application supporting employees across mobile and desktop devices.",
    features: [
      "Attendance marking",
      "Attendance status checking",
      "Leave applications",
      "Manager approval workflows",
      "SharePoint-based attendance records",
      "Leave request management",
      "Automated notifications",
      "Approval history",
    ],
    contribution: [],
  },
];

export const PERSONAL_PROJECTS = [
  {
    id: 1,
    src: realState,
    demo: "https://real-estate-react-web-app.vercel.app/",
  },
  {
    id: 2,
    src: snapLeather,
    demo: "https://snapleather-leathercollection.netlify.app/",
  },
  {
    id: 3,
    src: foodTime,
    demo: "https://hamza0718.github.io/Food-Time/",
  },
  {
    id: 4,
    src: hulu,
    demo: "https://hulu-2-0-nextjs-beta.vercel.app/",
  },
  {
    id: 5,
    src: fashionNova,
    demo: "https://fashion-nova-ecommerce-store.netlify.app/",
  },
  {
    id: 6,
    src: blogApp,
    demo: "https://blog-app-reactjs-firebase.netlify.app/",
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "The Complete React.js Course: Basics to Advanced (2023)",
    href: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-b6773ede-e3a3-4da4-96f3-ed8a52fd63f7.pdf",
  },
  {
    id: 2,
    title: "Complete JavaScript & jQuery Course with Bonus Vue.js Intro",
    href: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f900bf97-d2e8-4e98-81a6-36fc643fd66d.pdf",
  },
  {
    id: 3,
    title: "Complete Responsive Web Development",
    href: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-209cf508-1c08-4f99-9794-8d6db7612200.pdf",
  },
  {
    id: 4,
    title: "Intermediate SQL Queries",
    href: '',
  },
];

export const CONTACT_FORM_ENDPOINT =
  "https://getform.io/f/7735f1c6-6f32-4b23-93d3-a1344da91dce";

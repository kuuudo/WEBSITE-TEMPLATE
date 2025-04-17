import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
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

export const services = [
 // { title: "C", icon: c },
  //{ title: "C++", icon: cpp },
  //{ title: "Python", icon: python },
  //{ title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "High-Ticket Closer & Sales Expert",
    company_name: "Sir Marco Robinson Coaching",
    icon: edunet, // Reverted to the old icon
    iconBg: "#161329",
    iconSize: "large", // Added property to make the icon bigger
    date: "Jan 2024 - Present",
    points: [
      "I helped coaches scale their businesses by integrating them into a results-driven coaching program led by Sir Marco Robinson, generating over $180,000 in revenue.",
      "I successfully closed 40+ high-ticket deals, ranging from $1,000 to $7,000 each, while providing personalized sales support, including training and oversight for appointment setters to drive high-conversion results.",
      "Over the course of my work, I spoke to hundreds of life coaches, executive coaches, career coaches, and health coaches, gaining a deep understanding of their pain points and helping them overcome challenges.",
      "My role involved guiding and supporting clients through a structured system that included group coaching, 1-on-1 business audits, and access to trained sales teams.",
      "I also helped clients implement Sir Marco’s award-winning messaging frameworks and sales systems to attract ideal clients, close deals faster, and scale their businesses effectively.",
    ],
    },
    {
    title: "Sales Specialist - Webinar Success",
    company_name: "Suzanne Glover | Freelance",
    icon: eduskill, // You can replace this with a relevant icon or image.
    iconBg: "#161329", // Choose a color that fits the branding or vibe.
    iconSize: "large", // Added property to make the icon bigger
    date: "March 2023 - Aguest 2023",
    points: [
      "I successfully helped close sales for Suzanne Glover's 'Influence Through Video' webinar, where Suzanne utilized her 35 years of experience as a professional actress, sales expert, and internet marketer to help entrepreneurs scale their businesses through the power of video.",
      "As a top earner in the Screen Actors Guild, Suzanne has taught industry secrets and shown business owners how to effectively use video to connect with their audience and drive sales.",
      "In the webinar, she addressed the two biggest challenges entrepreneurs face today, helping them integrate video into their business strategy for growth.",
      "By engaging with attendees, understanding their pain points, and guiding them through the decision-making process, I used a consultative selling approach to show participants how video could transform their businesses and boost conversions.",
    ],
    },
    {
    title: "Remote Closer - High-Ticket Coaching Programs",
    company_name: "Systemise and Sell ",
    icon: mathwork,
    iconBg: "#161329",
    iconSize: "large", // Added property to make the icon bigger
    date: "Sep 2022 - Nov 2023",
    points: [
      "Closed high-ticket offers for coaches and consultants scaling their businesses with Marco's elite systems.",
      "Handled inbound and appointment-set leads, delivering tailored solutions aligned with each client’s unique challenges.",
      "Collaborated with a world-class team of setters and closers to streamline the sales process and boost conversion rates.",
      "Provided detailed feedback to improve offer positioning, objection handling, and overall client enrollment experience.",
    ],
  },
];

export const projects = [
  {
    name: "Building Tailored Sales Systems for Clients: Sales Systems, Infrastructure, Leverage systems",
    description:
      "Sales system map, real client case studies, ready-to-use scripts, step-by-step sales process, targeted training, automated email outreach, and specialist training to attract ideal clients.",
    tags: [
      { name: "SalesInfrastructure", color: "blue-text-gradient" },
      { name: "SystemBuilding", color: "green-text-gradient" },
      { name: "Marketing Systems", color: "pink-text-gradient" },
      
    ],
    image: weatherpedia,
    source_code_link: "https://miro.com/app/board/uXjVKJO1Kxg=/?share_link_id=72892662658A",
  },
  {
    name: "Appointment Setter Team Formation",
    description:
      "This project helps clients build and manage efficient virtual assistant (VA) teams tailored to their needs. With experience in VA tasks like personal assistance, appointment setting, cold DMs, and cold calling, I guide them through every step. Backed by proven results and two in-depth YouTube tutorials, I offer practical strategies to delegate effectively, boost productivity, and achieve real results",
    tags: [
      { name: "RemoteTeamBuilding", color: "blue-text-gradient" },
      { name: "Recruiting", color: "green-text-gradient" },
      { name: "Appointment Setters", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://www.youtube.com/watch?v=mt00JCJsQdM",
  },
  {
    name: "Automated Email System",
    description:
      "This system walks you through building a powerful email outreach system—from scraping and qualifying data to finding key decision-makers and sending thousands of emails without getting blocked. Learn how to set up a fully automated email machine that delivers results, not headaches..",
    tags: [
      { name: "EmailAutomation", color: "blue-text-gradient" },
      { name: "Datascraper", color: "green-text-gradient" },
      { name: "ColdEmailMachine", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://www.youtube.com/watch?v=S1qNKlDHT9Q",
  },
  {
    name: "Pathway XR",
    description:
      "Pathway XR is a 3D interactive experience system built with Three.js that blends cinematic VSL storytelling with a gamified roadmap. Users journey through six powerful stages—Intro, Failure, Pain, Solution, Transformation, and Program—designed to turn your offer into an immersive story that connects, engages, and converts.",
    tags: [
      { name: "Interactive3DWebsite", color: "blue-text-gradient" },
      { name: "StorySelling", color: "blue-text-gradient" },
      { name: "VSL", color: "green-text-gradient" },
      { name: "CoachingFunnelDesign", color: "pink-text-gradient" },
      { name: "ImmersiveJourney", color: "pink-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://robert-errante-portfolio.vercel.app/",
  },
  {
    name: "VisionSpark",
    description:
      "VisionSpark is a visually stunning storytelling tool that helps coaches spark massive interest in their offers, build authority, and turn viewers into leads. Designed to be a creative attention magnet, it transforms your message into a high-converting visual journey that builds trust, drives engagement, and fuels business growth.",
    tags: [
      { name: "VisualMarketing", color: "blue-text-gradient" },
      { name: "BrandStorytelling", color: "green-text-gradient" },
      { name: "CreativeFunnels", color: "pink-text-gradient" },
      { name: "HighTicketMarketing", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "VSL TEMPLATE",
    description:
      "I Built a ready-to-use Website template using simple front-end technologies. This template is hosted on GitHub and allows easy customization.",
    tags: [
      { name: "HTMLTemplate", color: "blue-text-gradient" },
      { name: "ModernWebDesign", color: "green-text-gradient" },
      { name: "UXUI", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/kuuudo/WEBSITE-TEMPLATE",
  },
];

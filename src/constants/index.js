import { FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiPrisma, SiTailwindcss } from "react-icons/si";
import calculator from "../assets/projects/calculator.png";
import mercadolibre from "../assets/projects/mercadolibre.png";
import turnit from "../assets/projects/turnit.png";
import wallet from "../assets/projects/wallet.png";

const navbar = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
];

const projects = [
  {
    title: "Mercado Libre Clone",
    github: "https://github.com/facuperezbri/meli-practice-client",
    deploy: "https://meli-practice-client.vercel.app/",
    image: mercadolibre,
    technologies: [
      <FaReact color="#61DBFB" size={25} />,
      <FaNodeJs color="#8CC84B" size={25} />,
      <SiExpress size={25} />,
      <SiTailwindcss color="#37BDF8" size={25} />,
    ],
  },
  {
    title: "Apple-style calculator",
    github: "https://github.com/facuperezbri/apple-calculator",
    deploy: "https://apple-calculator-nu.vercel.app/",
    image: calculator,
    technologies: [
      <FaReact color="#61DBFB" size={25} />,
      <SiTailwindcss color="#37BDF8" size={25} />,
    ],
  },
  {
    title: "Wallet",
    github: "https://github.com/facuperezbri/henry-pf-client",
    deploy: "https://henry-pf-client.vercel.app/",
    image: wallet,
    technologies: [
      <FaReact color="#61DBFB" size={25} />,
      <FaNodeJs color="#8CC84B" size={25} />,
      <SiExpress size={25} />,
      <SiPrisma size={25} />,
      <SiTailwindcss color="#37BDF8" size={25} />,
      <SiFirebase size={25} />,
    ],
  },
  {
    title: "Turn it Case Study",
    github: null,
    deploy: "https://www.behance.net/gallery/133000477/Turnit-Diseno-UXUI",
    image: turnit,
    technologies: [<FaFigma size={25} />],
  },
];

const skills = [
  {
    title: "HTML",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    title: "CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png",
  },
  {
    title: "SASS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png",
  },
  {
    title: "Tailwind",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png",
  },
  {
    title: "Bootstrap",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
  },
  {
    title: "Javascript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    title: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  },
  {
    title: "React Native",
    icon: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
  },
  {
    title: "Typescript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  },
  {
    title: "Redux",
    icon: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  },
  {
    title: "Redux Saga",
    icon: "  https://redux-saga.js.org//img/Redux-Saga-Logo-Portrait.png",
  },
  {
    title: "NodeJS",
    icon: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg",
  },
  {
    title: "Express",
    icon: "https://rithmapp.s3-us-west-2.amazonaws.com/assets/express-logo.png",
  },
  {
    title: "PostgreSQL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/233px-Postgresql_elephant.svg.png",
  },
];

export { navbar, projects, skills };

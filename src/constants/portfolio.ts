import type { Project, Skill } from '@/types/terminal'

export const projects: Project[] = [
  {
    title: "Mercado Libre Clone",
    github: "https://github.com/facuperezbri/meli-practice-client",
    deploy: "https://meli-practice-client.vercel.app/",
    image: "/projects/mercadolibre.png",
    technologies: ["React", "Node.js", "Express", "Tailwind"],
    description: "Clon funcional de MercadoLibre con búsqueda, filtros y carrito de compras"
  },
  {
    title: "Apple-style calculator",
    github: "https://github.com/facuperezbri/apple-calculator",
    deploy: "https://apple-calculator-nu.vercel.app/",
    image: "/projects/calculator.png",
    technologies: ["React", "Tailwind"],
    description: "Calculadora con diseño idéntico a la de iOS"
  },
  {
    title: "Wallet",
    github: "https://github.com/facuperezbri/henry-pf-client",
    deploy: "https://henry-pf-client.vercel.app/",
    image: "/projects/wallet.png",
    technologies: ["React", "Node.js", "Express", "Prisma", "Tailwind", "Firebase"],
    description: "Aplicación de gestión financiera personal"
  },
  {
    title: "Turn it Case Study",
    github: null,
    deploy: "https://www.behance.net/gallery/133000477/Turnit-Diseno-UXUI",
    image: "/projects/turnit.png",
    technologies: ["Figma"],
    description: "Case study de diseño UX/UI para aplicación móvil"
  },
]

export const skills: Skill[] = [
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
    icon: "https://redux-saga.js.org//img/Redux-Saga-Logo-Portrait.png",
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
]

export const aboutText = `I'm a Software Engineer with a strong background in technology and business, which allows me to approach product development with both a technical and strategic mindset.

I currently work as a Sr. Software Engineer at Galileo (formerly Technisys), part of SoFi, where I contribute to the development of digital banking solutions for Banco Patagonia, one of the most important banks in Argentina. My role involves building and maintaining scalable, high-quality front-end applications used by thousands of users.

On a daily basis, I work with React, Redux, Redux-Saga and Styled Components, following agile methodologies and collaborating closely with cross-functional teams to deliver reliable and user-focused solutions.

I'm especially interested in writing clean, maintainable code, improving user experience, and continuously learning better ways to build robust products.

Outside of work, I enjoy playing drums and guitar.

Currently based in Mendoza, Argentina 🇦🇷`

export const contactInfo = {
  email: "facundo.perez.brizuela@gmail.com",
  linkedin: "https://www.linkedin.com/in/facuperezbri/",
  github: "https://github.com/facuperezbri",
}

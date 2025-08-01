import futshop from "../assets/picture/futshop.png";
import momkina from "../assets/picture/momkina.png";
import cabinet from "../assets/picture/cabinet.png";
import cosaluxe from "../assets/picture/cosaluxe.png";
export const projects = [
  {
    id: 1,
    title: "FutShop E-commerce",
    description:
      "Modern  e-commerce platform with product filtering, cart functionality, and smooth animations",
    tags: ["React", "Gsap", "Tailwind CSS", "Framer Motion", "Ecommerce"],
    image: futshop,
    github: "https://github.com/Yassirdrioche/Shop-Store",
    live: "https://futshop.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Clinic Management",
    description:
      "Patient management system for medical clinics with appointment scheduling",
    tags: ["React", "Material UI", "FullCalendar"],
    image: cabinet,
    github: "private",
    live: "https://cabinet-medical-pfe.onrender.com/",
    featured: true,
  },
  {
    id: 3,
    title: "Momkina Agency",
    description:
      "Creative agency website with portfolio showcase and contact management",
    tags: ["Next.js", "GSAP", "Tailwind css", "Iconify"],
    image: momkina,
    github: "private",
    live: "https://www.momkina.com/",
    featured: true,
  },
  {
    id: 4,
    title: "CosaLuxe Beauty",
    description:
      "Elegant beauty salon website with service booking and gallery",
    tags: ["React", "Tailwind CSS", "Iconify"],
    image: cosaluxe,
    github: "private",
    live: "https://www.cosaluxe.ma/",
    featured: true,
  },
];

import projImg1 from "../assets/img/MotorcycleServicePortada.png";
import projImg2 from "../assets/img/MotorcycleServiceLogo.png";
import projImg3 from "../assets/img/AppSalesManagmentPortada.png";
import projImg4 from "../assets/img/AppSalesManagmentCarrousel.png"
import projImg5 from "../assets/img/AndreinartisticaPortada.png"
import projImg6 from "../assets/img/AndreinartisticaCarrousel.png"
import projImg7 from "../assets/img/PortafolioJuanPortadaLogo.png"
import projImg8 from "../assets/img/PortafolioJuanCarrousel.png"
import projImg9 from "../assets/img/PortafolioJuanCarrousel1.png"
import projImg10 from "../assets/img/PortafolioJuanPortadaMax.png"

export const projects = [
  {
    id: "1",
    title: "Motorcycle Workshop Management System App",
    category: "first",
    subtitle:
      "Internal application for efficient management of work records, clients, motorcycles, employees, and automated budget generation",
    mainImage: projImg1,
    tags: ["AppSheet", "Google Sheets", "Automation", "Workshop"],
    problem:
      "The workshop owner faced the need to modernize operations, as all records were previously kept only on paper. This made it difficult to track clients, motorcycles, and services performed, led to errors in billing calculations, and complicated employee task management. A centralized, simple, and accessible solution was needed to digitize daily operations, automate budget creation, and improve overall business organization.",
    role: "I designed the data structure, configured AppSheet, implemented automation using bots to generate PDFs, and organized the information in an intuitive way.",
    tools: [
      "Google AppSheet",
      "Google Sheets",
      "Workflow Bots",
      "PDF Automation",
    ],
    duration: "April 2025 - July 2025",
    type: "Freelance / Real project",
    images: [
      projImg1,
      projImg2,
      projImg1,
    ],
    videoDemo: "https://tu-link-a-video.com",
    approach:
      "In this project, I used Google Sheets as a simulated relational database and AppSheet to build custom forms, record views, and actions tailored to the workflow of a motorcycle service business.",
    challenges:
      "The main challenge was designing a logic structure that could reuse previously entered data—such as existing clients—and automate the generation of PDF estimates based on specific conditions.",
    learning:
      "This experience allowed me to significantly improve my skills with no-code tools by applying declarative logic, conditional flows, and a user-friendly interface design.",
    status: "In production, currently used by the workshop",
    outcome:
      "As a result, I helped reduce the management time, improve internal organization, and systematize a more efficient and scalable workflow for the business.",
    githubRepo: "",
    liveDemo: "",
    post: "",
    pdf: "",
    closingNote:
      'Beyond the technical execution, this project gave me a deeper understanding of system design and database structure at a conceptual level. Even without writing traditional code, I had to carefully consider how the data would relate, flow, and remain consistent—enhancing my architectural thinking and problem-solving abilities in real-world scenarios.',
  },
  {
  id: "2",
  title: "Desktop App for Sales and Customer Management",
  category: "first",
  subtitle:
    "Desktop application developed as a technical challenge for a developer position, focused on managing customers, products, and business sales.",
  mainImage: projImg3,
  tags: ["Visual Basic .NET", "SQL Server", "Desktop App", "Sales Management"],
  problem:
    "The challenge was to build a functional application capable of managing customers, products, and sales, including reports and automatic calculations, replicating common internal business system scenarios. The system had to support create, read, update, and delete operations, along with sales visualization and analysis.",
  role:
    "I developed the complete architecture of the application using the 3-layer pattern. I implemented forms with conditional logic, validations, automatic calculations, and SQL queries for dynamic reporting.",
  tools: [
    "Visual Basic .NET",
    "SQL Server",
    "Windows Forms",
    "Three-Layer Architecture",
  ],
  duration: "July 2025 (1 week)",
  type: "Technical Challenge",
  images: [
    projImg3,
    projImg4,
    projImg3,
  ],
  videoDemo: "https://tu-video-link.com",
  approach:
    "I designed a well-structured system with separate forms for customer, product, and sales management. SQL Server acted as the relational database, supporting stored procedures and optimized queries. To ensure clean data entry, I also implemented visual validation and form-level logic.",
  challenges:
    "One of the biggest challenges was maintaining clear business logic across all layers, preserving data consistency and modularity. Post-delivery, I identified some edge cases involving deleted entities (such as customers or products) that were still referenced in sales records. Since the challenge didn’t allow changes to the database schema, I addressed this by using LEFT JOIN and ISNULL to display fallback labels like “Customer Deleted” or “Product Deleted” instead of breaking the view. I also used internally stored JSON objects to implement dynamic product categories without altering the schema. While these workarounds were effective within the constraints, a more robust long-term solution would involve adding a few extra columns and implementing a snapshot strategy to preserve historical data integrity.",
  learning:
    "This project deepened my understanding of layered architecture, data normalization, relationship design, and form validation. I also honed my ability to interpret business requirements and adapt to real-world constraints—skills I consider crucial in professional development environments.",
  status: "Completed",
  outcome:
    "As a result, I delivered a fully functional application that met most of the requirements and included additional features, such as dynamic category management using JSON. In my view, the system offered a solid user experience and clear data handling, demonstrating a meticulous design aligned with the expectations for a system of this kind.",
  githubRepo: "https://github.com/tuusuario/prueba-tecnica-vbnet",
  liveDemo: "",
  post: "",
  pdf: "",
  closingNote:
    "TThis technical challenge was a valuable opportunity to apply my skills in a real-world scenario. While it presented some initial challenges due to my lack of experience with certain technologies, I approached it with curiosity and determination, adapted quickly, and delivered a reliable solution in a short time. I’m proud of what I accomplished and excited to continue growing through practical experience.",
},
{
  id: "3",
  title: "Web Portfolio for a Visual Artist",
  category: "first",
  subtitle:
    "Ongoing development of a personalized platform to showcase and sell the artwork of a contemporary visual artist — built from scratch with full control over design, backend, and deployment.",
  mainImage: projImg5,
  tags: ["React", "ASP.NET Core", "SQL Server", "UI/UX"],
  problem:
    "The artist needed a platform that could serve both as a visual portfolio and as a tool for selling artwork online. Previously, her presence was scattered across social networks or physical exhibitions, lacking a centralized space that reflected the depth and reach of her work.",
  role:
    "I'm in charge of the full development process — from research and UI design to backend architecture, database modeling, and deployment planning. The project is being built with a clear vision for long-term scalability and artistic storytelling.",
  tools: [
    "Figma (UI Design)",
    "React",
    "ASP.NET Core (C#)",
    "SQL Server",
    "Azure Deployment (planned)",
  ],
  duration: "January 2024 — Currently in Progress",
  type: "Personal / Freelance",
  images: [
    projImg5,
    projImg6,
    projImg5,
  ],
  videoDemo: "", // podrías agregar uno de Figma si grabás una demo
  approach:
    "The development follows an MVP structure, prioritizing core features such as the art gallery, artist bio, and exhibition history. The initial design was created in Figma and is now being revised to incorporate features like user login, online payments, and a responsive layout for all devices. Hosting and custom domain deployment are planned through Azure.",
  challenges:
    "Balancing aesthetics and technical functionality has been central. Also, I'm revisiting parts of the design to integrate new ideas such as secure payments, client interaction, and mobile-first optimization — all while keeping scalability and usability in mind.",
  learning:
    "This project is giving me a deeper understanding of system design from a business and emotional perspective — it's not just about the code, but about building something meaningful, personal, and sustainable over time. It's also helping me refine deployment workflows and sharpen my full-stack capabilities.",
  status: "In Development",
  outcome:
    "Still in progress, but already a valuable sandbox for practicing complete product development — from branding and UX to backend logic and cloud hosting.",
  githubRepo: "", // o privado si no lo vas a abrir
  liveDemo: "", // futuro enlace si hacés deploy
  post: "",
  pdf: "",
  closingNote:
    "Even though this project is still evolving, it's one of the most meaningful and technically ambitious projects I've worked on. It represents not only my commitment to creating value through technology, but also a tribute to my mother's art and story — built with love, care, and long-term vision.",
},
{
  id: "4",
  title: "Personal Web Portfolio",
  category: "first",
  subtitle:
    "A fully custom personal website designed and developed to showcase my work, services, and identity as a full-stack developer, UI/UX designer, and digital problem-solver.",
  mainImage: projImg10,
  tags: ["React", "Bootstrap", "UI/UX", "Frontend", "In Progress"],
  problem:
    "I needed a platform that truly reflected my skills, my personality, and the kind of work I aspire to do — something more expressive than a résumé and more dynamic than a template-based website. A space where the only boundaries are my creativity and my ability to bring ideas to life. My goal was to create a site that not only showcases projects, but also tells a story about who I am and where I’m headed as a developer and designer.",
  role:
    "Full ownership of the project: I designed the layout and visuals using Canva, wrote all the code for both structure and interactivity, and managed content integration. I also implemented external services such as Mailchimp for contact and created a modular project structure for scalability.",
  tools: [
    "React",
    "Bootstrap",
    "React Router",
    "JavaScript",
    "HTML/CSS",
    "Canva",
    "Mailchimp",
  ],
  duration: "July 2024 — Present",
  type: "Personal / Professional Branding",
  images: [
    projImg7,
    projImg8,
    projImg9,
  ],
  videoDemo: "", // opcional si grabás una demo del sitio
  // approach:
  //   "The website was developed component by component with responsiveness and clarity in mind. Animations were added to enhance interaction — including dynamic typing effects and animated skill meters. Projects are structured as data objects and passed dynamically into detailed pages using React Router. Mailchimp handles the contact form integration.",
  // challenges:
  //   "Keeping the UI clean while adding animation and modularity was key. Managing layout across screen sizes, optimizing the background video, and building from scratch without boilerplates took time and iterations — especially as I improved and wanted to reapply new ideas.",
  // learning:
  //   "The portfolio is not only a tool to present my services, but a learning ground and creative space. It helped me define my own professional identity and serves as a base for future opportunities, freelance work, and self-expression.",
  // status: "In Development — Publicly Live",
  // outcome:
  //   "A living, evolving digital portfolio that I feel proud to share with others. It reflects my current abilities, my potential, and my passion for creating thoughtful, usable technology.",
  // githubRepo: "https://github.com/tuusuario/mi-portafolio",
  // liveDemo: "https://tu-dominio.com",
  // post: "",
  // pdf: "",
  // closingNote:
  //   "This project isn’t just about showing my work — it is part of my work. Building it taught me how to better present ideas, communicate value, and create something that grows with me as I continue my path in tech.",
},
  // {
  //   id: "2",
  //   title: "Andreinartistica",
  //   description:
  //     "Discover the art of a talented Venezuelan artist in a whole new way.",
  //   imgUrl: projImg1,
  //   technologies: [
  //     "ASP.Net Core - ",
  //     "Entity Framework - ",
  //     "C# - ",
  //     "React - ",
  //     "CSS - ",
  //     "Bootstrap - ",
  //     "SQL - ",
  //     "SQL Server",
  //   ],
  //   details:
  //     "Andreina Artística is an upcoming website showcasing the work of a talented Venezuelan plastic artist, designed to elevate her online presence and connect with a global audience. Built with ASP.Net Core, Entity Framework, C#, React, CSS, Bootstrap, SQL, and SQL Server, the project follows an MVC architecture where APIs efficiently handle SQL queries to retrieve and process data. The frontend, powered by JSX, ensures a seamless user experience, while the UI is styled with CSS and Bootstrap for responsiveness. Future plans include migrating to Azure for scalability and performance improvements.",
  //   category: "first",
  // },
  // {
  //   id: "3",
  //   title: "Cacer'os",
  //   description:
  //     "Dare to discover a delicious, naturally homemade proposal for those looking to take care of their health.",
  //   imgUrl: projImg3,
  //   technologies: ["HTML - ", "CSS - ", "JavaScript"],
  //   details: "Aquí puedes escribir más detalles sobre el proyecto.",
  //   category: "first",
  // },
  // {
  //   id: "6",
  //   title: "Sabores Criollos",
  //   description:
  //     "Two brothers prepared homemade lunches at unbeatable prices, designed for working people. Distinctive for their seasoning.",
  //   imgUrl: projImg4,
  //   technologies: ["Canvas - ", "Marketing strategies"],
  //   details: "Aquí puedes escribir más detalles sobre el proyecto.",
  //   category: "second",
  // },
  // {
  //   id: "8",
  //   title: "Medra Club FutFem",
  //   description:
  //     "More than a team—a sisterhood. Fueled by passion, driven by ambition, and unstoppable on the field.",
  //   imgUrl: projImg5,
  //   technologies: ["Google Sheet - ", "AppSheet - ", "Graphs"],
  //   details: "Aquí puedes escribir más detalles sobre el proyecto.",
  //   category: "third",
  // },
];

import projImg1 from "../assets/img/MotorcycleServicePortada.png";
import projImg2 from "../assets/img/MotorcycleServiceLogo.png";
import projImg3 from "../assets/img/AppSalesManagmentPortada.png";
import projImg4 from "../assets/img/AppSalesManagmentCarrousel.png"

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
    "ADO.NET",
    "Three-Layer Architecture",
  ],
  duration: "April 2025 (1 week)",
  type: "Technical Challenge",
  images: [
    projImg3,
    projImg4,
    projImg3,
  ],
  videoDemo: "https://tu-video-link.com",
  approach:
    "I designed a well-structured system with independent forms for customers, products, and sales. SQL Server was used as the relational database, with stored procedures and optimized queries. I also added visual validations to ensure clean data entry.",
  challenges:
    "One of the biggest challenges was maintaining clear business logic across layers, ensuring data consistency and modular code. I also faced issues with deleted entities (customers or products) that were still referenced in sales records. I solved this using LEFT JOIN with ISNULL to display 'Deleted Customer' or 'Deleted Product' instead of breaking the view. However, a better long-term solution would be to add a few additional columns and implement a snapshot approach to preserve historical data integrity regardless of future changes.",
  learning:
    "This project helped me strengthen key concepts such as layered architecture, data normalization, relationship handling, and form validation. I also improved my ability to interpret technical requirements in realistic environments.",
  status: "Completed",
  outcome:
    "I delivered a functional application that met most of the requirements and even included extra features such as category management using JSON. I learned a lot from the experience and from the mistakes I made in interpreting some parts of the instructions.",
  githubRepo: "https://github.com/tuusuario/prueba-tecnica-vbnet",
  liveDemo: "",
  post: "",
  pdf: "",
  closingNote:
    "This technical challenge was a valuable opportunity to test my skills in real-world scenarios. It strengthened my understanding of layered architectures, data consistency, and user-centered logic. I’m proud of the results and aware of the areas I can continue improving.",
},
  // {
  //   id: "",
  //   title: "Movies App",
  //   description: "Updated movie list",
  //   imgUrl: projImg2,
  //   technologies: ["CSS", "React", "Router"],
  //   details: "Aquí puedes escribir más detalles sobre el proyecto.",
  //   category: "first",
  // },
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
  //   id: "4",
  //   title: "Andreinartistica",
  //   description:
  //     "Discover the art of a talented Venezuelan artist in a whole new way.",
  //   imgUrl: projImg1,
  //   technologies: ["Figma - ", "Canva - ", "Meta"],
  //   details:
  //     "Andreina Artística is an upcoming website showcasing the work of a talented Venezuelan plastic artist, designed to elevate her online presence and connect with a global audience. Built with ASP.Net Core, Entity Framework, C#, React, CSS, Bootstrap, SQL, and SQL Server, the project follows an MVC architecture where APIs efficiently handle SQL queries to retrieve and process data. The frontend, powered by JSX, ensures a seamless user experience, while the UI is styled with CSS and Bootstrap for responsiveness. Future plans include migrating to Azure for scalability and performance improvements.",
  //   category: "second",
  // },
  // {
  //   id: "5",
  //   title: "Cacer'os",
  //   description:
  //     "Dare to discover a delicious, naturally homemade proposal for those looking to take care of their health.",
  //   imgUrl: projImg3,
  //   technologies: ["Canva"],
  //   details: "Aquí puedes escribir más detalles sobre el proyecto.",
  //   category: "second",
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
  //   id: "7",
  //   title: "Sabores Criollos",
  //   description:
  //     "Two brothers prepared homemade lunches at unbeatable prices, designed for working people. Distinctive for their seasoning.",
  //   imgUrl: projImg4,
  //   technologies: ["Google Sheet - ", "Graphs"],
  //   details: "Aquí puedes escribir más detalles sobre el proyecto.",
  //   category: "third",
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

  // {
  //   id: "9",
  //   title: "Sitema de gestion mecanica",
  //   description: "Descripción del Proyecto 1",
  //   imgUrl: projImg4,
  //   technologies: ["AppSheet - ", "Google Sheet"],
  //   details: "Aquí puedes escribir más detalles sobre el proyecto.",
  //   category: "third",
  // },
];

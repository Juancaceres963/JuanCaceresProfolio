import projImg1 from "../../assets/img/MotorcycleServicePortada.png";
import projImg2 from "../../assets/img/MotorcycleServiceLogo.png";
import projImg3 from "../../assets/img/AppSalesManagmentPortada.png";
import projImg4 from "../../assets/img/AppSalesManagmentCarrousel.png";
import projImg5 from "../../assets/img/AndreinartisticaPortada.png";
import projImg6 from "../../assets/img/AndreinartisticaCarrousel.png";
import projImg7 from "../../assets/img/PortafolioJuanPortadaLogo.png";
import projImg8 from "../../assets/img/PortafolioJuanCarrousel.png";
import projImg9 from "../../assets/img/PortafolioJuanCarrousel1.png";
import projImg10 from "../../assets/img/PortafolioJuanPortadaMax.png";
import projImg11 from "../../assets/img/SystemSoccerPortada.png";
import projImg12 from "../../assets/img/FutbolProjectCarrousel.png";
import projImg13 from "../../assets/img//FutbolProjectCarrousel1.png";
import projImg14 from "../../assets/img/FutbolProjectCarrousel2.png";
import projImg15 from "../../assets/img/FutbolProjectCarrousel3.png";
// import projImg16 from "../../assets/img/SystemSoccerCarrousel1.png";

export const projects = [
  {
    id: "1",
    category: ["first", "second"],
    title: "Personal Web Portfolio",
    subtitle:
      "A fully custom personal website designed and developed to showcase my work, services, and identity as a full-stack developer, UI/UX designer, and digital problem-solver.",
    tags: ["React", "Bootstrap", "UI/UX", "Frontend", "In Progress"],
    mainImage: projImg10,
    problem:
      "I needed a platform that truly reflected my skills, my personality, and the kind of work I aspire to do — something more expressive than a résumé and more dynamic than a template-based website. A space where the only boundaries are my creativity and my ability to bring ideas to life. My goal was to create a site that not only showcases projects, but also tells a story about who I am and where I’m headed as a developer and designer.",
    role: "Full ownership of the project: I designed the layout and visuals using Canva, wrote all the code for both structure and interactivity, and managed content integration. I also implemented external services such as Mailchimp for contact and created a modular project structure for scalability.",
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
    images: [projImg7, projImg8, projImg9],
    status: "In Development — Publicly Live",
    approach:
      "The website was built component by component, with a focus on responsiveness and visual clarity. Animations—such as a dynamic typing effect—were added to enhance user interaction. Projects are structured as data objects and routed dynamically to their detailed pages using React Router. Mailchimp powers the contact form integration. In the projects section, Bootstrap's Accordions and Carousel were implemented with custom styling touches. Everything was designed to elevate the overall user experience.",
    challenges:
      "Keeping the UI clean while adding animation and modularity was key. Managing layout across screen sizes, optimizing the background video, and building from scratch without boilerplates took time and iterations — especially as I improved and wanted to reapply new ideas.",
    learning:
      "The portfolio is not only a tool to present my services, but a learning ground and creative space. It helped me define my own professional identity and serves as a base for future opportunities, freelance work, and self-expression.",
    outcome:
      "A living, evolving digital portfolio that I feel proud to share with others. It reflects my current abilities, my potential, and my passion for creating thoughtful, usable technology.",
    closingNote:
      "This project isn’t just about showing my work — it is part of my work. Building it taught me how to better present ideas, communicate value, and create something that grows with me as I continue my path in tech.",
    githubRepo: "https://github.com/Juancaceres963/JuanCaceresProfolio",
    //post: "",
    pdf: "",
  },
  {
    id: "2",
    category: ["first", "second"],
    title: "Desktop App for Sales and Customer Management",
    subtitle:
      "Desktop application developed as a technical challenge for a developer position, focused on managing customers, products, and business sales.",
    tags: [
      "Visual Basic .NET",
      "SQL Server",
      "Desktop App",
      "Sales Management",
    ],
    mainImage: projImg3,
    problem:
      "The challenge was to build a functional application capable of managing customers, products, and sales, including reports and automatic calculations, replicating common internal business system scenarios. The system had to support create, read, update, and delete operations, along with sales visualization and analysis.",
    role: "I developed the complete architecture of the application using the 3-layer pattern. I implemented forms with conditional logic, validations, automatic calculations, and SQL queries for dynamic reporting.",
    tools: [
      "Visual Basic .NET",
      "SQL Server",
      "Windows Forms",
      "Three-Layer Architecture",
    ],
    duration: "July 2025 (1 week)",
    type: "Technical Challenge",
    images: [projImg3, projImg4, projImg3],
    status: "Completed",
    approach:
      "I designed a well-structured system with separate forms for customer, product, and sales management. SQL Server acted as the relational database, supporting stored procedures and optimized queries. To ensure clean data entry, I also implemented visual validation and form-level logic.",
    challenges:
      "One of the biggest challenges was maintaining clear business logic across all layers, preserving data consistency and modularity. Post-delivery, I identified some edge cases involving deleted entities (such as customers or products) that were still referenced in sales records. Since the challenge didn’t allow changes to the database schema, I addressed this by using LEFT JOIN and ISNULL to display fallback labels like “Customer Deleted” or “Product Deleted” instead of simply not showing the logs. I also used internally stored JSON objects to implement dynamic product categories without altering the schema. While these workarounds were effective within the constraints, a more robust long-term solution would involve adding a few extra columns and implementing a snapshot strategy to preserve historical data integrity.",
    learning:
      "This project deepened my understanding of layered architecture, data normalization, relationship design, and form validation. I also honed my ability to interpret business requirements and adapt to real-world constraints—skills I consider crucial in professional development environments.",
    outcome:
      "As a result, I delivered a fully functional application that met most of the requirements and included additional features, such as dynamic category management using JSON. In my view, the system offered a solid user experience and clear data handling, demonstrating a meticulous design aligned with the expectations for a system of this kind.",
    closingNote:
      "This technical challenge was a valuable opportunity to apply my skills in a real-world scenario. While it presented some initial challenges due to my lack of experience with certain technologies, I approached it with curiosity and determination, adapted quickly, and delivered a reliable solution in a short time. I’m proud of what I accomplished and excited to continue growing through practical experience.",
    githubRepo: "https://github.com/Juancaceres963/RegistroDeVentasWinForms",
    //post: "",
    pdf: "",
  },
  {
    id: "3",
    category: ["first", "third"],
    title: "Motorcycle Workshop Management System App",
    subtitle:
      "Internal application for efficient management of work records, clients, motorcycles, employees, and automated budget generation",
    tags: ["AppSheet", "Google Sheets", "Automation", "Workshop"],
    mainImage: projImg1,
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
    images: [projImg1, projImg2, projImg1],
    status: "In production, currently used by the workshop",
    approach:
      "In this project, I used Google Sheets as a simulated relational database and AppSheet to build custom forms, record views, and actions tailored to the workflow of a motorcycle service business.",
    challenges:
      "The main challenge was designing a logic structure that could reuse previously entered data—such as existing clients—and automate the generation of PDF estimates based on specific conditions.",
    learning:
      "This experience allowed me to significantly improve my skills with no-code tools by applying declarative logic, conditional flows, and a user-friendly interface design.",
    outcome:
      "As a result, I helped reduce the management time, improve internal organization, and systematize a more efficient and scalable workflow for the business.",
    closingNote:
      "Beyond the technical execution, this project gave me a deeper understanding of system design and database structure at a conceptual level. Even without writing traditional code, I had to carefully consider how the data would relate, flow, and remain consistent—enhancing my architectural thinking and problem-solving abilities in real-world scenarios.",
    //githubRepo: "",
    post: "https://www.linkedin.com/posts/juan-caceres-orellana_hola-muy-buenas-noches-espero-que-cada-activity-7310535963846356992-Hj-h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7-UMABIZwJSrGp6Qi9N2-ZraSbk8iwev0",
    pdf: "",
  },
  {
    id: "4",
    category: ["first", "second"],
    title: "Web Portfolio for a Visual Artist",
    subtitle:
      "Ongoing development of a personalized platform to showcase and sell the artwork of a contemporary visual artist — built from scratch with full control over design, backend, and deployment.",
    tags: ["React", "ASP.NET Core", "SQL Server", "UI/UX"],
    mainImage: projImg5,
    problem:
      "The artist needed a platform that could serve both as a visual portfolio and as a tool for selling artwork online. Previously, her presence was scattered across social networks or physical exhibitions, lacking a centralized space that reflected the depth and reach of her work.",
    role: "I'm in charge of the full development process — from research and UI design to backend architecture, database modeling, and deployment planning. The project is being built with a clear vision for long-term scalability and artistic storytelling.",
    tools: [
      "Figma (UI Design)",
      "React",
      "ASP.NET Core (C#)",
      "SQL Server",
      "Azure Deployment (planned)",
    ],
    duration: "January 2024 — Currently in Progress",
    type: "Personal / Freelance",
    images: [projImg5, projImg6, projImg5],
    status: "In Development",
    approach:
      "The development follows an MVP structure, prioritizing core features such as the art gallery, artist bio, and exhibition history. The initial design was created in Figma and is now being revised to incorporate features like user login, online payments, and a responsive layout for all devices. Hosting and custom domain deployment are planned through Azure.",
    challenges:
      "Balancing aesthetics and technical functionality has been central. Also, I'm revisiting parts of the design to integrate new ideas such as secure payments, client interaction, and mobile-first optimization — all while keeping scalability and usability in mind.",
    learning:
      "This project is giving me a deeper understanding of system design from a business and emotional perspective — it's not just about the code, but about building something meaningful, personal, and sustainable over time. It's also helping me refine deployment workflows and sharpen my full-stack capabilities.",
    outcome:
      "Still in progress, but already a valuable sandbox for practicing complete product development — from branding and UX to backend logic and cloud hosting.",
    closingNote:
      "Even though this project is still evolving, it's one of the most meaningful and technically ambitious projects I've worked on. It represents not only my commitment to creating value through technology, but also a tribute to my mother's art and story — built with love, care, and long-term vision.",
    //githubRepo: "",
    //post: "",
    pdf: "",
  },
  {
    id: "5",
    category: ["third"],
    title: "Management & Tracking App for Women’s Soccer Team",
    subtitle:
      "Digital platform built with AppSheet and Google Sheets to improve financial administration, track player stats, and support team development from within.",
    tags: ["Google Sheets", "AppSheet", "No-code", "Data Analytics"],
    mainImage: projImg11,
    problem:
      "When I first joined the team, there was no official coach. As I became more involved, I noticed there was no solid system in place to manage finances or organize internal data. Team members weren’t making regular financial contributions, which made it difficult for the team to grow. Additionally, as a coach, I saw the need to track player performance, so I proposed keeping a historical record of matches and individual statistics to better evaluate progress.",
    role: "Initially joined as a coach, I later identified organizational gaps and took the initiative to develop a digital system that allowed the team to manage finances, evaluate performance, and visualize their evolution. I designed and implemented all tools myself using Google Sheets and AppSheet.",
    tools: ["Google Sheets", "AppSheet", "Google Drive"],
    duration: "October 2024 — July 2025",
    type: "Community Initiative",
    images: [projImg14, projImg12, projImg13, projImg15],
    status: "In use",
    approach:
      "I developed a spreadsheet to serve as the backend for financial management, enabling the team to track all income and expenses—detailing how much, when, from whom, and why. The system also stored comprehensive match records and player statistics, facilitating easy data manipulation and visualization in the future. Everything was organized into well-structured, interlinked tables, with access granted only after I, as the administrator, approved viewing permissions. Additionally, I built an AppSheet app to simplify access and visualization of key data. The app included a home page with team information, individual player profiles, a match calendar, and personal stats (goals, assists) displayed through interactive charts—all designed to motivate, analyze, and monitor each player's progress.",
    challenges:
      "It was a challenge of translation and integration: transforming real-world needs into structured, yet intuitive and practical systems. I had to balance my role as a coach with that of a tool creator and administrator, managing data input and seamlessly integrating the solution into the team’s routine without causing any disruption.",
    learning:
      "In this project, I learned how to use AppSheet, which I hadn't even known existed before, and I also improved my skills with Google Sheets. Although I tried AppScript, another new tool, I ultimately focused on AppSheet for better control. Technically, it was a valuable experience. As for leadership, I had to push myself to give clearer instructions to the team, which helped me practice and improve my communication and teaching skills, even though it was difficult at times.",
    outcome:
      "The team now has full visibility over its internal finances, which allows for better planning and investment in things like equipment and field time. Player performance can be tracked over time, supporting more informed coaching. Beyond functionality, the tools fostered a stronger sense of ownership and professionalism among the players, or at least that was always my intention.",
    closingNote:
      "What started as a sports project evolved into something more: an opportunity to empower others through accessible tools. This experience reflects my approach to problems: combining my passion for sports, education, and technology to create meaningful and practical solutions.",
    //githubRepo: "",
    //post: "",
    pdf: "",
  },
  {
    id: "6",
    category: ["third"],
    title: "Financial & Operational Tracker for Food Business",
    subtitle:
      "Spreadsheet-based system built to manage income, expenses, and daily sales data in a small-scale food business.",
    tags: ["Google Sheets", "Formulas", "Operations", "Finance Tracking"],
    mainImage: projImg13,
    problem:
      "The business lacked a clear system to manage financial flows, track costs, and monitor daily operations. As a result, it was hard to understand how much was being invested, how much was earned, and which products were the most profitable.",
    role: "In addition to participating in food preparation, shopping, and customer service, I took the initiative to design and implement a custom spreadsheet system that helped organize the business's finances and daily operations. I also actively offered the service to potential clients, as I was involved in both the commercial and administrative aspects.",
    tools: ["Google Sheets"],
    duration: "January 2024",
    type: "Small Business Collaboration",
    images: [projImg13, projImg13],
    status: "Discontinued",
    approach:
      "Using Google Sheets, I created a structured set of tables to track every money movement — income, expenses, cost per dish, and overall profitability. I also developed a daily log to record what dishes were prepared and how many units were sold each day. Through formulas and logical structuring, the system delivered insights automatically and allowed for informed decision-making regarding menu planning, pricing, and investments.",
    challenges:
      "This was one of my first experiences creating a digital solution for real-world business problems. The challenge was to translate chaotic, informal processes into a clear and practical system — one that others could understand and use easily, even without technical experience.",
    learning:
      "This project helped me realize how much I enjoy organizing information and building tools to make everyday work more efficient. It also showed me the value of technology in small, hands-on businesses. Despite not continuing in the project, this experience became an important part of my early formation in tech and problem-solving.",
    outcome:
      "While the business eventually stopped using the system after I left the team, the tool worked effectively during its implementation and offered a clear framework for managing both financial and operational data. It served as a foundational exercise in using spreadsheets as dynamic business tools.",
    closingNote:
      "This early project was a turning point for me. It revealed how simple tools — when well thought out — can create order and clarity in complex, everyday environments. It also affirmed my drive to solve problems through a mix of technology, logic, and empathy.",
    //githubRepo: "",
    //post: "",
    pdf: "",
  },
];

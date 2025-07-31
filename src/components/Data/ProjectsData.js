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
import projImg16 from "../../assets/img/SCLogo.png";
import projImg17 from "../../assets/img/SCCarrousel.png";

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
    caseStudy: "The website was developed component by component, with a strong focus on responsiveness, visual clarity, and user experience. Interactive elements such as dynamic typing effects, paragraph-revealing shadows, and hover animations on cards and images were implemented to enhance engagement. Projects are structured as data objects and routed dynamically to detailed pages using React Router, while the contact form is integrated via Mailchimp.<br/>The projects section features custom-styled Bootstrap components, including accordions and a carousel, all designed to maintain a clean and intuitive interface. Special attention was given to cross-device design consistency, background video optimization, and avoiding generic templates—resulting in a modular and handcrafted experience that evolved through continuous iteration.<br/>Beyond showcasing my services, this portfolio represents a personal and professional milestone. It has been a space for creativity, learning, and refining my identity as a developer. It reflects not only my current skills but also my potential and passion for building purposeful digital solutions.<br/>This project is not just a display of my work—it's part of the work itself. It taught me how to present ideas more effectively, communicate value, and build something that evolves with me as I grow in the tech world.",
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
    caseStudy: "The system was structured with dedicated modules for managing customers, products, and sales. SQL Server served as the relational database, utilizing stored procedures and optimized queries. To ensure data integrity and a smooth user experience, I implemented both visual validation mechanisms and form-level logic.<br/>A key challenge involved maintaining consistent business logic across all layers while ensuring modularity and data consistency. After delivery, I encountered edge cases where deleted entities (e.g., customers or products) were still referenced in sales records. Since schema changes were not allowed, I addressed this by applying LEFT JOIN with ISNULL to display fallback labels like “Customer Deleted” or “Product Deleted” rather than omitting the record entirely. Additionally, I used internally stored JSON objects to handle dynamic product categories within the given constraints. While effective, I recognize that a more scalable long-term solution would involve extending the schema and implementing a snapshot strategy for historical data integrity.<br/>This project strengthened my understanding of layered architecture, data normalization, relational design, and robust form validation. It also helped me sharpen my ability to interpret business requirements and adapt to technical constraints—skills that are essential in real-world development environments.<br/>Ultimately, I delivered a complete and reliable application that met the outlined requirements and went beyond them by incorporating features such as dynamic category handling. The solution demonstrated a clear, user-focused design and solid data management practices.<br/>This technical challenge was a meaningful learning experience. Despite initial unfamiliarity with some technologies, I approached the project with curiosity and adaptability, delivering a functional and maintainable solution under time constraints. I'm proud of the outcome and eager to continue developing through hands-on experience.",
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
    caseStudy: "In this project, I leveraged Google Sheets as a simulated relational database and used AppSheet to develop custom forms, views, and actions tailored to the workflow of a motorcycle service business.<br/>The main challenge was designing a logic structure that reused existing data—such as previously registered clients—and automated PDF estimate generation based on conditional logic.<br/>This experience deepened my understanding of system design and data relationships, even in a no-code environment. I applied declarative logic, conditional flows, and interface design principles to ensure usability and consistency.<br/>As a result, the solution improved internal organization, reduced management time, and established a more efficient and scalable workflow. It also enhanced my architectural thinking and problem-solving skills in real-world, constraint-driven scenarios.",
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
    //githubRepo: "",
    post: "https://www.linkedin.com/posts/juan-caceres-orellana_hola-muy-buenas-noches-espero-que-cada-activity-7310535963846356992-Hj-h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7-UMABIZwJSrGp6Qi9N2-ZraSbk8iwev0",
    pdf: "",
  },
  // {
  //   id: "4",
  //   category: ["first", "second"],
  //   title: "Web Portfolio for a Visual Artist",
  //   subtitle:
  //     "Ongoing development of a personalized platform to showcase and sell the artwork of a contemporary visual artist — built from scratch with full control over design, backend, and deployment.",
  //   tags: ["React", "ASP.NET Core", "SQL Server", "UI/UX"],
  //   mainImage: projImg5,
  //   problem:
  //     "The artist needed a platform that could serve both as a visual portfolio and as a tool for selling artwork online. Previously, her presence was scattered across social networks or physical exhibitions, lacking a centralized space that reflected the depth and reach of her work.",
  //   role: "I'm in charge of the full development process — from research and UI design to backend architecture, database modeling, and deployment planning. The project is being built with a clear vision for long-term scalability and artistic storytelling.",
  //   tools: [
  //     "Figma (UI Design)",
  //     "React",
  //     "ASP.NET Core (C#)",
  //     "SQL Server",
  //     "Azure Deployment (planned)",
  //   ],
  //   duration: "January 2024 — Currently in Progress",
  //   type: "Personal / Freelance",
  //   images: [projImg5, projImg6, projImg5],
  //   status: "In Development",
  //   approach:
  //     "The development follows an MVP structure, prioritizing core features such as the art gallery, artist bio, and exhibition history. The initial design was created in Figma and is now being revised to incorporate features like user login, online payments, and a responsive layout for all devices. Hosting and custom domain deployment are planned through Azure.",
  //   challenges:
  //     "Balancing aesthetics and technical functionality has been central. Also, I'm revisiting parts of the design to integrate new ideas such as secure payments, client interaction, and mobile-first optimization — all while keeping scalability and usability in mind.",
  //   learning:
  //     "This project is giving me a deeper understanding of system design from a business and emotional perspective — it's not just about the code, but about building something meaningful, personal, and sustainable over time. It's also helping me refine deployment workflows and sharpen my full-stack capabilities.",
  //   outcome:
  //     "Still in progress, but already a valuable sandbox for practicing complete product development — from branding and UX to backend logic and cloud hosting.",
  //   closingNote:
  //     "Even though this project is still evolving, it's one of the most meaningful and technically ambitious projects I've worked on. It represents not only my commitment to creating value through technology, but also a tribute to my mother's art and story — built with love, care, and long-term vision.",
  //   //githubRepo: "",
  //   //post: "",
  //   pdf: "",
  // },
  {
    id: "5",
    category: ["third"],
    title: "Management & Tracking App for Women’s Soccer Team",
    subtitle:
      "Digital platform built with AppSheet and Google Sheets to improve financial administration, track player stats, and support team development from within.",
    tags: ["Google Sheets", "AppSheet", "No-code", "Data Analytics"],
    mainImage: projImg11,
    problem: "When I started to form part of the technical staff as a coach. As I became more involved, I noticed there was no solid system in place to manage finances or organize internal data. Team members weren’t making regular financial contributions, which made it difficult for the team to grow. Additionally, as a coach, I saw the need to track player performance, so I proposed keeping a historical record of matches and individual statistics to better evaluate progress.",
    role: "Initially joined as a coach, I later identified organizational gaps and took the initiative to develop a digital system that allowed the team to manage finances, evaluate performance, and visualize their evolution. I designed and implemented all tools myself using Google Sheets and AppSheet.",
    caseStudy: "To address financial management, I created a structured spreadsheet to record all income and expenses—detailing amounts, dates, contributors, and purposes. For performance tracking, I developed a database of match records and individual player statistics. All data was organized into interlinked tables, with access controlled through admin permissions.<br/>I also built an AppSheet application to make the information more accessible and visual. The app featured a homepage with team details, player profiles, a match calendar, and personal statistics (goals, assists), displayed through interactive charts. The goal was to support motivation, accountability, and performance analysis.<br/>This project involved translating the team’s day-to-day needs into an integrated and user-friendly system. I balanced my responsibilities as a coach with the creation and administration of these tools, ensuring a smooth integration into the team’s routine.<br/>Throughout the process, I learned to use AppSheet—previously unknown to me—and strengthened my skills in Google Sheets. I explored AppScript briefly but focused on AppSheet for better usability. From a leadership perspective, the experience helped me improve my communication and instruction skills, especially when introducing the tools to the team.<br/>As a result, the team gained full visibility over its finances, enabling more informed planning and investment. Performance data is now trackable over time, supporting coaching decisions and individual development. More broadly, the tools fostered a stronger sense of organization and ownership among the players.<br/>This experience reflects my approach to problem-solving: combining sports, education, and technology to create solutions that are both practical and empowering.",
    tools: ["Google Sheets", "AppSheet", "Google Drive"],
    duration: "October 2024 — July 2025",
    type: "Community Initiative",
    images: [projImg14, projImg12, projImg13, projImg15],
    status: "In use",
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
    mainImage: projImg16,
    problem:
      "The business lacked a structured system to manage finances, track costs, and monitor daily operations. This made it difficult to measure investment returns, understand profitability, and identify the most successful products.",
    role: "Alongside responsibilities in food preparation, shopping, and customer service, I took the initiative to design and implement a custom spreadsheet system that brought structure to the business’s financial and operational management. I also contributed to the commercial and administrative areas by promoting the service to potential clients.",
    caseStudy: "Using Google Sheets, I built an integrated system of tables to track income, expenses, cost per dish, and overall profitability. I also developed a daily log to monitor dish production and sales volume. Through structured formulas and clear logic, the system generated actionable insights to support pricing decisions, menu planning, and financial strategy.<br/>This project translated informal workflows into a practical and accessible digital tool. It demonstrated the impact of thoughtful design and organization in improving day-to-day efficiency and decision-making.<br/>The tool proved effective during its implementation, providing a reliable framework for managing both financial data and operational activity. It also marked a foundational step in my path toward tech-driven problem-solving.<br/>This early experience showed me the power of simple, well-designed tools to bring clarity to complex environments. It reinforced my passion for organizing information and creating solutions that blend technology, logic, and real-world needs.",
    tools: ["Google Sheets"],
    duration: "January 2024",
    type: "Business Collaboration",
    images: [projImg17, projImg16],
    status: "Discontinued",
    //githubRepo: "",
    //post: "",
    pdf: "",
  },
];

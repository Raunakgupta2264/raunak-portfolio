export const personalInfo = {
  name: "Raunak Gupta",
  role: "Software Engineer & AI/ML Developer",
  university: "KL Deemed to be University",
  degree: "B.Tech in Computer Science & Engineering",
  graduation: "2029",
  cgpa: "9.49",
  location: "India",
  status: "Available for Software Engineering & AI/ML Roles",
  github: "https://github.com/raunakgupta2264",
  linkedin: "https://www.linkedin.com/in/raunakgupta-devmode",
  email: "raunakgupta2264@gmail.com",
  about: "I am a Computer Science Engineering undergraduate at KL Deemed to be University with a strong academic foundation (9.49 CGPA) and a deep passion for building high-performance software. My work bridges the gap between theoretical computer science—such as crash-consistent file systems, operating systems, and advanced data structures—and applied modern technologies, including full-stack web applications and machine learning architectures.",
};

export const technicalInterests = [
  "Software Engineering",
  "Full-Stack Development",
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI",
  "Data Structures and Algorithms",
];

export const whatIBuild = [
  {
    id: "full-stack",
    title: "Full-Stack Development",
    icon: "code",
    description: "Designing end-to-end web architectures featuring responsive, fluid user interfaces and performant API layers that deliver seamless digital experiences.",
    highlights: ["React & Modern Ecosystem", "Component-Driven Architecture", "API Integration & State Management"],
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & ML",
    icon: "brain",
    description: "Engineering intelligent predictive models and generative systems—from network attack forecasting and risk assessment to conversational AI.",
    highlights: ["Predictive Modeling & Forecasting", "Deep Learning Foundations", "Generative AI & Agentic Workflows"],
  },
  {
    id: "systems",
    title: "Systems & Core Engineering",
    icon: "server",
    description: "Exploring low-level computing principles, crash-consistent filesystem designs, operating system internals, and mathematically rigorous algorithm design.",
    highlights: ["Crash-Consistent Filesystem Design", "Operating System Internals", "Advanced DSA & Complexity Optimization"],
  },
];

export const projects = [
  {
    id: "neuroshield",
    title: "NeuroShield – Network Attack Forecasting",
    category: "AI & Machine Learning",
    badge: "AI / Cybersecurity",
    description: "An intelligent security pipeline engineered to detect, classify, and forecast malicious network intrusions and anomalies in real-time, safeguarding infrastructure before perimeter compromise.",
    longDescription: "NeuroShield analyzes multidimensional network traffic patterns using machine learning algorithms to identify anomalous signatures indicative of cyber threats. By learning from traffic anomalies, the model provides early attack forecasting to preempt distributed attacks, unauthorized probes, and data breaches.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "Anomaly Detection"],
    github: "https://github.com/raunakgupta2264",
    demo: null,
    highlights: [
      "Trained on comprehensive network traffic and anomaly datasets",
      "Real-time feature extraction for proactive threat classification",
      "High precision in distinguishing legitimate traffic spikes from malicious incursions"
    ]
  },
  {
    id: "journafs",
    title: "JournaFS – Crash-Consistent Filesystem",
    category: "Systems & Core",
    badge: "Systems Engineering",
    description: "A custom crash-consistent journaling filesystem implementing atomic write transactions and write-ahead metadata logging to guarantee fault-tolerant persistence.",
    longDescription: "JournaFS was developed to explore core storage engine reliability and file system crash semantics. It implements atomic metadata logging and crash recovery protocols, ensuring that unexpected power loss or system crashes never result in dangling pointers, broken inodes, or corrupted filesystem state.",
    technologies: ["C / C++", "Operating Systems", "Linux", "File System Internals", "Data Structures"],
    github: "https://github.com/raunakgupta2264",
    demo: null,
    highlights: [
      "Write-ahead metadata journaling for strict crash-consistency",
      "Automated log replay and sanity recovery routines upon mount",
      "Custom block allocation bitmap and inode hierarchy design"
    ]
  },
  {
    id: "creditfair",
    title: "CreditFair – Loan Risk Prediction",
    category: "AI & Machine Learning",
    badge: "Financial Analytics",
    description: "A predictive machine learning model designed to accurately evaluate creditworthiness and mitigate default probabilities through fair, transparent financial risk analysis.",
    longDescription: "CreditFair applies rigorous data cleaning, feature engineering, and classification algorithms to evaluate loan applicants. The solution optimizes approval pipelines while minimizing bias and maximizing predictive reliability for financial institutions.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Financial Modeling", "Data Analysis"],
    github: "https://github.com/raunakgupta2264",
    demo: null,
    highlights: [
      "Rigorous feature selection to prevent demographic bias in risk assessment",
      "Robust cross-validation pipeline delivering dependable default probability metrics",
      "Comprehensive evaluation of precision, recall, and ROC-AUC curves"
    ]
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    category: "Generative AI",
    badge: "Conversational AI",
    description: "An interactive conversational agent delivering context-aware responses, natural dialogue comprehension, and structured query resolution.",
    longDescription: "Built to harness generative language models, this AI Chatbot manages contextual conversational memory, handles multi-turn dialogues, and provides clear, grounded responses across diverse technical and user assistance topics.",
    technologies: ["Generative AI", "Python", "React.js", "Natural Language Processing", "APIs"],
    github: "https://github.com/raunakgupta2264",
    demo: null,
    highlights: [
      "Context-aware conversation history tracking across multi-turn exchanges",
      "Clean, modern chat user interface with fluid typing animations",
      "Extensible architecture for plugging into domain-specific knowledge bases"
    ]
  },
  {
    id: "news-aggregation-platform",
    title: "News Aggregation Platform",
    category: "Full-Stack Web",
    badge: "Full-Stack Platform",
    description: "A dynamic full-stack information discovery platform that ingests, curates, and categorizes real-time global news feeds with high-speed search and filtering.",
    longDescription: "A full-featured web platform built for high-throughput news syndication. It aggregates feeds from varied journalistic sources, groups articles by categories (Technology, Science, Business), and presents them in a responsive, accessible interface with instant keyword search.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "Modern Web Architecture"],
    github: "https://github.com/raunakgupta2264",
    demo: null,
    highlights: [
      "Real-time news ingestion across diverse international topics",
      "Instant client-side query filtering and topic categorization",
      "Responsive card layouts optimized for mobile, tablet, and desktop viewports"
    ]
  }
];

export const certifications = [
  {
    id: "ml-spec",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford Online",
    category: "AI & Machine Learning",
    badge: "Stanford / DeepLearning.AI",
    skills: ["Supervised Learning", "Neural Networks", "Decision Trees", "Unsupervised Learning", "Recommender Systems"],
    description: "Comprehensive foundational mastery of modern machine learning algorithms, deep learning principles, and practical application design mentored by Andrew Ng."
  },
  {
    id: "linear-algebra-ml",
    title: "Linear Algebra for Machine Learning and Data Science",
    issuer: "DeepLearning.AI",
    category: "Mathematics for AI",
    badge: "DeepLearning.AI",
    skills: ["Vectors & Matrices", "Eigenvalues & Eigenvectors", "Singular Value Decomposition (SVD)", "PCA", "Linear Transformations"],
    description: "Rigorous mathematical foundation underpinning modern AI, focusing on matrix factorization, vector spaces, and dimensionality reduction for machine learning."
  },
  {
    id: "advanced-algorithms-dsa",
    title: "Advanced Algorithms and DSA Coursework",
    issuer: "Stanford Online & UC San Diego",
    category: "Computer Science Foundations",
    badge: "Stanford & UCSD",
    skills: ["Graph Algorithms", "Dynamic Programming", "Divide & Conquer", "Greedy Approaches", "Asymptotic Analysis"],
    description: "In-depth computational problem solving covering graph theory, dynamic programming, flow networks, and NP-completeness."
  },
  {
    id: "operating-systems-bits",
    title: "Operating Systems",
    issuer: "BITS Pilani",
    category: "Systems Engineering",
    badge: "BITS Pilani",
    skills: ["Process Scheduling", "Virtual Memory Management", "Concurrency & Semaphores", "File Systems", "Inter-Process Communication"],
    description: "Comprehensive study of operating system architecture, concurrency synchronization, virtual memory paging, and kernel-level abstractions."
  },
  {
    id: "os-google",
    title: "Operating Systems and You",
    issuer: "Google",
    category: "Systems & Infrastructure",
    badge: "Google",
    skills: ["System Administration", "Process & File Systems", "Kernel Services", "Shell Scripting", "Troubleshooting"],
    description: "Practical operating systems engineering covering process management, file system architectures, system administration, and CLI workflows."
  },
  {
    id: "agentic-ai-bootcamp",
    title: "Agentic AI Boot Camp",
    issuer: "KLGLUG",
    category: "Generative AI & Autonomous Agents",
    badge: "KLGLUG",
    skills: ["Autonomous Agents", "Prompt Engineering", "Tool Use & Function Calling", "Multi-Agent Architectures", "LLM Workflows"],
    description: "Hands-on immersion into designing autonomous agentic workflows, function calling, tool use, and multi-agent coordination systems."
  }
];

export const techStackCategories = [
  {
    name: "Languages",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "C / C++", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "SQL", level: "Proficient" },
      { name: "HTML5 / CSS3", level: "Advanced" },
    ]
  },
  {
    name: "Frontend & Web",
    skills: [
      { name: "React.js", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Vite", level: "Proficient" },
      { name: "Framer Motion", level: "Proficient" },
      { name: "REST APIs", level: "Proficient" },
    ]
  },
  {
    name: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", level: "Proficient" },
      { name: "Generative AI", level: "Proficient" },
      { name: "Linear Algebra for ML", level: "Advanced" },
      { name: "Scikit-Learn", level: "Proficient" },
      { name: "Anomaly Detection", level: "Proficient" },
    ]
  },
  {
    name: "Systems & Core",
    skills: [
      { name: "Operating Systems", level: "Proficient" },
      { name: "File Systems Architecture", level: "Proficient" },
      { name: "Data Structures & Algorithms", level: "Advanced" },
      { name: "Linux / Unix", level: "Proficient" },
    ]
  },
  {
    name: "Tools & Environments",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "VS Code", level: "Advanced" },
      { name: "Terminal / Bash", level: "Proficient" },
    ]
  }
];

export const educationTimeline = [
  {
    year: "2025 – 2029",
    title: "B.Tech in Computer Science & Engineering",
    institution: "KL Deemed to be University",
    score: "9.49 CGPA",
    details: "Focusing on Software Engineering, Core Systems, Data Structures & Algorithms, and Artificial Intelligence with continuous academic excellence.",
    current: true,
  },
  {
    year: "Ongoing",
    title: "Deep Academic Coursework & Certifications",
    institution: "Stanford Online, DeepLearning.AI, BITS Pilani & Google",
    score: "6 Verified Specializations",
    details: "Rigorous coursework across Machine Learning, Operating Systems, Advanced DSA, Linear Algebra, and Agentic AI architectures.",
    current: false,
  }
];

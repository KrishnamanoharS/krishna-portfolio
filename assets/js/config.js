/**
 * Krishna Manohar Sangani - Portfolio Configuration
 * Easily update your links, resume path, contact details, and project links here.
 */

const PORTFOLIO_CONFIG = {
  personal: {
    fullName: "Krishna Manohar Sangani",
    formalFullName: "Krishna Manohar Mahalakshmi Varma Sangani",
    headline: "AI/ML Student | Python & Web Development Enthusiast",
    shortBio: "I am an Artificial Intelligence and Machine Learning student interested in software development, web technologies, Python, data analytics and AI/ML. I enjoy building practical projects and continuously improving my programming and problem-solving skills.",
    aboutDetailed: "I am an Artificial Intelligence and Machine Learning student with an interest in software development, web technologies, Python, and data analytics. I enjoy building practical projects and improving my programming and problem-solving skills. I am looking for opportunities where I can apply my technical knowledge, learn new technologies, and contribute to real-world software projects.",
    avatarImage: "assets/images/profile_avatar.jpg",
    email: "sanganikrishnamanohar@gmail.com",
    emailPlaceholder: "sanganikrishnamanohar@gmail.com",
    phone: "7981613899",
    phonePlaceholder: "7981613899",
    location: "India"
  },

  social: {
    linkedin: "https://www.linkedin.com/in/skrishnamanohar",
    github: "https://github.com/KrishnamanoharS"
  },

  education: [
    {
      degree: "Bachelor's Degree – Computer Science / CSM",
      institution: "Ideal Institute of Technology",
      score: "CGPA: 8.1"
    },
    {
      degree: "Diploma – Electronics and Communication Engineering (ECE)",
      branch: "Electronics and Communication Engineering (ECE)",
      institution: "Aditya Polytechnic College, Surampalem",
      score: "Percentage: 87.3%"
    },
    {
      degree: "10th Class Secondary School Education",
      institution: "",
      score: "Percentage: 83%"
    }
  ],

  resume: {
    filePath: "assets/resume.pdf", // Place your actual resume PDF here
    htmlDocPath: "assets/docs/Krishna_Manohar_Sangani_Resume.html" // Web-based resume alternative
  },

  projects: [
    {
      id: "house-price-prediction",
      title: "House Price Prediction",
      description: "Developed a house price prediction project using Python. Used Pandas and NumPy for data processing and analysis, and Matplotlib for data visualization. Created a simple HTML/CSS interface and applied data analysis concepts to a practical prediction problem.",
      image: "assets/images/house_price_prediction.jpg",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "HTML", "CSS"],
      category: "AI/ML & Analytics",
      githubUrl: "", // Add your GitHub repository link here (e.g., "https://github.com/KrishnamanoharS/house-price-prediction")
      demoUrl: ""    // Add your live demo link here if hosted
    }
  ],

  certificates: [
    {
      id: "cert-python",
      title: "Python Certification",
      badge: "Core Programming",
      issuer: "Technical Coursework & Certification",
      status: "Verified Coursework",
      description: "Comprehensive coursework covering Python syntax, procedural logic, object-oriented programming (OOP), data structures (lists, tuples, dicts, sets), algorithmic problem solving, file manipulation, and exception handling.",
      skills: ["Python", "OOP", "Data Structures", "Algorithms", "File I/O", "Exception Handling"],
      fileUrl: ""
    },
    {
      id: "cert-fullstack",
      title: "Full Stack / Frontend Certification",
      badge: "Web Development",
      issuer: "Technical Coursework & Certification",
      status: "Verified Coursework",
      description: "Hands-on foundation in modern web engineering: structuring responsive layouts with semantic HTML5, styling responsive grid and flexbox interfaces with CSS3, and creating dynamic interactivity using vanilla JavaScript (ES6+).",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "DOM Manipulation", "UI Engineering"],
      fileUrl: ""
    },
    {
      id: "cert-networking",
      title: "Computer Networking Certification",
      badge: "Infrastructure & Protocols",
      issuer: "Technical Coursework & Certification",
      status: "Verified Credential",
      description: "Core networking concepts encompassing the OSI 7-layer and TCP/IP protocol suites, IPv4/IPv6 packet structure, subnetting, client-server architectures, DNS, HTTP/HTTPS communication, and fundamental network security.",
      skills: ["TCP/IP", "OSI Model", "Subnetting", "Routing & Switching", "DNS & HTTP/S", "Network Protocols"],
      fileUrl: ""
    },
    {
      id: "cert-ethicalhacking",
      title: "Ethical Hacking Certification",
      badge: "Cybersecurity & Defense",
      issuer: "Technical Coursework & Certification",
      status: "Verified Credential",
      description: "Cybersecurity fundamentals covering information gathering, system and port scanning, common application vulnerabilities, defense-in-depth principles, security hygiene, and basic cryptographic techniques.",
      skills: ["Cybersecurity Fundamentals", "Vulnerability Scanning", "Network Defense", "Security Best Practices", "Threat Assessment"],
      fileUrl: ""
    }
  ]
};

// Freeze config to prevent unintended mutations
Object.freeze(PORTFOLIO_CONFIG);

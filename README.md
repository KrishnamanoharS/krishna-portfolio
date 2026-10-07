# Krishna Manohar Sangani - Developer Portfolio

A modern, responsive, and recruiter-friendly personal portfolio website for **Krishna Manohar Sangani**, Artificial Intelligence and Machine Learning (AI/ML) student.

---

## 🌟 Features Included

- **Sticky Glassmorphic Navigation Bar**: Smooth scrolling, mobile hamburger menu, live active link detection, dark/light mode toggle, and direct social icons.
- **Dark / Light Theme Toggle**: Seamless transition with local storage persistence and system preference detection.
- **Hero Section**:
  - Highlighting **Krishna Manohar Sangani** and headline: *AI/ML Student | Python & Web Development Enthusiast*.
  - Action buttons: *View My Projects*, *Download Resume*, *Download Portfolio (PDF)*, and *Contact Me*.
  - Verified social links to **LinkedIn** and **GitHub**.
  - Avatar card with clear placeholder labeling.
- **About Me Section**: Full introduction with key specialty highlights (AI/ML Student, Python Enthusiast, Web Development, Data Analytics, Problem Solving).
- **Education Timeline**: Clean vertical timeline featuring Bachelor's Degree at Ideal Institute of Technology (CGPA: 8.1), Diploma in Electronics and Communication Engineering (ECE) at Aditya Polytechnic College, Surampalem (87.3%), and 10th Class (83%).
- **Technical Skills**: Categorized skill cards with icons and tags (Programming, Web Technologies, Data & Visualization, Database, Tools, and Areas of Interest) — no fake percentage bars.
- **Soft Skills**: Professional trait cards (Problem Solving, Logical Thinking, Communication, Teamwork, Quick Learning, Time Management, Adaptability, Attention to Detail).
- **Featured Projects**: Showcase for the *House Price Prediction* project and upcoming web interfaces with configurable repository/demo placeholders.
- **Certifications**: Cards with detailed credential modal viewers for Python, Full Stack / Frontend, Computer Networking, and Ethical Hacking.
- **Dedicated Social Profiles**: Cards for LinkedIn (`https://www.linkedin.com/in/skrishnamanohar`) and GitHub (`https://github.com/KrishnamanoharS`).
- **Recruiter Contact Section**: Interactive form with frontend validation, direct email (`sanganikrishnamanohar@gmail.com`), and mobile number (`+91 7981613899`).
- **Download Portfolio Feature**: Print-to-PDF layout that strips out navigation, buttons, and animations for a recruiter-ready executive summary.
- **Download Resume Feature**: Configurable link pointing to `assets/resume.pdf` with graceful fallback to the web resume document.

---

## 📁 File Structure

```
portfolio/
├── index.html                           # Main portfolio single-page application
├── server.js                            # Zero-dependency local Node server
├── README.md                            # Documentation and quickstart guide
└── assets/
    ├── css/
    │   └── style.css                    # Responsive CSS design system (Dark/Light themes)
    ├── js/
    │   ├── config.js                    # Centralized settings & links configuration
    │   └── main.js                      # Interactivity, themes, modals, & PDF print handler
    ├── docs/
    │   └── Krishna_Manohar_Sangani_Resume.html  # Dedicated printable web resume
    └── images/
        ├── profile_avatar.jpg           # Profile avatar placeholder
        ├── house_price_prediction.jpg   # Project dashboard preview
        ├── web_dev_preview.jpg          # Web development preview
        ├── certificate_sample.jpg       # Certificate placeholder
        └── hackathon_event.jpg          # Hackathon event photo placeholder
```

---

## 🛠️ How to Customize

All primary URLs, contact placeholders, project links, and resume paths are centralized in **[`assets/js/config.js`](assets/js/config.js)**:

1. **Add Your Resume PDF**:
   - Place your resume PDF in `assets/resume.pdf`.
   - The *Download Resume* button will immediately start downloading it.
2. **Add Your Real Email**:
   - In `assets/js/config.js`, update `emailPlaceholder: "your-email@example.com"`.
3. **Add Project Repository & Live Demo Links**:
   - In `assets/js/config.js`, update `githubUrl` and `demoUrl` in the `projects` array.
4. **Replace Placeholders with Your Photos**:
   - Replace the files in `assets/images/` with your actual photos keeping the same filenames, or update the image paths in `config.js` and `index.html`.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or run the included Node.js server:

```bash
node server.js
```
Then visit: `http://localhost:3000/`

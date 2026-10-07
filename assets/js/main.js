/**
 * Krishna Manohar Sangani - Portfolio JavaScript
 * Modern, responsive interactions, theme toggle, PDF generator, and modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initScrollAnimations();
  initModals();
  initContactForm();
  initResumeDownload();
  initPortfolioDownload();
});

/* ==========================================================================
   1. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('km_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Default to dark theme for modern tech feel, or user's saved preference
  const initialTheme = storedTheme ? storedTheme : (prefersDark ? 'dark' : 'dark');
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} theme`);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('km_theme', theme);
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }
}

/* ==========================================================================
   2. Sticky Navigation, Hamburger Menu & Scrollspy
   ========================================================================== */
function initNavigation() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Mobile menu toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
      hamburgerBtn.innerHTML = isOpen 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    // Close menu on nav item click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
          hamburgerBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        }
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      }
    });
  }

  // Active Link Highlighting (Scrollspy)
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   3. Entrance Animations (Intersection Observer)
   ========================================================================== */
function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const animElements = document.querySelectorAll(
    '.timeline-card, .skill-card, .soft-skill-card, .project-card, .cert-card, .social-box'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  animElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
  });
}

/* ==========================================================================
   4. Modal & Lightbox System
   ========================================================================== */
function initModals() {
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  window.openModal = function(title, contentHtml) {
    if (!modalBackdrop || !modalTitle || !modalBody) return;
    modalTitle.textContent = title;
    modalBody.innerHTML = contentHtml;
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  // Certificate Modal Viewers - Shows comprehensive certificate details (no certificate image shown)
  const certButtons = document.querySelectorAll('[data-cert-id]');
  certButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const certId = btn.getAttribute('data-cert-id');
      const certData = (PORTFOLIO_CONFIG.certificates || []).find(c => c.id === certId);
      if (certData) {
        const skillsBadges = (certData.skills || []).map(skill => 
          `<span style="display: inline-block; padding: 4px 10px; background: rgba(56, 189, 248, 0.12); color: var(--accent-cyan); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 9999px; font-size: 0.8rem; font-weight: 600;">${skill}</span>`
        ).join(' ');

        openModal(certData.title, `
          <div style="text-align: left; padding: 4px 0;">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 18px; flex-wrap: wrap;">
              <span style="display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; background: rgba(99, 102, 241, 0.15); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 9999px; font-size: 0.82rem; font-weight: 600;">
                🏷️ Domain: ${certData.badge}
              </span>
              <span style="display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 9999px; font-size: 0.82rem; font-weight: 600;">
                ✓ ${certData.status || 'Verified Coursework'}
              </span>
            </div>

            <div style="background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 14px 16px; margin-bottom: 18px;">
              <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); font-weight: 700; margin-bottom: 4px;">Credential Scope</div>
              <div style="font-size: 0.96rem; font-weight: 600; color: var(--text-primary);">${certData.issuer || 'Technical Coursework & Certification'}</div>
            </div>

            <div style="margin-bottom: 20px;">
              <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">Curriculum & Learning Focus</div>
              <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.65; margin: 0;">
                ${certData.description}
              </p>
            </div>

            ${skillsBadges ? `
              <div style="margin-bottom: 24px;">
                <div style="font-size: 0.84rem; font-weight: 700; color: var(--text-primary); margin-bottom: 10px;">Key Competencies & Tools</div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${skillsBadges}
                </div>
              </div>
            ` : ''}

            <div style="display: flex; justify-content: flex-end; gap: 12px; padding-top: 16px; border-top: 1px solid var(--border-color);">
              <button onclick="closeModal()" class="btn btn-secondary btn-sm">Close</button>
              ${certData.fileUrl ? `<a href="${certData.fileUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Open Official Document</a>` : ''}
            </div>
          </div>
        `);
      }
    });
  });


  // Configurable Placeholder Buttons (Project Repos / Demos)
  const placeholderBtns = document.querySelectorAll('.btn-disabled-placeholder');
  placeholderBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = btn.getAttribute('data-type') || 'Link';
      openModal(`${type} Placeholder`, `
        <div style="text-align: center; padding: 10px 0;">
          <div style="font-size: 2.5rem; margin-bottom: 14px;">🛠️</div>
          <h3 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--text-primary);">Configurable ${type} Placeholder</h3>
          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
            No specific ${type.toLowerCase()} URL was provided yet. You can easily add your live link in <code>assets/js/config.js</code> under <code>projects[0].githubUrl</code> or <code>projects[0].demoUrl</code>.
          </p>
          <div style="display: flex; justify-content: center; gap: 12px;">
            <a href="${PORTFOLIO_CONFIG.social.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Visit Main GitHub Profile</a>
            <button onclick="closeModal()" class="btn btn-secondary btn-sm">Close</button>
          </div>
        </div>
      `);
    });
  });
}

/* ==========================================================================
   5. Download Resume Feature
   ========================================================================== */
function initResumeDownload() {
  const resumeBtns = document.querySelectorAll('.btn-download-resume');
  resumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const resumePdfPath = PORTFOLIO_CONFIG.resume.filePath || 'assets/resume.pdf';
      const resumeHtmlPath = PORTFOLIO_CONFIG.resume.htmlDocPath || 'assets/docs/Krishna_Manohar_Sangani_Resume.html';

      // Check if file exists via HEAD request or offer direct download / viewer
      fetch(resumePdfPath, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            // PDF file is present! Initiate clean download
            const link = document.createElement('a');
            link.href = resumePdfPath;
            link.download = 'Krishna_Manohar_Sangani_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('Downloading Krishna Manohar Sangani Resume...');
          } else {
            // Resume PDF not yet placed at assets/resume.pdf -> show graceful dialog
            openResumeFallbackModal(resumePdfPath, resumeHtmlPath);
          }
        })
        .catch(() => {
          // Fallback modal
          openResumeFallbackModal(resumePdfPath, resumeHtmlPath);
        });
    });
  });
}

function openResumeFallbackModal(pdfPath, htmlPath) {
  openModal('Resume Download & Viewer', `
    <div style="text-align: left; padding: 4px;">
      <div style="background: rgba(56,189,248,0.08); border: 1px solid rgba(56,189,248,0.25); border-radius: 8px; padding: 14px; margin-bottom: 18px;">
        <div style="font-weight: 700; color: var(--accent-cyan); margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
          <span>📄</span> Resume Path: <code>${pdfPath}</code>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
          You can drop your actual resume PDF file into <code>assets/resume.pdf</code> and this button will download it automatically.
        </p>
      </div>
      <p style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 16px;">
        In the meantime, you can view and print the complete, recruiter-formatted resume document right now:
      </p>
      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
        <a href="${htmlPath}" target="_blank" class="btn btn-primary" style="justify-content: center;">
          <span>👁️</span> Open Full Formatted Resume (HTML & Print)
        </a>
        <button onclick="window.print(); closeModal();" class="btn btn-secondary" style="justify-content: center;">
          <span>🖨️</span> Save Current Portfolio as PDF
        </button>
      </div>
      <div style="text-align: right;">
        <button onclick="closeModal()" class="btn btn-outline btn-sm">Close</button>
      </div>
    </div>
  `);
}

/* ==========================================================================
   6. Download Portfolio Feature (Print-to-PDF & Recruiter View)
   ========================================================================== */
function initPortfolioDownload() {
  const downloadPortfolioBtns = document.querySelectorAll('.btn-download-portfolio');
  downloadPortfolioBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Clean modal explaining options or immediate clean print
      openModal('Download Complete Portfolio (PDF)', `
        <div style="text-align: left; padding: 4px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
            <div style="font-size: 2.2rem;">📑</div>
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary);">Recruiter-Friendly PDF Export</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted);">Formatted for placements, HR screenings, and technical interviews.</p>
            </div>
          </div>
          
          <div style="background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
            <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">Included in this PDF:</div>
            <ul style="font-size: 0.84rem; color: var(--text-secondary); padding-left: 20px; line-height: 1.6;">
              <li>Full Profile & Professional Headline</li>
              <li>About Me & Academic Overview</li>
              <li>Education (CSM Degree CGPA 8.1, Diploma in ECE at Aditya Polytechnic College 87.3%, 10th)</li>
              <li>Categorized Technical & Soft Skills</li>
              <li>House Price Prediction Project</li>
              <li>Certifications & Validated Credentials</li>
              <li>Verified LinkedIn & GitHub Profiles</li>
            </ul>
          </div>

          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 20px;">
            Click below to generate the clean PDF. In the browser print dialog, choose <strong>"Save as PDF"</strong>. All navigation bars, animations, and website buttons will be cleanly omitted.
          </p>

          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <button id="trigger-portfolio-print" class="btn btn-primary" style="flex: 1; justify-content: center;">
              <span>🖨️</span> Save as PDF Now
            </button>
            <a href="${PORTFOLIO_CONFIG.resume.htmlDocPath}" target="_blank" class="btn btn-secondary" style="flex: 1; justify-content: center;">
              <span>📄</span> View 1-Page Resume
            </a>
          </div>
        </div>
      `);

      const triggerBtn = document.getElementById('trigger-portfolio-print');
      if (triggerBtn) {
        triggerBtn.addEventListener('click', () => {
          closeModal();
          setTimeout(() => {
            window.print();
          }, 350);
        });
      }
    });
  });
}

/* ==========================================================================
   7. Contact Form Handling
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (document.getElementById('contact-name')?.value || '').trim();
    const email = (document.getElementById('contact-email')?.value || '').trim();
    const subject = (document.getElementById('contact-subject')?.value || '').trim();
    const message = (document.getElementById('contact-message')?.value || '').trim();

    if (!name || !email || !subject || !message) {
      showToast('⚠️ Please fill out all required fields.');
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('⚠️ Please enter a valid email address.');
      return;
    }

    // Success feedback
    openModal('Message Sent (Frontend Ready)', `
      <div style="text-align: center; padding: 12px 0;">
        <div style="font-size: 2.8rem; margin-bottom: 12px;">✅</div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 8px;">Thank You, ${name}!</h3>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
          Your message has been captured. This form is frontend-ready. You can easily connect it to a free backend service like Formspree or EmailJS by updating the form action.
        </p>
        <div style="background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 20px; text-align: left;">
          <div><strong>Subject:</strong> ${subject}</div>
          <div><strong>From:</strong> ${email}</div>
          <div style="margin-top: 6px; font-style: italic;">"${message.substring(0, 100)}${message.length > 100 ? '...' : ''}"</div>
        </div>
        <button onclick="closeModal()" class="btn btn-primary btn-sm">Done</button>
      </div>
    `);

    form.reset();
  });
}

/* ==========================================================================
   8. Toast Notification Utility
   ========================================================================== */
function showToast(message) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>⚡</span><span>${message}</span>`;
  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

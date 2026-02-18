const profile = {
  name: 'MIRZA AADIL ALI BAIG',
  role: 'Computer Science Engineering Student | GITAM University',
  tagline:
    'Specializing in Python, computer vision, and object detection with practical internship implementation and national-level hackathon exposure.',
  summary:
    'Computer Science Engineering student specializing in Python programming, computer vision, and object detection. Experienced in implementing real-time AI solutions during ITC PSPD internship. SIH 2025 Finalist representing GITAM at the National Grand Finale 2025. Driven to solve practical industry challenges with efficient execution and teamwork.',
  contact: {
    phone: '6302791253',
    email: 'mirzaaadilalibaig@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mirza-aadil'
  },
  stats: [
    { value: 'SIH 2025', label: 'National Finalist' },
    { value: '7.5', label: 'CGPA (B.Tech CSE)' },
    { value: '3+', label: 'AI/ML Projects' },
    { value: '2022-26', label: 'Engineering Timeline' }
  ],
  education: [
    {
      title: 'Bachelor of Technology in Computer Science Engineering',
      place: 'GITAM University, Hyderabad',
      period: '2022 – 2026',
      details: 'CGPA: 7.5'
    },
    {
      title: 'Junior College',
      place: 'Little Flower Junior College, Bhadrachalam',
      period: '2022',
      details: 'Score: 88%'
    },
    {
      title: 'High School',
      place: 'Bhadrachalam Public School',
      period: '2020',
      details: 'Score: 82%'
    }
  ],
  technicalSkills: {
    Programming: ['Python', 'C'],
    'Web Technologies': ['HTML', 'CSS'],
    Database: ['SQL'],
    'Core Computer Science': ['DSA', 'OS', 'COA', 'SDLC'],
    'Machine Learning & AI': ['Object Detection', 'ML Fundamentals', 'NLP Basics'],
    'Libraries & Tools': ['OpenCV', 'NumPy', 'Git', 'Google Colab', 'VS Code']
  },
  experience: [
    {
      title: 'Internship Project — Object Detection',
      organization: 'ITC Limited (ITC PSPD)',
      period: 'Internship',
      bullets: [
        'Developed a real-time object detection and counting system.',
        'Tracked object movement in live webcam feed with YOLOv8 model inference.',
        'Used Python, OpenCV, YOLOv8, and NumPy for implementation and testing.'
      ]
    }
  ],
  projects: [
    {
      title: 'Object Detection Model',
      context: 'ITC PSPD internship',
      description:
        'Developed and validated a practical object detection model for real-time monitoring use cases.'
    },
    {
      title: 'AI Analytic Dashboard',
      context: 'Personal/Academic project',
      description: 'Created a dashboard for data visualization and insights communication.'
    },
    {
      title: 'Language Translator',
      context: 'NLP-based project',
      description: 'Built a language translator prototype using natural language processing fundamentals.'
    }
  ],
  certifications: [
    'C for Everyone: Programming Fundamentals',
    'English for Career Development',
    'Entrepreneurship I & II',
    'Everyday Excel - Part 1, 2, 3'
  ],
  activities: [
    'Smart India Hackathon (SIH) 2025 Finalist — National Grand Finale, Delhi',
    'Marketing Team Lead, Pramana (Annual Fest of GITAM University)',
    'AI/ML Team, Google Developer Groups on Campus (GDGC)',
    'Member, Anveshna Club (Technical & Cultural Activities)'
  ],
  softSkills: ['Communication', 'Time Management', 'Adaptability', 'Team Collaboration', 'Analytical Thinking']
};

const byId = (id) => document.getElementById(id);

function renderHero() {
  byId('name').textContent = profile.name;
  byId('role').textContent = profile.role;
  byId('tagline').textContent = profile.tagline;
  byId('summary').textContent = profile.summary;

  byId('linkedinLink').href = profile.contact.linkedin;
  byId('emailLink').href = `mailto:${profile.contact.email}`;
  byId('phoneLink').href = `tel:${profile.contact.phone}`;

  byId('stats').innerHTML = profile.stats
    .map((stat) => `<div class="stat"><strong>${stat.value}</strong><span>${stat.label}</span></div>`)
    .join('');
}

function renderEducation() {
  byId('education').innerHTML = profile.education
    .map(
      (item) => `
      <div class="item">
        <div class="item-head">
          <h3>${item.title}</h3>
          <span class="meta">${item.period}</span>
        </div>
        <p>${item.place} • ${item.details}</p>
      </div>`
    )
    .join('');
}

function renderSkills() {
  byId('skillsContainer').innerHTML = Object.entries(profile.technicalSkills)
    .map(
      ([group, values]) => `
      <article class="skill-card reveal pop-up">
        <h3>${group}</h3>
        <div class="chips">
          ${values.map((value) => `<span>${value}</span>`).join('')}
        </div>
      </article>`
    )
    .join('');
}

function renderExperience() {
  byId('experienceContainer').innerHTML = profile.experience
    .map(
      (item) => `
      <article class="experience-card reveal pop-up">
        <div class="item-head">
          <h3>${item.title} • ${item.organization}</h3>
          <span class="meta">${item.period}</span>
        </div>
        <ul>
          ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
        </ul>
      </article>`
    )
    .join('');
}

function renderProjects() {
  byId('projectsContainer').innerHTML = profile.projects
    .map(
      (project) => `
      <article class="project-card reveal pop-up">
        <h3>${project.title}</h3>
        <p><strong>${project.context}</strong></p>
        <p>${project.description}</p>
      </article>`
    )
    .join('');
}

function renderLists() {
  byId('certifications').innerHTML = profile.certifications.map((item) => `<li>${item}</li>`).join('');
  byId('activities').innerHTML = profile.activities.map((item) => `<li>${item}</li>`).join('');
  byId('softSkills').innerHTML = profile.softSkills.map((item) => `<span>${item}</span>`).join('');

  byId('contactInfo').innerHTML = `
    <a class="contact-tile" href="tel:${profile.contact.phone}">
      <span>Phone</span>
      <strong>${profile.contact.phone}</strong>
    </a>
    <a class="contact-tile" href="mailto:${profile.contact.email}">
      <span>Email</span>
      <strong>${profile.contact.email}</strong>
    </a>
    <a class="contact-tile" href="${profile.contact.linkedin}" target="_blank" rel="noreferrer">
      <span>LinkedIn</span>
      <strong>mirza-aadil</strong>
    </a>
  `;
}

function setupTheme() {
  const root = document.documentElement;
  const toggle = byId('themeToggle');
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'light') {
    root.classList.add('light');
    toggle.textContent = '🌙';
  } else {
    toggle.textContent = '☀️';
  }

  toggle.addEventListener('click', () => {
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    toggle.textContent = isLight ? '🌙' : '☀️';
  });
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

renderHero();
renderEducation();
renderSkills();
renderExperience();
renderProjects();
renderLists();
setupTheme();
setupRevealAnimations();

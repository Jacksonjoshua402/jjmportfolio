const projects = [
  { year:"2026", title:"Mosima Cars & Logistics", description:"Business website for a Zambia-based clearing, forwarding & vehicle logistics company — featuring their services, Nakonde border clearance specialisation, and fleet hire offerings across Zambia, Zimbabwe & the DRC.", stack:["HTML","CSS","JavaScript"], url:"https://mosimas.netlify.app/" },
  { year:"2026", title:"Gospel Envoys Radio and Tv Ministry",     description:"It is a ministry website that serves as a directory of faith-based TV and radio broadcasting platform that aids the department in keeping track of all the platforms that the department can reach by spreading the Gospel across all 10 provinces of Zambia.",         stack:["PHP","CSS","JavaScript", "SQL"],            url:"https://gec.cu.ma/" },
  { year:"2026", title:"JJM 2026 — My Day Plan", description:"A personal spiritual growth planner web app — daily schedule tracker across morning/afternoon/evening sessions, growth targets, prophecy & confession archives, book/course trackers, a prayer journal, giving log, and PDF/report export, with Google sign-in and cloud sync.", stack:["React","Firebase","Tailwind CSS"], url:"https://jjmplanner.netlify.app/" },
  { year:"2026", title:"KCHSR Premier League", description:"Official website for the Kafue College of Health Sciences & Research's inter-semester football league — live league table, match updates, results, fixtures, transfer news, player stats and club profiles for all six competing teams.", stack:["PHP","CSS","JavaScript","SQL"], url:"https://kchsr.wasmer.app/" },
  { year:"2026", title:"Krugers Metal Fabrication", description:"Business website for a Lusaka-based custom metal fabrication company — showcasing gates, architectural metalwork, structural steel, machinery parts and welding services from concept to installation.", stack:["HTML","CSS","JavaScript"], url:"https://kruger-metals.onrender.com/" },
  { year:"2026", title:"Gospel Envoys Media Register", description:"Media ministry management system for Gospel Envoys Church — a directory and administration tool tracking media officers, departments, zones and branches across the ministry's leadership structure, with multi-position role assignments and settings management for the media team.", stack:["React","TypeScript","Firebase"], url:"https://gecmedias.onrender.com/" },
  { year:"2026", title:"Hospital Management System", description:"Upcoming system for managing patient records, appointments, billing, and hospital staff workflows.", stack:["Coming Soon"], url:"#" },
  { year:"2026", title:"Money Lending Business Management System", description:"Upcoming system for managing loan applications, repayments, interest tracking, and borrower records for lending businesses.", stack:["Coming Soon"], url:"#" },
  { year:"2026", title:"Online Shopping Management System", description:"Upcoming e-commerce management platform covering product catalogs, orders, inventory, and customer accounts.", stack:["Coming Soon"], url:"#" },
];

const skills = ["Graphic Design","Web Development","Website Design","Data Entry","Typing","Video Editing","Responsive Design"];

// Skills
const skillsList = document.getElementById('skillsList');
skills.forEach(s => {
  const span = document.createElement('span');
  span.className = 'skill-tag';
  span.textContent = s;
  skillsList.appendChild(span);
});

// Projects
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const linkHTML = p.url === '#'
    ? `<span class="project-link project-link--soon">Coming Soon</span>`
    : `<a href="${p.url}" target="_blank" rel="noreferrer" class="project-link">Visit Site ↗</a>`;
  projectsGrid.innerHTML += `<article class="project-card">
    <span class="project-year">${p.year}</span>
    <h3 class="project-name">${p.title}</h3>
    <p class="project-desc">${p.description}</p>
    <div class="project-stack">${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}</div>
    <div class="project-footer">${linkHTML}</div>
  </article>`;
});

// Design Grid
let visibleWorks = [];
const designGrid = document.getElementById('designGrid');

function renderDesignGrid(arr) {
  visibleWorks = arr.slice(0, 12);
  designGrid.innerHTML = visibleWorks.map((w, i) => `
    <article class="design-card" data-index="${i}">
      <div class="card-thumb">
        ${cardThumbHTML(w)}
        <span class="card-cat-badge">${w.category}</span>
        <div class="card-overlay"><span>Click to expand →</span></div>
      </div>
      <div class="card-info">
        <div class="card-info-row">
          <span class="card-title">${w.title}</span>
          <span class="card-year">${w.year}</span>
        </div>
        <p class="card-desc">${w.description}</p>
        ${w.note ? `<p class="card-note">⚠ Disclaimer: ${w.note}</p>` : ''}
      </div>
    </article>`).join('');

  designGrid.querySelectorAll('.design-card').forEach(card => {
    card.addEventListener('click', () => openLightbox(parseInt(card.dataset.index)));
  });
}

const { openLightbox } = initLightbox(() => visibleWorks);

let currentWorks = shuffle(works);
renderDesignGrid(currentWorks);

document.getElementById('viewAllBtn').textContent = `View all ${works.length} designs →`;
document.getElementById('shuffleBtn').addEventListener('click', () => {
  currentWorks = shuffle(works);
  renderDesignGrid(currentWorks);
});

// Contact form (Netlify AJAX Submission)
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const form = e.target;
  const formNote = document.getElementById('formNote');
  const btn = form.querySelector('.btn-send');
  
  btn.disabled = true;
  btn.textContent = "Sending...";

  const formData = new FormData(form);

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    });

    if (response.ok) {
      formNote.textContent = "Thank you! Your message has been sent successfully.";
      form.reset();
    } else {
      formNote.textContent = "Oops! There was a problem submitting your form.";
    }
  } catch (error) {
    formNote.textContent = "Network error. Please try again later.";
  } finally {
    btn.disabled = false;
    btn.textContent = "Send Message →";
  }
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

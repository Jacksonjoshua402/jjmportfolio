const categories = [
  "All","Logos","Birthdays","GEC","Majesty Prints","Freelance","Branding","Ntemba24",
  "Yakiroo Kitchens","WhiskitZm","TJ Innovations",
  "El Classic Enterprise","Lynette Kunda","Lowkey Group","Mbachi Studios","Michelle Money Lenders"
];

let activeCategory = 'All';
let filtered = [];

document.getElementById('pageSubtitle').textContent =
  `The full collection — ${works.length} pieces across logos, birthday tributes, and client work.`;

function buildFilterNav(navEl, isMobile) {
  navEl.innerHTML = '';
  categories.forEach(c => {
    const count = c === 'All' ? works.length : works.filter(w => w.category === c).length;
    if (c !== 'All' && count === 0) return;
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (c === activeCategory ? ' active' : '');
    btn.innerHTML = `<span>${c}</span><span class="filter-count">${count}</span>`;
    btn.addEventListener('click', () => {
      activeCategory = c;
      document.getElementById('mobileActiveLabel').textContent = '· ' + c;
      if (isMobile) closeDrawer();
      applyFilter();
      buildFilterNav(document.getElementById('filterNav'), false);
      buildFilterNav(document.getElementById('filterNavMobile'), true);
    });
    navEl.appendChild(btn);
  });
}

function applyFilter() {
  const pool = activeCategory === 'All' ? works : works.filter(w => w.category === activeCategory);
  filtered = shuffle(pool);
  renderGrid();
  updateMeta();
}

function renderGrid() {
  const grid = document.getElementById('designsGrid');
  if (filtered.length === 0) {
    grid.innerHTML = '<p class="empty">No designs in this category yet.</p>';
    return;
  }
  grid.innerHTML = filtered.map((w, i) => `
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
      </div>
    </article>`).join('');

  grid.querySelectorAll('.design-card').forEach(card => {
    card.addEventListener('click', () => openLightbox(parseInt(card.dataset.index)));
  });
}

function updateMeta() {
  const meta = document.getElementById('resultsMeta');
  const label = filtered.length === 1 ? 'design' : 'designs';
  const inCat = activeCategory !== 'All' ? ` in <span class="highlight">${activeCategory}</span>` : '';
  meta.innerHTML = `Showing ${filtered.length} ${label}${inCat}`;
}

const { openLightbox } = initLightbox(() => filtered);

buildFilterNav(document.getElementById('filterNav'), false);
buildFilterNav(document.getElementById('filterNavMobile'), true);
applyFilter();

document.getElementById('shuffleBtnDesktop').addEventListener('click', applyFilter);
document.getElementById('shuffleBtnMobile').addEventListener('click', applyFilter);

// Mobile drawer
const drawerOverlay = document.getElementById('drawerOverlay');
document.getElementById('filterOpenBtn').addEventListener('click', () => {
  drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
});
function closeDrawer() {
  drawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('drawerClose').addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', e => { if (e.target === drawerOverlay) closeDrawer(); });

const works = [
  // Birthdays
  { img:"images/bday-felix.webp",           title:"Bro. Felix — Birthday Tribute",          year:"2024", description:"Glorious prolific birthday poster with ornate frame and golden typography",           category:"Birthdays" },
  { img:"images/bday-charles.webp",         title:"Bro. Charles — Happy Birthday",          year:"2025", description:"Elegant birthday celebration poster with script typography and photo collage",        category:"Birthdays" },
  { img:"images/bday-gibson.webp",          title:"Pastor Gibson — Glorious Birthday",       year:"2024", description:"Purple-themed tribute poster with framed portrait and date badge",                   category:"Birthdays" },
  { img:"images/bday-lombe.webp",           title:"Pastor Lombe — PCPN Tribute",            year:"2026", description:"Magenta gradient birthday poster with flowing veil composition",                      category:"Birthdays" },
  { img:"images/bday-maxwell.webp",         title:"Maxwell Chalansi — Esteemed Brother",    year:"2026", description:"Golden pillar birthday tribute featuring trophy and framed memory",                   category:"Birthdays" },
  { img:"images/bday-pastor-ma-4days.webp", title:"Pastor MA — 4 Days To Go",               year:"2026", description:"Countdown tribute poster celebrating Pastor MA's birthday milestone",                 category:"Birthdays" },
  { img:"images/bday-pastor-ma-8days.webp", title:"Pastor MA — 8 Days To Go",               year:"2026", description:"High quality countdown birthday poster with regal styling",                           category:"Birthdays" },
  { img:"images/bday-pastor-ma-11days.webp",title:"Pastor MA — 11 Days To Go",              year:"2026", description:"Ornate countdown poster in golden tones for Pastor MA birthday campaign",             category:"Birthdays" },
  { img:"images/bday-pastor-ma-14days.webp",title:"Pastor MA — 14 Days To Go",              year:"2026", description:"Elegant 14-day countdown tribute with bold typographic composition",                  category:"Birthdays" },
  { img:"images/bday-pastor-ma-17days.webp",title:"Pastor MA — 17 Days To Go",              year:"2026", description:"Birthday countdown series opening poster with signature color palette",               category:"Birthdays" },
  // Lynette Kunda
  { img:"images/lynette-pastor-ma.webp",    title:"Pastor Mwape — Gospel Envoys Tribute",    year:"2026", description:"A teal-toned tribute poster for Pastor Mwape of Gospel Envoys, featuring a multi-photo collage of her preaching and ministering, with bold typography and the Gospel Envoys globe logo.", category:"Freelance" },
  { img:"images/lynette-work1.webp",        title:"Digital Marketing Agency — Promo Flyer",  year:"2024", description:"A bold black and yellow digital marketing agency promotional flyer with the headline 'Boost up your online business today', a Get Started CTA, and contact details.", category:"Freelance" },
  { img:"images/lynette-cake-menu.webp",    title:"Lynette Kunda — Cake Menu",               year:"2025", description:"A special edition cake menu design for Lynette Kunda, showcasing baked products in a clean grid layout with elegant styling.",                category:"Lynette Kunda" },
  // GEC
  { img:"images/gec-super-thursday.webp",   title:"Super Thursday — Evelyn Hone College",   year:"2023", description:"Royal Academy event banner with golden diamond frames",                               category:"GEC" },
  { img:"images/gec-zimba-sunday.webp",     title:"Gospel Envoys Zimba — Sunday Service",   year:"2025", description:"Vibrant service announcement with golden typography",                                  category:"GEC" },
  { img:"images/gec-royal-citizens.webp",   title:"Royal Citizens of Heaven — Sunday Service", year:"2024", description:"A worship-themed Sunday service announcement poster with a rich golden colour palette, reminding believers of their identity as citizens of heaven.", category:"Freelance" },
  { img:"images/gec-friday-youth.webp",     title:"Friday Youth Service",                   year:"2023", description:"Energetic youth service announcement with bold modern typography",                    category:"GEC" },
  { img:"images/gec-kids-bootcamp.webp",    title:"Kids Bible Boot Camp",                   year:"2025", description:"Playful children's ministry event flyer with vibrant colors",                         category:"GEC" },
  { img:"images/gec-kbbc-1.webp",           title:"KBBC — Pastoral Tribute",                year:"2025", description:"Honor poster for ministry leadership with regal styling",                             category:"GEC" },
  { img:"images/gec-kbbc-2.webp",           title:"KBBC — Pastoral Tribute II",             year:"2025", description:"Companion tribute design celebrating ministry leadership",                             category:"GEC" },
  { img:"images/gec-singles-seminar.webp",  title:"Singles Seminar 2.0",                    year:"2023", description:"Conference flyer with modern editorial layout and bold typography",                   category:"GEC" },
  { img:"images/gec-5days-geclc.webp",      title:"5 Days — GECLC Countdown",               year:"2026", description:"Countdown campaign visual for Gospel Envoys college event",                           category:"GEC" },
  { img:"images/gec-5days.webp",            title:"GEC — 5 Days To Go",                     year:"2026", description:"Bold countdown announcement with cinematic gradient backdrop",                        category:"GEC" },
  { img:"images/gec-ccgcm.webp",            title:"CCGCM Conference",                       year:"2025", description:"Ministry conference flyer with refined typographic hierarchy",                        category:"GEC" },
  { img:"images/gec-ccos-meeting.webp",     title:"CCOs Online Report Meeting",             year:"2025", description:"Corporate ministry meeting announcement with clean professional layout",               category:"GEC" },
  { img:"images/gec-cco-s.webp",            title:"CCO — Leadership Spotlight",             year:"2025", description:"Honor poster spotlighting key ministry coordinators",                                  category:"GEC" },
  { img:"images/gec-introduce-yourself.webp",title:"GEC Online — Introduce Yourself",       year:"2024", description:"Youth engagement social media post with vibrant call-to-action design",               category:"GEC" },
  { img:"images/gec-weekly-programs.webp",  title:"GE Lusaka South — Weekly Programs",      year:"2026", description:"Full weekly schedule flyer with color-coded ribbon panels",                           category:"GEC" },
  { img:"images/gec-kbbc-partners.webp",    title:"KBBC — Top Partners",                    year:"2025", description:"Recognition piece celebrating top ministry partners with golden frame collage",        category:"GEC" },
  { img:"images/gec-did-you-know-1.webp",   title:"Did You Know? — Series 01",              year:"2025", description:"First post in a freelance educational social media series, designed to spark curiosity with bold visuals and bite-sized faith-based facts.",    category:"Freelance" },
  { img:"images/gec-did-you-know-5.webp",   title:"Did You Know? — Series 05",              year:"2025", description:"Fifth post in the freelance educational social media series, maintaining a consistent visual style to build audience recognition and engagement.", category:"Freelance" },
  { img:"images/gec-pcpn-kids.webp",        title:"PCPN Kids — Campaign",                   year:"2025", description:"Vibrant children's campaign poster with playful energy",                              category:"GEC" },
  { img:"images/gec-fit.webp",              title:"FIT — Fitness Promo",                    year:"2025", description:"High-energy fitness service promotion with bold typography",                          category:"GEC" },
  // NTEMBA24
  { img:"images/ntemba-youth-3.webp",       title:"Ntemba 24 — Youth Day Tournament",       year:"2025", description:"Football tournament flyer with cool blue duotone and bold prize callouts",            category:"Ntemba24", note:"Created as part of an interview process for a remote work position." },
  { img:"images/ntemba-youth-5.webp",       title:"Ntemba 24 — Youth Day Football",         year:"2025", description:"Action-packed tournament banner with dynamic split composition",                      category:"Ntemba24", note:"Created as part of an interview process for a remote work position." },
  // TJ Innovations
  { img:"images/tj-loans.webp",             title:"TJ Innovations — Collateral Accepted",   year:"2023", description:"Financial services promo with bold checklist layout and product imagery",             category:"TJ Innovations" },
  // Michelle Money Lenders
  { img:"images/michelle-1.webp",           title:"Michelle's Money Lenders — Banner I",    year:"2024", description:"Lending services banner with strong corporate identity",                              category:"Michelle Money Lenders" },
  { img:"images/michelle-3.webp",           title:"Michelle's Money Lenders — Banner III",  year:"2024", description:"Companion banner extending the lending brand visual system",                          category:"Michelle Money Lenders" },
  // Mbachi Studios
  { img:"images/mbachi-studios.webp",       title:"Mbachi Studios — Wedding Photography",   year:"2024", description:"Elegant wedding photography promo with romantic editorial styling",                   category:"Mbachi Studios" },
  { img:"images/mbachi-studios-2.webp",     title:"Mbachi Studios — Updated Promo",         year:"2024", description:"Updated promotional design with refined composition and branding",                    category:"Mbachi Studios" },
  // Lowkey Group
  { img:"images/lowkey-1.webp",             title:"LowKey — Lifestyle Promo I",             year:"2025", description:"Trendy lifestyle brand promotional design",                                           category:"Lowkey Group", note:"Created as part of an interview process for a remote work position." },
  { img:"images/lowkey-2.webp",             title:"LowKey — Lifestyle Promo II",            year:"2025", description:"Companion lifestyle brand promo extending the visual identity",                       category:"Lowkey Group", note:"Created as part of an interview process for a remote work position." },
  // Yakiroo Kitchens
  { img:"images/yakiroo-1.webp",            title:"Yakiroo Kitchens — Hire Catalog",        year:"2026", description:"Cooking utensil hire flyer with product cutouts and bold orange brand accents",       category:"Yakiroo Kitchens" },
  { img:"images/yakiroo-2.webp",            title:"Yakiroo Kitchens — Serving Utensils",    year:"2026", description:"Square format product promo with circular product highlights",                        category:"Yakiroo Kitchens" },
  // Majesty Prints
  { img:"images/majesty-a.webp",            title:"Majesty Prints — Print Design A",        year:"2026", description:"Premium print design from the Majesty Prints product line",                          category:"Majesty Prints" },
  { img:"images/majesty-d.webp",            title:"Majesty Prints — Print Design D",        year:"2026", description:"Coordinating print design extending the Majesty Prints collection",                  category:"Majesty Prints" },
  { img:"images/majesty-tshirt.webp",       title:"Majesty Prints — T-Shirt Design",        year:"2026", description:"Apparel graphic design for Majesty Prints merchandise line",                         category:"Majesty Prints" },
  { img:"images/majesty-e.webp",            title:"Majesty Prints — Print Design E",        year:"2026", description:"Fresh print design with clean layout and strong visual identity",                     category:"Majesty Prints" },
  { img:"images/majesty-g.webp",            title:"Majesty Prints — Print Design G",        year:"2026", description:"Bold graphic print extending the Majesty collection",                                category:"Majesty Prints" },
  { img:"images/majesty-h.webp",            title:"Majesty Prints — Print Design H",        year:"2026", description:"Premium edition print with refined typographic elements",                            category:"Majesty Prints" },
  { img:"images/majesty-ncwala.webp",       title:"Majesty Prints — Ncwala T-Shirt",        year:"2026", description:"Cultural celebration t-shirt design in crisp white",                                 category:"Majesty Prints" },
  { img:"images/majesty-cap.webp",          title:"Majesty Prints — Cap Design",            year:"2026", description:"Black and white cap design with bold monochrome branding",                           category:"Majesty Prints" },
  { img:"images/majesty-f.webp",            title:"Majesty Prints — Print Design F",        year:"2026", description:"Monochrome print design with strong visual contrast",                                category:"Majesty Prints" },
  // El Classic Enterprise
  { img:"images/el-classic-2.webp",         title:"El Classic — Design 02",                 year:"2025", description:"Elegant product design with timeless visual styling",                                category:"El Classic Enterprise" },
  { img:"images/el-classic-3.webp",         title:"El Classic — Design 03",                 year:"2025", description:"Companion piece extending the El Classic visual collection",                         category:"El Classic Enterprise" },
  // WhiskitZm
  { img:"images/whiskit-certificate.webp",  title:"Whisk it ZM — Certificate of Attendance",year:"2025", description:"Elegant certificate design with pink geometric accents and script signature font",   category:"WhiskitZm" },
  // SEUS Consult
  { img:"images/seus-artwork.webp",         title:"SEUS Consult (z) Ltd — Brand Flyer",     year:"2025", description:"A clean brand awareness flyer for SEUS Consult (z) Ltd — Sustainable Environment Urban Solutions — featuring four circular environmental photo panels, a recycling icon, and full contact details.", category:"Freelance", note:"Designed at a remote work position" },
  // Logos
  { img:"images/logo-maggies-closet.webp",  title:"Maggie's Closet — Logo",                 year:"2025", description:"Feminine fashion boutique logo with elegant dress illustration and ornate flourishes",category:"Logos" },
  { img:"images/logo-elc.webp",             title:"El Classic Enterprise — Logo",           year:"2025", description:"Bold geometric ELC monogram in red and navy",                                        category:"Logos" },
  { img:"images/logo-ljr.webp",             title:"Lottie Jearah Stores — Logo",            year:"2025", description:"Strong industrial LJR monogram in deep navy with futuristic wordmark",               category:"Logos" },
  { img:"images/logo-generic.webp",         title:"Play and Learnford — Logo",              year:"2023", description:"Brand identity for Play and Learnford, an interactive platform for learning and playing games — featuring a dynamic trophy and ball icon.",      category:"Logos" },
  { img:"images/logo-tj.webp",              title:"TJ Innovations — Logo",                  year:"2022", description:"Bold sculptural JT monogram with sharp architectural geometry",                      category:"Logos" },
  // Freelance
  { img:"images/africa-rising-masterclass.webp", title:"Africa Rising Masterclass — Event Flyer", year:"2026", description:"Invitation flyer for the Africa Rising Masterclass, a free SME and entrepreneurship event backed by AFRIPACT, Nutriva Foods and Farms, the AfCFTA Youth Advisory Council, Global Peace Chain Zambia, and the U.S. Embassy — featuring partner logos, an Africa skyline graphic, and full event details.", category:"Freelance" },
  { img:"images/divine-guidance.webp",           title:"Divine Guidance — Title Card",             year:"2026", description:"Clean gold-and-black title card design on a glowing blue tech-pattern background, built as a section header/cover graphic.", category:"Freelance" },
  { img:"images/running-to-win.webp",            title:"Running to Win — Title Card",              year:"2026", description:"Cinematic purple title card featuring a running silhouette and clock motif, evoking themes of time, purpose, and perseverance.", category:"Freelance" },
  // Branding
  { img:"images/yoad-windows-mockup.webp",       title:"YOAD Prints — Storefront Window Branding",  year:"2026", description:"Storefront window signage mockup for YOAD Advertising & Digital Printing, laying out their full service menu — signage, branding, engraving, printing and promotional products — across five branded window panels.", category:"Branding" },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function logoMockupHTML(src, alt, large = false, darkCard = false) {
  const w = large ? '64%' : '70%', h = large ? '48%' : '50%';
  const bw = large ? '58%' : '62%', bh = large ? '42%' : '44%';
  const cardBg = darkCard ? '#1a1a2e' : '#fff';
  const backBg = darkCard ? 'rgba(30,30,60,0.7)' : 'rgba(255,255,255,0.7)';
  return `<div class="logo-mockup">
    <div class="logo-mockup-glow-tl"></div><div class="logo-mockup-glow-br"></div>
    <div class="logo-card-back" style="width:${bw};height:${bh};background:${backBg}"></div>
    <div class="logo-card-front" style="width:${w};height:${h};background:${cardBg}">
      <img src="${src}" alt="${alt}" loading="lazy" /><div class="logo-card-shine"></div>
    </div>
    <div class="logo-card-shadow"></div>
  </div>`;
}

// Images whose logos need a dark card background to be visible
const darkCardLogos = ['images/logo-generic.webp'];

function cardThumbHTML(w) {
  if (w.category === 'Logos') {
    const dark = darkCardLogos.includes(w.img);
    return `<div class="logo-mockup-wrap">${logoMockupHTML(w.img, w.title, false, dark)}</div>`;
  }
  return `<img src="${w.img}" alt="${w.title}" loading="lazy" width="400" height="400" />`;
}

function initLightbox(getFiltered) {
  const lightbox = document.getElementById('lightbox');
  const lbContent = document.getElementById('lbContent');
  let lbIndex = null;

  if (!lightbox || !lbContent) return { openLightbox: () => {} };

  function renderLightbox() {
    const filtered = getFiltered();
    const w = filtered[lbIndex];
    if (!w) return;

    const isLogo = w.category === 'Logos';
    const dark = darkCardLogos.includes(w.img);
    
    const mediaHTML = isLogo
      ? `<div class="lb-logo-wrap">${logoMockupHTML(w.img, w.title, true, dark)}</div>`
      : `<div class="lb-img-wrap">
           <img class="lb-img" src="${w.img}" alt="${w.title}" />
         </div>`;

    const noteHTML = w.note ? `<p class="lb-note">Disclaimer: ${w.note}</p>` : '';
    
    lbContent.innerHTML = `${mediaHTML}
      <div class="lb-info">
        <h3 class="lb-title">${w.title}</h3>
        <p class="lb-desc">${w.description}</p>
        ${noteHTML}
        <p class="lb-counter">${lbIndex + 1} / ${filtered.length} · ${w.category}</p>
      </div>`;
  }

  function openLightbox(i) {
    lbIndex = i;
    renderLightbox();
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
    lbIndex = null;
  }

  const btnClose = document.getElementById('lbClose');
  const btnPrev = document.getElementById('lbPrev');
  const btnNext = document.getElementById('lbNext');

  if (btnClose) btnClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  if (btnPrev) {
    btnPrev.addEventListener('click', e => {
      e.stopPropagation();
      const filtered = getFiltered();
      lbIndex = (lbIndex - 1 + filtered.length) % filtered.length;
      renderLightbox();
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', e => {
      e.stopPropagation();
      const filtered = getFiltered();
      lbIndex = (lbIndex + 1) % filtered.length;
      renderLightbox();
    });
  }

  document.addEventListener('keydown', e => {
    if (lightbox.classList.contains('hidden')) return;
    const filtered = getFiltered();
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + filtered.length) % filtered.length; renderLightbox(); }
    if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % filtered.length; renderLightbox(); }
  });

  return { openLightbox };
}
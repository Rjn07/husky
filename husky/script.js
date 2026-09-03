/* ═══════════════════════════════════════════════════════════
   Husky Talent — Provider data + intake form logic
   link: URL  → opens that URL directly in a new tab
   link: null → shows Good News card with call button
   ═══════════════════════════════════════════════════════════ */

const ALL_PROVIDERS = [
  {
    id: 'att',
    name: 'AT&T',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" width="110" height="36">
        <rect width="120" height="40" rx="4" fill="#00a8e0"/>
        <text x="60" y="28" font-family="Arial,sans-serif" font-weight="900" font-size="22"
              fill="white" text-anchor="middle">AT&amp;T</text>
      </svg>`,
    link: 'https://www.attspoc.com/e/(S(plnxgaxi4prtlsde50nzh0cc))/oe/landing.aspx',
    avail: 'AT&T Internet & Fiber is available for your address.',
    services: ['internet', 'internet-tv', 'internet-security']
  },
  {
    id: 'directv',
    name: 'DIRECTV',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="130" height="36">
        <rect width="140" height="40" rx="4" fill="#0069c0"/>
        <text x="70" y="28" font-family="Arial,sans-serif" font-weight="900" font-size="17"
              fill="white" text-anchor="middle" letter-spacing="1">DIRECTV</text>
      </svg>`,
    link: 'https://residential.directvdealer.com/explore/?dealer_name=husky-talent&service=directv-stream',
    avail: 'DIRECTV Stream is available for your address.',
    services: ['tv', 'internet-tv']
  },
  {
    id: 'brightspeed',
    name: 'Brightspeed',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 40" width="130" height="36">
        <rect width="150" height="40" rx="4" fill="#6d2d8a"/>
        <text x="75" y="27" font-family="Arial,sans-serif" font-weight="700" font-size="15"
              fill="white" text-anchor="middle">Brightspeed</text>
      </svg>`,
    link: null,
    avail: 'Brightspeed Fiber Internet is available for your address.',
    services: ['internet', 'internet-tv', 'internet-security']
  },
  {
    id: 'frontier',
    name: 'Frontier',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="120" height="36">
        <rect width="140" height="40" rx="4" fill="#d71920"/>
        <text x="70" y="27" font-family="Arial,sans-serif" font-weight="700" font-size="16"
              fill="white" text-anchor="middle">FRONTIER</text>
      </svg>`,
    link: null,
    avail: 'Frontier Fiber Internet is available for your address.',
    services: ['internet', 'internet-tv', 'internet-security']
  },
  {
    id: 'optimum',
    name: 'Optimum',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="120" height="36">
        <rect width="140" height="40" rx="4" fill="#7d2b8b"/>
        <text x="70" y="27" font-family="Arial,sans-serif" font-weight="700" font-size="16"
              fill="white" text-anchor="middle">Optimum</text>
      </svg>`,
    link: null,
    avail: 'Optimum Internet is available for your address.',
    services: ['internet', 'internet-tv', 'internet-security']
  },
  {
    id: 'kinetic',
    name: 'Kinetic',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="120" height="36">
        <rect width="140" height="40" rx="4" fill="#004b8d"/>
        <text x="70" y="27" font-family="Arial,sans-serif" font-weight="700" font-size="16"
              fill="white" text-anchor="middle">Kinetic</text>
      </svg>`,
    link: null,
    avail: 'Kinetic by Windstream is available for your address.',
    services: ['internet', 'internet-tv', 'internet-security']
  },
  {
    id: 'vivint',
    name: 'Vivint',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 40" width="110" height="36">
        <rect width="130" height="40" rx="4" fill="#1a1a2e"/>
        <text x="65" y="27" font-family="Arial,sans-serif" font-weight="700" font-size="18"
              fill="white" text-anchor="middle">Vivint</text>
      </svg>`,
    link: null,
    avail: 'Vivint Smart Home Security is available for your address.',
    services: ['security', 'internet-security']
  },
  {
    id: 'adt',
    name: 'ADT',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" width="80" height="36">
        <rect width="100" height="40" rx="4" fill="#1b3a6b"/>
        <text x="50" y="28" font-family="Arial,sans-serif" font-weight="900" font-size="22"
              fill="white" text-anchor="middle">ADT</text>
      </svg>`,
    link: 'https://www.getsafestreets.com/husky',
    avail: 'ADT Home Security is available for your address.',
    services: ['security', 'internet-security']
  },
  {
    id: 'earthlink',
    name: 'EarthLink',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="120" height="36">
        <rect width="140" height="40" rx="4" fill="#0099cc"/>
        <text x="70" y="27" font-family="Arial,sans-serif" font-weight="700" font-size="15"
              fill="white" text-anchor="middle">EarthLink</text>
      </svg>`,
    link: null,
    avail: 'EarthLink Internet is available for your address.',
    services: ['internet', 'internet-tv', 'internet-security']
  },
  {
    id: 'altafiber',
    name: 'altafiber',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="120" height="36">
        <rect width="140" height="40" rx="4" fill="#e8720c"/>
        <text x="70" y="27" font-family="Arial,sans-serif" font-weight="700" font-size="16"
              fill="white" text-anchor="middle">altafiber</text>
      </svg>`,
    link: null,
    avail: 'altafiber Internet is available for your address.',
    services: ['internet', 'internet-tv', 'internet-security']
  },
  {
    id: 'ziply',
    name: 'Ziply Fiber',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="120" height="36">
        <rect width="140" height="40" rx="4" fill="#0a2e5a"/>
        <text x="70" y="27" font-family="Arial,sans-serif" font-weight="700" font-size="14"
              fill="white" text-anchor="middle">Ziply Fiber</text>
      </svg>`,
    link: null,
    avail: 'Ziply Fiber Internet is available for your address.',
    services: ['internet', 'internet-tv', 'internet-security']
  },
  {
    id: 'metronet',
    name: 'Metronet',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="120" height="36">
        <rect width="140" height="40" rx="4" fill="#004f9f"/>
        <text x="70" y="27" font-family="Arial,sans-serif" font-weight="700" font-size="15"
              fill="white" text-anchor="middle">Metronet</text>
      </svg>`,
    link: null,
    avail: 'Metronet Fiber Internet is available for your address.',
    services: ['internet', 'internet-tv', 'internet-security']
  },
  {
    id: 'viasat',
    name: 'Viasat',
    logoSVG: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" width="110" height="36">
        <rect width="120" height="40" rx="4" fill="#e31837"/>
        <text x="60" y="27" font-family="Arial,sans-serif" font-weight="700" font-size="16"
              fill="white" text-anchor="middle">VIASAT</text>
      </svg>`,
    link: 'https://huskytalent.viasatretailer.com/',
    avail: 'Viasat Satellite Internet is available for your address.',
    services: ['internet', 'internet-tv', 'internet-security']
  }
];

/* ═══════════════════════════════════════════════════════════
   Form handling
   ═══════════════════════════════════════════════════════════ */

function handleSubmit(event) {
  if (event) event.preventDefault();

  const form = document.getElementById('step-form');
  const svc  = document.getElementById('svc').value;
  const zip  = document.getElementById('zip').value.trim();
  const fname = document.getElementById('fname').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!svc)                    { alert('Please select a service.'); return; }
  if (!zip || zip.length < 5)  { alert('Please enter a valid 5-digit ZIP code.'); return; }
  if (!fname)                  { alert('Please enter your first name.'); return; }
  if (!phone)                  { alert('Please enter your phone number.'); return; }

  const submitBtn = form.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  const formData = new FormData(form);

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Thank you! Your request has been submitted. A Husky Talent specialist will contact you shortly.');
      form.reset();
    } else {
      alert('Submission failed: ' + (data.message || 'Unknown error'));
    }
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  })
  .catch(error => {
    console.error('Web3Forms error:', error);
    alert('Submission failed. Please try again or call us directly.');
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('step-form');
  if (form) form.addEventListener('submit', handleSubmit);

  const modalForm = document.getElementById('step-form-modal');
  if (modalForm) modalForm.addEventListener('submit', handleModalSubmit);

  const fab = document.getElementById('msgFab');
  const modal = document.getElementById('msgModal');
  const closeBtn = document.getElementById('msgModalClose');

  if (fab && modal) {
    fab.addEventListener('click', () => {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeModal() {
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeModal();
  });

  initServicesSlider();
});

function initServicesSlider() {
  const track = document.getElementById('servicesTrack');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const dotsContainer = document.getElementById('sliderDots');
  if (!track) return;

  const cards = track.querySelectorAll('.service-card');
  const total = cards.length;
  let current = 0;

  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }
  const dots = dotsContainer.querySelectorAll('.slider-dot');

  function update() {
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    const card = cards[current];
    if (card) {
      const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
      track.scrollTo({ left: Math.max(left, 0), behavior: 'smooth' });
    }
  }

  function goTo(i) {
    current = (i + total) % total;
    update();
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  track.addEventListener('scroll', () => {
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    cards.forEach((c, i) => {
      const cardCenter = c.offsetLeft + c.clientWidth / 2;
      const dist = Math.abs(center - cardCenter);
      if (dist < closestDist) { closestDist = dist; closest = i; }
    });
    if (closest !== current) {
      current = closest;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }
  });

  window.addEventListener('resize', () => {
    clearTimeout(window._sliderResize);
    window._sliderResize = setTimeout(update, 100);
  });
}

function handleModalSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('step-form-modal');
  const svc = document.getElementById('svc-m').value;
  const zip = document.getElementById('zip-m').value.trim();
  const fname = document.getElementById('fname-m').value.trim();
  const phone = document.getElementById('phone-m').value.trim();

  if (!svc)                    { alert('Please select a service.'); return; }
  if (!zip || zip.length < 5)  { alert('Please enter a valid 5-digit ZIP code.'); return; }
  if (!fname)                  { alert('Please enter your first name.'); return; }
  if (!phone)                  { alert('Please enter your phone number.'); return; }

  const submitBtn = form.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  const formData = new FormData(form);

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Thank you! Your request has been submitted. A specialist will contact you shortly.');
      form.reset();
      document.getElementById('msgModal').classList.remove('open');
      document.body.style.overflow = '';
    } else {
      alert('Submission failed: ' + (data.message || 'Unknown error'));
    }
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  })
  .catch(error => {
    console.error('Web3Forms error:', error);
    alert('Submission failed. Please try again or call us directly.');
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  });
}

function buildLogoGrid(svc) {
  const filtered = ALL_PROVIDERS.filter(p => p.services.includes(svc));
  const grid = document.getElementById('logo-grid');
  grid.innerHTML = '';

  filtered.forEach(p => {
    const tile = document.createElement('div');
    tile.className = 'logo-tile';
    tile.innerHTML = p.logoSVG;
    tile.title = p.name;
    tile.onclick = () => handleProviderClick(p);
    grid.appendChild(tile);
  });
}

function handleProviderClick(provider) {
  if (provider.link) {
    window.open(provider.link, '_blank', 'noopener');
  } else {
    document.getElementById('gn-avail').textContent = provider.avail;
    showStep('step-goodnews');
  }
}

function showStep(id) {
  ['step-form', 'step-providers', 'step-goodnews'].forEach(s => {
    document.getElementById(s).style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
  document.querySelector('.intake-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function goBack(target) {
  showStep(target);
}

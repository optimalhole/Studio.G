(() => {
  const preloader = document.querySelector('.preloader');
  if (preloader) window.addEventListener('load', () => setTimeout(() => preloader.classList.add('done'), 700));
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.classList.toggle('open', open); toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); document.body.style.overflow = open ? 'hidden' : ''; });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); toggle.classList.remove('open'); document.body.style.overflow = ''; }));
  }
  const cursor = document.querySelector('.cursor');
  if (cursor && matchMedia('(pointer:fine)').matches) {
    window.addEventListener('mousemove', e => { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; });
    document.querySelectorAll('a,button,input,textarea,select').forEach(el => { el.addEventListener('mouseenter', () => cursor.classList.add('active')); el.addEventListener('mouseleave', () => cursor.classList.remove('active')); });
  }
  const orbit = document.querySelector('.orbit');
  if (orbit) {
    let rotation = 0, dragging = false, startX = 0, startRotation = 0;
    const cards = [...orbit.querySelectorAll('.orbit-card')];
    const update = () => { orbit.style.animation = 'none'; orbit.style.transform = `rotate(${rotation}deg)`; orbit.querySelector('.orbit-core').style.transform = `rotate(${-rotation}deg)`; cards.forEach((card, i) => card.style.transform = `rotate(${[-9,9,-6,9,-8][i]}deg)`); };
    const step = amount => { rotation += amount; update(); };
    document.querySelector('.orbit-next')?.addEventListener('click', () => step(-72));
    document.querySelector('.orbit-prev')?.addEventListener('click', () => step(72));
    orbit.addEventListener('pointerdown', e => { dragging = true; startX = e.clientX; startRotation = rotation; orbit.setPointerCapture(e.pointerId); orbit.style.cursor = 'grabbing'; });
    orbit.addEventListener('pointermove', e => { if (!dragging) return; rotation = startRotation + (e.clientX - startX) * .35; update(); });
    orbit.addEventListener('pointerup', () => { dragging = false; orbit.style.cursor = ''; });
    orbit.addEventListener('pointercancel', () => { dragging = false; orbit.style.cursor = ''; });
  }
  document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === btn));
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-tile').forEach(tile => { tile.hidden = filter !== 'all' && tile.dataset.category !== filter; });
  }));
  const form = document.querySelector('#project-form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name'), email = data.get('email'), company = data.get('company') || 'Not specified', service = data.get('service'), details = data.get('details');
    const subject = encodeURIComponent(`Studio.G project enquiry — ${service}`);
    const body = encodeURIComponent(`Hi Studio.G,\n\nI'd like to discuss a project.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nProject type: ${service}\n\nProject details:\n${details}\n\nThanks,\n${name}`);
    const status = form.querySelector('.form-status');
    status.textContent = 'Your email draft is ready. Update the placeholder studio email in contact.html before publishing; your email app will open now.';
    window.location.href = `mailto:hello@studio-g.example?subject=${subject}&body=${body}`;
  });
  const revealTargets = document.querySelectorAll('.section-label,.manifesto,.project-tile,.service-list>a,.service-detail-list article,.process-grid article');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), {threshold:.12});
    revealTargets.forEach(el => { el.classList.add('reveal-ready'); observer.observe(el); });
  }
})();

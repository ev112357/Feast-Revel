(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // slideshow
  const gallery = $('.gallery');
  if (gallery) {
    const track = $('.gallery__track', gallery);
    const slides = $$('.slide', track);
    const playBtn = $('[data-play]', gallery);
    const DELAY = 5000;
    let index = 0;
    let paused = reduceMotion; // the visitor's choice
    let held = false; // mouse over it, keyboard focus in it, or a finger on it
    let inView = true;
    let timer = 0;

    const dots = slides.map((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'dot';
      b.setAttribute('aria-label', `Show photo ${i + 1} of ${slides.length}`);
      b.addEventListener('click', () => pick(i));
      $('.dots', gallery).append(b);
      return b;
    });

    const mark = () => dots.forEach((d, i) => d.setAttribute('aria-current', String(i === index)));

    function go(i, instant) {
      index = (i + slides.length) % slides.length;
      track.scrollTo({ left: index * track.clientWidth, behavior: instant || reduceMotion ? 'auto' : 'smooth' });
      mark();
    }

    function sync() {
      clearInterval(timer);
      const running = !paused && !held && inView && !document.hidden;
      if (running) timer = setInterval(() => go(index + 1, index === slides.length - 1), DELAY);
      track.setAttribute('aria-live', running ? 'off' : 'polite');
      playBtn.textContent = paused ? 'Play' : 'Pause';
      playBtn.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
    }

    // a click restarts the countdown so it does not jump right after
    function pick(i) {
      go(i);
      sync();
    }

    let raf = 0;
    track.addEventListener('scroll', () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        if (i !== index) { index = i; mark(); }
      });
    }, { passive: true });

    $('[data-prev]', gallery).addEventListener('click', () => pick(index - 1));
    $('[data-next]', gallery).addEventListener('click', () => pick(index + 1));
    playBtn.addEventListener('click', () => { paused = !paused; sync(); });

    gallery.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { held = true; sync(); } });
    gallery.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { held = false; sync(); } });
    gallery.addEventListener('focusin', (e) => { held = e.target.matches(':focus-visible'); sync(); });
    gallery.addEventListener('focusout', () => { held = false; sync(); });
    track.addEventListener('touchstart', () => { held = true; sync(); }, { passive: true });
    ['touchend', 'touchcancel'].forEach((t) => track.addEventListener(t, () => { held = false; sync(); }, { passive: true }));

    new IntersectionObserver(([e]) => { inView = e.isIntersecting; sync(); }).observe(gallery);
    document.addEventListener('visibilitychange', sync);
    addEventListener('resize', () => go(index, true));

    mark();
    sync();
  }

  // today's row in the hours table
  const today = $(`.hours tr[data-day="${new Date().getDay()}"]`);
  if (today) {
    today.classList.add('is-today');
    today.setAttribute('aria-current', 'date');
  }

  // mailing list box (mock-up: the email is not saved or sent anywhere)
  const subscribe = $('.subscribe__form');
  if (subscribe) {
    subscribe.addEventListener('submit', (e) => {
      e.preventDefault();
      subscribe.reset();
      const note = $('.subscribe__note');
      note.textContent = 'Thanks! This is a mock-up, so your email was not saved.';
      note.hidden = false;
    });
  }
})();

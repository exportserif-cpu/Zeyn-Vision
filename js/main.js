/* ==========================================================================
   ZeynVision — Core Engine
   i18n (AR/EN/TR) · Theme · Canvas · Terminal · Interactions
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------- i18n Dictionary ---------------- */
  const I18N = window.ZV_I18N;
  /* ---------------- State ---------------- */
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  let currentLang = localStorage.getItem("zv-lang") || "ar";

  /* ---------------- i18n Engine ---------------- */
  function applyLang(lang, { persist = true } = {}) {
    currentLang = lang;
    const dict = I18N[lang] || I18N.ar;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const val = key.split(".").reduce((o, k) => (o ? o[k] : undefined), dict);
      if (val !== undefined) el.textContent = val;
    });
    $$("[data-i18n-ph]").forEach((el) => {
      const key = el.dataset.i18nPh;
      const val = key.split(".").reduce((o, k) => (o ? o[k] : undefined), dict);
      if (val !== undefined) el.placeholder = val;
    });

    // Article reader: show matching language block, fall back to AR when absent
    $$(".article-lang").forEach((el) => {
      const modal = el.closest(".modal");
      const hasLang = modal && modal.querySelector('.article-lang[data-lang="' + lang + '"]');
      el.hidden = el.dataset.lang !== (hasLang ? lang : "ar");
    });

    $$(".lang-btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    document.title = lang === "ar"
      ? "ZeynVision — حيث تقابل الرؤية الذكاء"
      : lang === "tr"
        ? "ZeynVision — Vizyonun Zekâyla Buluştuğu Yer"
        : "ZeynVision — Where Vision Meets Intelligence";
    if (persist) localStorage.setItem("zv-lang", lang);
    refreshEstimate();
  }

  // Language switcher — click handlers
  $$(".lang-btn").forEach((btn) =>
    btn.addEventListener("click", () => applyLang(btn.dataset.lang))
  );

  /* ---------------- Theme ---------------- */
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("zv-theme", theme);
  }
  const savedTheme = localStorage.getItem("zv-theme") || "dark";
  applyTheme(savedTheme);

  $("#theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  /* ---------------- Background Canvas (data streams) ---------------- */
  const canvas = $("#bg-canvas");
  const ctx = canvas.getContext("2d");
  let W, H, nodes = [], mouse = { x: -9999, y: -9999 }, rafId = null;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  function seedNodes() {
    const count = Math.min(70, Math.floor((W * H) / 22000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6,
      cyan: Math.random() < 0.14 // bright cyan accent particles
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const dark = document.documentElement.dataset.theme === "dark";
    const base = dark ? "255,255,255" : "10,30,63";
    const linkDist = 130;

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx; n.y += n.vy;
      if (n.x < -20) n.x = W + 20; if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20; if (n.y > H + 20) n.y = -20;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.cyan
        ? `rgba(0, 212, 255, ${dark ? 0.6 : 0.55})`
        : `rgba(${base},${dark ? 0.28 : 0.35})`;
      ctx.fill();

      for (let j = i + 1; j < nodes.length; j++) {
        const m = nodes[j];
        const dx = n.x - m.x, dy = n.y - m.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < linkDist * linkDist) {
          const a = (1 - Math.sqrt(d2) / linkDist) * (dark ? 0.09 : 0.12);
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = `rgba(${base},${a})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      const mdx = n.x - mouse.x, mdy = n.y - mouse.y;
      const md2 = mdx * mdx + mdy * mdy;
      if (md2 < 190 * 190) {
        const a = (1 - Math.sqrt(md2) / 190) * 0.55;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(0,229,255,${a})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    rafId = requestAnimationFrame(draw);
  }

  function initCanvas() {
    resizeCanvas();
    seedNodes();
    if (!reducedMotion && rafId === null) draw();
  }
  window.addEventListener("resize", () => { resizeCanvas(); seedNodes(); });
  window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("mouseout", () => { mouse.x = -9999; mouse.y = -9999; });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }
    else if (!reducedMotion && rafId === null) draw();
  });

  /* ---------------- Hero logo glow (mouse parallax) ---------------- */
  const glow = $("#hero-glow");
  let gx = 0, gy = 0, tx = 0, ty = 0;
  window.addEventListener("mousemove", (e) => {
    const r = glow.getBoundingClientRect();
    tx = (e.clientX - (r.left + r.width / 2)) * 0.08;
    ty = (e.clientY - (r.top + r.height / 2)) * 0.08;
  });
  (function glowLoop() {
    gx += (tx - gx) * 0.08;
    gy += (ty - gy) * 0.08;
    glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
    requestAnimationFrame(glowLoop);
  })();

  /* ---------------- Terminal typing ---------------- */
  const CODE_LINES = [
    ['tk-cm', '// ZeynVision — vision-core'],
    ['tk-kw', 'const '], ['tk-pn', 'vision = '], ['tk-kw', 'new '], ['tk-fn', 'Engine'], ['tk-pn', '({'],
    ['tk-pn', '  core: '], ['tk-str', '"smart"'], ['tk-pn', ', data: '], ['tk-str', '"live"'],
    ['tk-pn', '  design: '], ['tk-str', '"minimal"'], ['tk-pn', ', scale: '], ['tk-num', '1e6'],
    ['tk-pn', '});'],
    ['tk-pn', ''],
    ['tk-kw', 'await '], ['tk-fn', 'vision'], ['tk-pn', '.'], ['tk-fn', 'deploy'], ['tk-pn', '();'],
    ['tk-cm', '// latency: 38ms · uptime: 99.99%'],
    ['tk-pn', ''],
    ['tk-pn', '▶ '], ['tk-str', '"Where Vision Meets Intelligence"'], ['tk-pn', ' ✓']
  ];
  const termBody = $("#terminal-body");
  const termCode = $("#terminal-body code");

  function typeTerminal() {
    termCode.innerHTML = "";
    // render progressively: append per-line segments, cursor stays at end
    const cursor = termBody.querySelector(".cursor");
    function renderLines(idx) {
      if (idx >= CODE_LINES.length) { setTimeout(() => typeTerminal(), 4200); return; }
      const [cls, txt] = CODE_LINES[idx];
      const seg = document.createElement("span");
      seg.className = cls;
      seg.textContent = txt;
      termCode.appendChild(seg);
      cursor.remove();
      termBody.appendChild(cursor);
      setTimeout(() => renderLines(idx + 1), cls === "tk-cm" ? 160 : 120);
    }
    renderLines(0);
  }

  /* ---------------- Live chart ---------------- */
  const chart = $("#live-chart");
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        $$(".bar", chart).forEach((b, i) => setTimeout(() => b.classList.add("animated"), i * 90));
        chartObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  chartObserver.observe(chart);

  /* ---------------- Estimator ---------------- */
  const PRICING = {
    web:      { small: [150, 1000],   medium: [1000, 2500],  large: [3000, 9000] },
    software: { small: [500, 2500],   medium: [2500, 8000],  large: [8000, 20000] },
    data:     { small: [200, 500],    medium: [500, 1000],   large: [1000, 3500] },
    ai:       { small: [100, 1000],   medium: [1100, 2000],  large: [2000, 4000] },
    design:   { small: [200, 500],    medium: [500, 1000],   large: [1000, 3500] }
  };
  const estService = $("#est-service");
  const estScope = $("#est-scope");
  const estRange = $("#est-range");

  function refreshEstimate() {
    const [lo, hi] = PRICING[estService.value][estScope.value];
    estRange.textContent = "$" + lo.toLocaleString("en-US") + " – $" + hi.toLocaleString("en-US");
  }
  estService.addEventListener("change", refreshEstimate);
  estScope.addEventListener("change", refreshEstimate);

  /* ---------------- Portfolio filters ---------------- */
  const filterBtns = $$(".filter-btn");
  const workCards = $$(".work-card");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      workCards.forEach((card) => {
        const show = f === "all" || card.dataset.cat === f;
        card.classList.toggle("hidden", !show);
      });
    });
  });

  /* ---------------- Counters ---------------- */
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const t0 = performance.now();
    function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        $$(".stat-num").forEach(animateCounter);
        statsObs.disconnect();
      }
    });
  }, { threshold: 0.35 });
  statsObs.observe($("#stats"));

  /* ---------------- Reveal on scroll ---------------- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        revealObs.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => revealObs.observe(el));

  /* ---------------- Navbar / menu / scrollspy ---------------- */
  const nav = $("#navbar");
  const menuToggle = $("#menu-toggle");
  const navLinks = $("#nav-links");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 24));
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  $$(".nav-link").forEach((l) => l.addEventListener("click", () => navLinks.classList.remove("open")));

  const spyObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        $$(".nav-link").forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  ["home", "about", "services", "work", "insights", "contact"].forEach((id) => {
    const sec = document.getElementById(id);
    if (sec) spyObs.observe(sec);
  });

  /* ---------------- Modals ---------------- */
  function openModal(m) { m.classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeModal(m) { m.classList.remove("open"); document.body.style.overflow = ""; }
  $$(".modal").forEach((m) => {
    $$("[data-close]", m).forEach((el) => el.addEventListener("click", () => closeModal(m)));
    m.addEventListener("click", (e) => { if (e.target === m) closeModal(m); });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") $$(".modal.open").forEach(closeModal);
  });

  $("#open-consult").addEventListener("click", () => openModal($("#consult-modal")));

  // Article reader: any blog card with data-article opens its matching modal
  $$(".insight-card[data-article]").forEach((card) => {
    card.addEventListener("click", () => openModal($("#article-modal-" + card.dataset.article)));
  });
  $(".nav-cta").addEventListener("click", (e) => { e.preventDefault(); openModal($("#consult-modal")); });

  // date min = today
  const qDate = $("#q-date");
  qDate.min = new Date().toISOString().split("T")[0];

  // time slots
  $$("#time-slots .slot").forEach((s) => s.addEventListener("click", () => {
    $$("#time-slots .slot").forEach((x) => x.classList.remove("active"));
    s.classList.add("active");
  }));

  // forms (simulated submit)
  function wireForm(formId, okId) {
    const form = $("#" + formId);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      form.reset();
      $("#" + okId).hidden = false;
      setTimeout(() => { $("#" + okId).hidden = true; }, 5000);
      if (formId === "quote-form") setTimeout(() => closeModal($("#quote-modal")), 1400);
      if (formId === "consult-form") setTimeout(() => closeModal($("#consult-modal")), 1400);
    });
  }
  wireForm("contact-form", "form-ok");
  wireForm("consult-form", "consult-ok");
  wireForm("quote-form", "quote-ok");

  /* ---------------- Exit-intent quick quote ---------------- */
  const quoteModal = $("#quote-modal");
  let exitShown = false;
  const shownAt = Date.now();
  document.addEventListener("mouseout", (e) => {
    if (exitShown) return;
    if (Date.now() - shownAt < 6000) return;
    if (!e.relatedTarget && e.clientY <= 8) {
      exitShown = true;
      openModal(quoteModal);
    }
  });

  /* ---------------- Legal modal tabs ---------------- */
  const legalModal = $("#legal-modal");
  const legalContent = $("#legal-content");
  const LEGAL_COPY = {
    privacy: ["legal.p1", "legal.p2"],
    terms: ["legal.p1", "legal.p2"],
    cookies: ["legal.p3"]
  };
  $$(".legal-link").forEach((l) => l.addEventListener("click", (e) => {
    e.preventDefault();
    openLegal(l.dataset.legal);
  }));
  $$(".legal-tab").forEach((t) => t.addEventListener("click", () => openLegal(t.dataset.tab)));

  function openLegal(tab) {
    $$(".legal-tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === tab));
    legalContent.innerHTML = "";
    const dict = I18N[currentLang] || I18N.ar;
    LEGAL_COPY[tab].forEach((key) => {
      const val = key.split(".").reduce((o, k) => (o ? o[k] : undefined), dict);
      if (val) {
        const p = document.createElement("p");
        p.textContent = val;
        legalContent.appendChild(p);
      }
    });
    openModal(legalModal);
  }

  /* ---------------- Cookie banner ---------------- */
  const cookieBanner = $("#cookie-banner");
  let cookieShown = false;
  function showCookie() {
    if (!localStorage.getItem("zv-cookie") && !cookieShown) {
      cookieShown = true;
      cookieBanner.classList.add("show");
    }
  }
  // Show only after the visitor interacts (scroll) — keeps the hero clean on load
  window.addEventListener("scroll", () => { if (window.scrollY > 80) showCookie(); }, { passive: true });
  setTimeout(() => { if (window.scrollY > 80) showCookie(); }, 3000);
  $("#cookie-accept").addEventListener("click", () => {
    localStorage.setItem("zv-cookie", "accepted");
    cookieBanner.classList.remove("show");
  });
  $("#cookie-reject").addEventListener("click", () => {
    localStorage.setItem("zv-cookie", "rejected");
    cookieBanner.classList.remove("show");
  });

  /* ---------------- Init ---------------- */
  initCanvas();
  applyLang(currentLang);
  refreshEstimate();
  setTimeout(typeTerminal, 500);
})();

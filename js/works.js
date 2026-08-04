/* ==========================================================================
   ZeynVision — Works Page Engine
   i18n (AR/EN/TR) · Theme · Filters · Modals
   ========================================================================== */
(function () {
  "use strict";

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  let currentLang = localStorage.getItem("zv-lang") || "ar";

  /* ---------------- i18n Engine (shared dict) ---------------- */
  function applyLang(lang, { persist = true } = {}) {
    currentLang = lang;
    const dict = (window.ZV_I18N && ZV_I18N[lang]) || ZV_I18N.ar;
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

    $$(".lang-btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    document.title = lang === "ar"
      ? "ZeynVision — أعمالنا ودراسات الحالة"
      : lang === "tr"
        ? "ZeynVision — İşlerimiz ve Vaka Çalışmaları"
        : "ZeynVision — Our Work & Case Studies";
    if (persist) localStorage.setItem("zv-lang", lang);
  }

  $$(".lang-btn").forEach((btn) =>
    btn.addEventListener("click", () => applyLang(btn.dataset.lang))
  );

  /* ---------------- Theme ---------------- */
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("zv-theme", theme);
  }
  applyTheme(localStorage.getItem("zv-theme") || "dark");
  $("#theme-toggle").addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });

  /* ---------------- Navbar / mobile menu / scrollspy ---------------- */
  const nav = $("#navbar");
  const menuToggle = $("#menu-toggle");
  const navLinks = $("#nav-links");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 24));
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  $$(".nav-link").forEach((l) => l.addEventListener("click", () => navLinks.classList.remove("open")));
  // mark active nav link for the current page
  $$(".nav-link").forEach((l) => {
    if (l.getAttribute("href") === "works.html") l.classList.add("active");
  });

  /* ---------------- Filters ---------------- */
  const filterBtns = $$(".filter-btn");
  const cards = $$(".case-card");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      cards.forEach((card) => {
        const show = f === "all" || card.dataset.cat === f;
        card.classList.toggle("hidden", !show);
      });
    });
  });

  /* ---------------- Reveal on scroll ---------------- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        revealObs.unobserve(en.target);
      }
    });
  }, { threshold: 0.1 });
  $$(".reveal").forEach((el) => revealObs.observe(el));

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
  if ($("#open-consult")) {
    $("#open-consult").addEventListener("click", () => openModal($("#consult-modal")));
  }
  $$(".nav-cta").forEach((el) =>
    el.addEventListener("click", (e) => { e.preventDefault(); openModal($("#consult-modal")); })
  );

  // date min = today
  const qDate = $("#q-date");
  if (qDate) qDate.min = new Date().toISOString().split("T")[0];
  $$("#time-slots .slot").forEach((s) => s.addEventListener("click", () => {
    $$("#time-slots .slot").forEach((x) => x.classList.remove("active"));
    s.classList.add("active");
  }));

  // forms (simulated submit)
  function wireForm(formId, okId) {
    const form = $("#" + formId);
    if (!form) return;
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
  function openLegal(tab) {
    $$(".legal-tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === tab));
    legalContent.innerHTML = "";
    const dict = ZV_I18N[currentLang] || ZV_I18N.ar;
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
  $$(".legal-link").forEach((l) => l.addEventListener("click", (e) => {
    e.preventDefault();
    openLegal(l.dataset.legal);
  }));
  $$(".legal-tab").forEach((t) => t.addEventListener("click", () => openLegal(t.dataset.tab)));

  /* ---------------- Cookie banner ---------------- */
  const cookieBanner = $("#cookie-banner");
  let cookieShown = false;
  function showCookie() {
    if (!localStorage.getItem("zv-cookie") && !cookieShown) {
      cookieShown = true;
      cookieBanner.classList.add("show");
    }
  }
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
  applyLang(currentLang);
})();

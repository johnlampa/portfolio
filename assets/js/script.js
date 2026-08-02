"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const formStatus = document.querySelector("[data-form-status]");
const formBtnLabel = formBtn ? formBtn.querySelector("span") : null;

const setFormStatus = function (message, state) {
  if (!formStatus) return;

  formStatus.hidden = !message;
  formStatus.textContent = message || "";
  formStatus.classList.remove("is-success", "is-error");

  if (state) formStatus.classList.add(state);
};

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

if (form) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!form.checkValidity()) return;

    const previousLabel = formBtnLabel ? formBtnLabel.textContent : "";
    formBtn.setAttribute("disabled", "");
    if (formBtnLabel) formBtnLabel.textContent = "Sending...";
    setFormStatus("", "");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Request failed");

      form.reset();
      setFormStatus(
        "Message sent. Thanks - I'll get back to you soon.",
        "is-success",
      );
    } catch (error) {
      setFormStatus(
        "Couldn't send right now. Email me at jklampa31@gmail.com instead.",
        "is-error",
      );
      formBtn.removeAttribute("disabled");
    } finally {
      if (formBtnLabel)
        formBtnLabel.textContent = previousLabel || "Send Message";
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

const navigateToPage = function (pageName) {
  const target = pageName.toLowerCase();

  for (let i = 0; i < pages.length; i++) {
    const isMatch = pages[i].dataset.page === target;
    pages[i].classList.toggle("active", isMatch);
    navigationLinks[i].classList.toggle("active", isMatch);
  }

  window.scrollTo(0, 0);
};

document.querySelectorAll("[data-contact-nav]").forEach(function (trigger) {
  trigger.addEventListener("click", function () {
    navigateToPage(trigger.getAttribute("data-contact-nav") || "contact");
  });
});

/* Project detail modal */

const projects = {
  smartbutton: {
    title: "SmartButton",
    category: "Mobile & TV app",
    role: "Software Developer",
    year: "2026",
    type: "Application",
    client: "Osysoft",
    description:
      "Built an end-to-end video calling product for seniors and families: Android TV and mobile apps, a Kotlin/Ktor API with phone OTP auth and server-issued Agora tokens, and an ESP32 SmartButton that lets users place calls with one tap. Covers contacts, multi-device sessions, push notifications, and leanback-friendly TV UX.",
    tech: [
      "Kotlin",
      "Android",
      "Android TV",
      "Ktor",
      "PostgreSQL",
      "Agora RTC",
      "Twilio",
      "Firebase",
      "ESP32",
    ],
    images: [
      "./smartbutton/cover.png",
      "./smartbutton/7.png",
      "./smartbutton/1.png",
      "./smartbutton/2.png",
      "./smartbutton/3.png",
      "./smartbutton/4.png",
      "./smartbutton/6.png",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/johnlampa/SmartButton",
  },
  pophash: {
    title: "POP-HASH",
    category: "E-commerce / Streetwear",
    role: "Software Developer",
    year: "2026",
    type: "Web app",
    client: "Osysoft",
    description:
      "Full-stack e-commerce storefront for the POP-HASH streetwear brand. Built a Vue 3 + Vite shop experience with artist collections, cart, and checkout, backed by a FastAPI API that syncs the Shopify catalog and processes payments via YaadPay. Includes cookie consent (Consent Mode v2), analytics, accessibility controls, and Docker-based local/deploy setup.",
    tech: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Pinia",
      "SCSS",
      "FastAPI",
      "Shopify",
      "YaadPay",
      "MySQL",
      "Docker",
    ],
    images: [
      "./pop-hash/cover.png",
      "./pop-hash/6.png",
      "./pop-hash/Screenshot 2026-07-31 at 16.53.18.png",
      "./pop-hash/Screenshot 2026-07-31 at 16.59.03.png",
      "./pop-hash/Screenshot 2026-07-31 at 17.01.22.png",
    ],
    liveUrl: "https://pop-hash.com",
    repoUrl: "https://github.com/johnlampa/pop-hash",
  },
  omebiz: {
    title: "OmeBiz",
    category: "Video networking",
    role: "Software Developer",
    year: "2026",
    type: "Web App",
    client: "Osysoft",
    description:
      "OmeBiz.tv is an Ome.tv-style video networking app for entrepreneurs. Users match into live 1:1 calls with LinkedIn/questionnaire identity, real-time chat, NDA flows, and consented recording — built with Next.js, Socket.IO, Agora, and Prisma.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
      "Agora RTC",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    images: [
      "./omebiz/cover.png",
      "./omebiz/8.png",
      "./omebiz/1.png",
      "./omebiz/3.png",
      "./omebiz/4.png",
    ],
    liveUrl: "https://omebiz.vercel.app",
    repoUrl: "https://github.com/johnlampa/omebiz",
  },
  geolocator: {
    title: "Geo Locator",
    category: "IP geolocation app",
    role: "Software Developer",
    year: "2026",
    type: "Web app",
    description:
      "Full-stack IP geolocation app with login, IPv4 lookup, saved search history, and a Leaflet map pin for city, region, and coordinates. React/Vite frontend with an Express and SQLite auth API.",
    tech: ["React", "Vite", "Leaflet", "Express", "SQLite"],
    images: ["./geo-locator/cover.png", "./geo-locator/4.png"],
    liveUrl: "",
    repoUrl: "https://github.com/johnlampa/ip-geo-web",
  },
  fitpal: {
    title: "Fit Pal",
    category: "WordPress theme",
    role: "Software Developer",
    year: "2026",
    type: "WordPress",
    description:
      "Fit Pal is a custom WordPress Full Site Editing theme for budget-friendly Pinoy fitness meal prep. It pairs a native Gutenberg block theme with a dependency-free vanilla JavaScript meal planner: users pick a 1–4 week grocery span, swap proteins to stay on macros, filter prep to a batch-cooking window, and get a categorized shopping list that totals itself.",
    tech: ["WordPress", "PHP", "JavaScript", "CSS", "theme.json"],
    images: [
      "./fit-pal/cover.png",
      "./fit-pal/Untitled design.png",
      "./fit-pal/Screenshot 2026-07-30 at 6.54.41 PM.png",
      "./fit-pal/Screenshot 2026-07-30 at 7.46.03 PM.png",
      "./fit-pal/Screenshot 2026-07-30 at 7.51.10 PM.png",
      "./fit-pal/Screenshot 2026-07-30 at 7.51.17 PM.png",
      "./fit-pal/Screenshot 2026-07-30 at 7.51.24 PM.png",
    ],
    liveUrl: "https://john-lampa.site.je",
    repoUrl: "https://github.com/johnlampa/fit-pal",
  },
  shoparoo: {
    title: "Shoparoo",
    category: "E-commerce website",
    role: "Software Developer",
    year: "2026",
    type: "Web app",
    description:
      "Shoparoo is a full-stack e-commerce platform featuring product discovery, guest and account-based carts, Stripe checkout, order management, and a Vue-powered admin dashboard for managing products, customers, and reports.",
    tech: [
      "Laravel",
      "Vue",
      "PHP",
      "PostgreSQL",
      "Stripe",
      "REST API",
      "Tailwind CSS",
    ],
    images: [
      "./shoparoo/cover.png",
      "./shoparoo/Untitled design (1).png",
      "./shoparoo/Screenshot 2026-07-30 at 6.51.22 PM.png",
      "./shoparoo/Screenshot 2026-07-30 at 6.52.28 PM.png",
      "./shoparoo/Screenshot 2026-07-30 at 6.52.34 PM.png",
    ],
    liveUrl: "https://shoparoo.onrender.com",
    repoUrl: "https://github.com/johnlampa/shoparoo",
  },
  productstore: {
    title: "Product Store",
    category: "E-commerce Website",
    role: "Software Developer",
    year: "2026",
    type: "Web app",
    description:
      "Full-stack PERN e-commerce demo with local inventory CRUD in Neon Postgres and a headless Shopify storefront for live catalog, cart, and hosted checkout. Express proxies the Shopify Storefront and Admin APIs, with product sync, HMAC-verified webhooks, and Arcjet rate limiting on the backend.",
    tech: [
      "React",
      "Express",
      "Node",
      "Neon Postgres",
      "Shopify Storefront API",
      "Shopify Admin API",
      "REST API",
    ],
    images: [
      "./product-store/cover.png",
      "./product-store/5.png",
      "./product-store/Screenshot 2026-07-31 at 02.26.26.png",
      "./product-store/Screenshot 2026-07-31 at 02.26.50.png",
      "./product-store/Screenshot 2026-07-31 at 02.27.19.png",
    ],
    liveUrl: "https://product-store-3r9t.onrender.com/",
    repoUrl: "https://github.com/johnlampa/product_store",
  },
  ultrack: {
    title: "Ultrack",
    category: "Personal finance app",
    role: "Software Developer",
    year: "2026",
    type: "Application",
    description:
      "Ultrack is a personal money tracker I built end to end — Expo for iOS/Android, Next.js for the web and API, and a shared domain layer so both clients stay in sync. It works offline first, then syncs accounts, transactions, goals, and recurring items to the cloud when you’re back online. I designed it for day-to-day money across accounts and pockets, not just a simple expense list.",
    tech: [
      "Expo",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Offline Sync",
      "Charts",
    ],
    images: [
      "./ultrack/cover.png",
      "./ultrack/Untitled design.png",
      "./ultrack/Screenshot 2026-07-31 at 02.21.00.png",
      "./ultrack/Screenshot 2026-07-31 at 02.21.21.png",
      "./ultrack/Screenshot 2026-07-31 at 02.21.28.png",
      "./ultrack/Screenshot 2026-07-31 at 02.21.36.png",
    ],
    liveUrl: "https://ultrack-app.vercel.app",
    repoUrl: "https://github.com/johnlampa/ultrack",
  },
};

const projectModal = document.querySelector("[data-project-modal]");
const projectOverlay = document.querySelector("[data-project-overlay]");
const projectCloseBtn = document.querySelector("[data-project-close]");
const projectHero = document.querySelector("[data-project-hero]");
const projectThumbs = document.querySelector("[data-project-thumbs]");
const projectThumbsWrap = document.querySelector("[data-project-thumbs-wrap]");
const projectThumbsScroller = document.querySelector(
  "[data-project-thumbs-scroller]",
);
const thumbsPrevBtn = document.querySelector("[data-thumbs-prev]");
const thumbsNextBtn = document.querySelector("[data-thumbs-next]");
const projectTitle = document.querySelector("[data-project-title]");
const projectMeta = document.querySelector("[data-project-meta]");
const projectDescription = document.querySelector("[data-project-description]");
const projectTech = document.querySelector("[data-project-tech]");
const projectActions = document.querySelector("[data-project-actions]");
const projectZoomBtn = document.querySelector("[data-project-zoom]");
const projectStage = document.querySelector("[data-project-stage]");
const projectLightbox = document.querySelector("[data-project-lightbox]");
const lightboxImg = document.querySelector("[data-lightbox-img]");
const lightboxCloseBtn = document.querySelector("[data-lightbox-close]");
const projectTriggers = document.querySelectorAll("[data-project-trigger]");

let activeProjectImage = "";
let activeProjectImages = [];
let activeProjectAlt = "";
let activeImageIndex = 0;

const updateThumbsScrollState = function () {
  if (!projectThumbs || !projectThumbsScroller) return;

  const maxScroll = projectThumbs.scrollWidth - projectThumbs.clientWidth;
  const left = projectThumbs.scrollLeft;
  const canLeft = left > 2;
  const canRight = left < maxScroll - 2;

  projectThumbsScroller.classList.toggle("can-scroll-left", canLeft);
  projectThumbsScroller.classList.toggle("can-scroll-right", canRight);
};

const updateCarouselNavState = function () {
  const atStart = activeImageIndex <= 0;
  const atEnd = activeImageIndex >= activeProjectImages.length - 1;

  if (thumbsPrevBtn)
    thumbsPrevBtn.disabled = atStart || activeProjectImages.length < 2;
  if (thumbsNextBtn)
    thumbsNextBtn.disabled = atEnd || activeProjectImages.length < 2;

  updateThumbsScrollState();
};

const setProjectImage = function (src, alt) {
  activeProjectImage = src;
  projectHero.src = src;
  projectHero.alt = alt;
};

const setProjectImageByIndex = function (index) {
  if (!activeProjectImages.length) return;

  const next = Math.max(0, Math.min(index, activeProjectImages.length - 1));
  activeImageIndex = next;
  setProjectImage(activeProjectImages[next], activeProjectAlt);

  const thumbButtons = projectThumbs.querySelectorAll(".project-thumb");
  thumbButtons.forEach(function (thumb, i) {
    thumb.classList.toggle("active", i === next);
  });

  const activeThumb = thumbButtons[next];
  if (activeThumb) {
    activeThumb.scrollIntoView({
      inline: "nearest",
      block: "nearest",
      behavior: "smooth",
    });
  }

  updateCarouselNavState();
};

const openProjectModal = function (projectId) {
  const project = projects[projectId];
  if (!project || !projectModal) return;

  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;

  projectMeta.innerHTML = `
    <li class="project-meta-item">
      <span class="project-meta-label">Year</span>
      <span class="project-meta-value">${project.year}</span>
    </li>
    <li class="project-meta-item">
      <span class="project-meta-label">Type</span>
      <span class="project-meta-value">${project.type}</span>
    </li>
    ${
      project.client
        ? `<li class="project-meta-item">
      <span class="project-meta-label">Client</span>
      <span class="project-meta-value">${project.client}</span>
    </li>`
        : ""
    }
  `;

  projectTech.innerHTML = project.tech
    .map((item) => `<li data-glow>${item}</li>`)
    .join("");

  const actions = [];

  if (project.liveUrl) {
    actions.push(`
      <a href="${project.liveUrl}" class="form-btn" data-glow target="_blank" rel="noopener noreferrer">
        <ion-icon name="open-outline"></ion-icon>
        <span>Live site</span>
      </a>
    `);
  }

  if (project.repoUrl) {
    actions.push(`
      <a href="${project.repoUrl}" class="form-btn is-ghost" data-glow target="_blank" rel="noopener noreferrer">
        <ion-icon name="logo-github"></ion-icon>
        <span>GitHub</span>
      </a>
    `);
  }

  if (!actions.length) {
    actions.push(`
      <button class="form-btn is-ghost" data-glow type="button" disabled>
        <ion-icon name="lock-closed-outline"></ion-icon>
        <span>Private project</span>
      </button>
    `);
  }

  projectActions.innerHTML = actions.join("");
  projectTech.querySelectorAll("[data-glow]").forEach(initCardGlow);
  projectActions.querySelectorAll("[data-glow]").forEach(initCardGlow);

  activeProjectImages = project.images.slice();
  activeProjectAlt = project.title;
  activeImageIndex = 0;
  setProjectImage(project.images[0], project.title);
  renderProjectThumbs(project.images, project.title);
  updateCarouselNavState();

  projectModal.classList.add("active");
  projectOverlay.classList.add("active");
  document.body.classList.add("modal-open");

  requestAnimationFrame(function () {
    requestAnimationFrame(updateCarouselNavState);
  });
};

const closeProjectModal = function () {
  if (!projectModal) return;

  projectModal.classList.remove("active");
  projectOverlay.classList.remove("active");
  document.body.classList.remove("modal-open");
  closeLightbox();
};

const renderProjectThumbs = function (images, alt) {
  projectThumbs.innerHTML = "";

  if (images.length < 2) {
    if (projectThumbsWrap) {
      projectThumbsWrap.hidden = true;
      projectThumbsWrap.classList.remove("is-visible");
    }
    return;
  }

  if (projectThumbsWrap) {
    projectThumbsWrap.hidden = false;
    projectThumbsWrap.classList.add("is-visible");
  }

  images.forEach((src, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = `project-thumb${index === 0 ? " active" : ""}`;
    button.setAttribute("aria-label", `View image ${index + 1}`);
    button.innerHTML = `<img src="${src}" alt="${alt} thumbnail ${index + 1}" loading="lazy">`;

    button.addEventListener("click", function () {
      setProjectImageByIndex(index);
    });

    item.appendChild(button);
    projectThumbs.appendChild(item);
  });

  projectThumbs.scrollLeft = 0;
  requestAnimationFrame(function () {
    requestAnimationFrame(updateCarouselNavState);
  });
};

const openLightbox = function () {
  if (!activeProjectImage || !projectLightbox) return;

  lightboxImg.src = activeProjectImage;
  lightboxImg.alt = projectHero.alt;
  projectLightbox.classList.add("active");
};

const closeLightbox = function () {
  if (!projectLightbox) return;
  projectLightbox.classList.remove("active");
};

for (let i = 0; i < projectTriggers.length; i++) {
  projectTriggers[i].addEventListener("click", function (event) {
    event.preventDefault();

    const projectItem = this.closest("[data-project-id]");
    if (!projectItem) return;

    openProjectModal(projectItem.dataset.projectId);
  });
}

if (projectCloseBtn) {
  projectCloseBtn.addEventListener("click", closeProjectModal);
}

if (projectOverlay) {
  projectOverlay.addEventListener("click", closeProjectModal);
}

if (projectZoomBtn) {
  projectZoomBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    openLightbox();
  });
}

if (projectStage) {
  projectStage.addEventListener("click", openLightbox);
}

if (lightboxCloseBtn) {
  lightboxCloseBtn.addEventListener("click", closeLightbox);
}

if (projectLightbox) {
  projectLightbox.addEventListener("click", function (event) {
    if (event.target === projectLightbox) closeLightbox();
  });
}

if (thumbsPrevBtn) {
  thumbsPrevBtn.addEventListener("click", function () {
    setProjectImageByIndex(activeImageIndex - 1);
  });
}

if (thumbsNextBtn) {
  thumbsNextBtn.addEventListener("click", function () {
    setProjectImageByIndex(activeImageIndex + 1);
  });
}

if (projectThumbs) {
  projectThumbs.addEventListener("scroll", updateThumbsScrollState, {
    passive: true,
  });
}

window.addEventListener("resize", function () {
  if (projectModal && projectModal.classList.contains("active")) {
    updateCarouselNavState();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key !== "Escape") return;

  if (projectLightbox && projectLightbox.classList.contains("active")) {
    closeLightbox();
    return;
  }

  if (projectModal && projectModal.classList.contains("active")) {
    closeProjectModal();
  }
});

/* Card glow follow cursor — lights nearby elements, not only hovered ones */

const canUseCardGlow =
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Match the CSS radial glow radius so edges catch light before the cursor enters
const GLOW_PROXIMITY = 160;

const glowTargets = [];

const isPointInRect = function (x, y, rect) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
};

const distanceToRect = function (x, y, rect) {
  const dx = Math.max(rect.left - x, 0, x - rect.right);
  const dy = Math.max(rect.top - y, 0, y - rect.bottom);
  return Math.hypot(dx, dy);
};

const hideGlow = function (card) {
  card.classList.remove("is-glowing");
};

const isOverFormInput = function (formInputs, clientX, clientY) {
  for (let i = 0; i < formInputs.length; i++) {
    if (
      isPointInRect(clientX, clientY, formInputs[i].getBoundingClientRect())
    ) {
      return true;
    }
  }
  return false;
};

const syncAllGlows = function (clientX, clientY) {
  for (let i = 0; i < glowTargets.length; i++) {
    const { card, mapbox, formInputs, isArticle } = glowTargets[i];

    if (isArticle && !card.classList.contains("active")) {
      hideGlow(card);
      continue;
    }

    const cardRect = card.getBoundingClientRect();
    const dist = distanceToRect(clientX, clientY, cardRect);

    if (dist > GLOW_PROXIMITY) {
      hideGlow(card);
      continue;
    }

    if (
      mapbox &&
      isPointInRect(clientX, clientY, mapbox.getBoundingClientRect())
    ) {
      hideGlow(card);
      continue;
    }

    if (formInputs.length && isOverFormInput(formInputs, clientX, clientY)) {
      hideGlow(card);
      continue;
    }

    card.classList.add("is-glowing");
    // Allow values outside 0–100% so the glow center can sit beside the element
    const x = ((clientX - cardRect.left) / cardRect.width) * 100;
    const y = ((clientY - cardRect.top) / cardRect.height) * 100;
    card.style.setProperty("--mx", x.toFixed(2) + "%");
    card.style.setProperty("--my", y.toFixed(2) + "%");
  }
};

const initCardGlow = function (card) {
  if (!canUseCardGlow || !card || card.querySelector(":scope > .glow-spot"))
    return;

  const spot = document.createElement("span");
  spot.className = "glow-spot";
  spot.setAttribute("aria-hidden", "true");
  card.appendChild(spot);

  glowTargets.push({
    card,
    mapbox: card.querySelector("[data-mapbox]"),
    formInputs: card.querySelectorAll(".form-input, [data-form-input]"),
    isArticle: card.matches("article[data-page]"),
  });
};

if (canUseCardGlow) {
  document.addEventListener(
    "pointermove",
    function (event) {
      syncAllGlows(event.clientX, event.clientY);
    },
    { passive: true },
  );

  document.documentElement.addEventListener("pointerleave", function () {
    for (let i = 0; i < glowTargets.length; i++) {
      hideGlow(glowTargets[i].card);
    }
  });
}

document.querySelectorAll("[data-glow]").forEach(initCardGlow);

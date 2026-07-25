'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
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

}

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


/* Project detail modal */

const projects = {
  smartbutton: {
    title: "SmartButton",
    category: "Mobile & TV app",
    role: "Software Developer",
    year: "Present",
    type: "Application",
    client: "Osysoft",
    description:
      "Flutter app for mobile and smart TV. Handles remote control actions with a UI that works on both phone and TV screens.",
    tech: ["Flutter", "Dart", "TV UI", "REST API"],
    images: ["./assets/images/project-smartbutton.jpg"],
    liveUrl: "",
    repoUrl: ""
  },
  pophash: {
    title: "PopHash",
    category: "Shopping website",
    role: "Software Developer",
    year: "Present",
    type: "Web app",
    client: "Osysoft",
    description:
      "Shopping site with product browsing and responsive layouts. Built with React and connected to backend APIs.",
    tech: ["React", "JavaScript", "CSS", "API Integration"],
    images: ["./assets/images/project-pophash.png"],
    liveUrl: "",
    repoUrl: ""
  },
  omebiz: {
    title: "OmeBiz",
    category: "Website",
    role: "Software Developer",
    year: "Present",
    type: "Website",
    client: "Osysoft",
    description:
      "Business website for presenting services and contact info. Static HTML/CSS/JS with a responsive layout.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    images: ["./assets/images/project-omebiz.jpg"],
    liveUrl: "",
    repoUrl: ""
  },
  geolocator: {
    title: "Geo Locator",
    category: "Website",
    role: "Software Developer",
    year: "Present",
    type: "Web app",
    client: "Osysoft",
    description:
      "Web tool for finding and viewing places on a map, with search and geolocation support.",
    tech: ["JavaScript", "Maps API", "CSS", "Geolocation"],
    images: ["./assets/images/project-geolocator.png"],
    liveUrl: "",
    repoUrl: ""
  },
  fitpal: {
    title: "Fit-Pal",
    category: "WordPress website",
    role: "Software Developer",
    year: "Present",
    type: "WordPress",
    client: "Osysoft",
    description:
      "Fitness site on WordPress with custom theme work and mobile-friendly pages.",
    tech: ["WordPress", "PHP", "Custom Theme", "CSS"],
    images: ["./assets/images/project-fitpal.png"],
    liveUrl: "",
    repoUrl: ""
  },
  shoparoo: {
    title: "Shoparoo",
    category: "E-commerce website",
    role: "Software Developer",
    year: "Present",
    type: "E-commerce",
    client: "Osysoft",
    description:
      "E-commerce storefront with product listing, cart, and checkout. Includes filtering, search, and basic admin tools for inventory and orders.",
    tech: ["Full-stack", "JavaScript", "Node", "Database", "REST API", "Responsive UI"],
    images: ["./assets/images/project-shoparoo.png"],
    liveUrl: "https://shoparoo-production.up.railway.app",
    repoUrl: ""
  },
  productstore: {
    title: "Product Store",
    category: "Website",
    role: "Software Developer",
    year: "Present",
    type: "Web app",
    client: "Osysoft",
    description:
      "Product catalog app for listing and managing items. React frontend with a Node/MongoDB backend.",
    tech: ["React", "Node", "MongoDB", "REST API"],
    images: ["./assets/images/project-productstore.png"],
    liveUrl: "https://product-store-3r9t.onrender.com/",
    repoUrl: ""
  },
  ultrack: {
    title: "Ultrack",
    category: "Money tracker app",
    role: "Software Developer",
    year: "Present",
    type: "Application",
    client: "Osysoft",
    description:
      "Personal finance app for logging income and expenses, with simple summaries and charts.",
    tech: ["Mobile", "JavaScript", "Local Storage", "Charts"],
    images: ["./assets/images/project-ultrack.jpg"],
    liveUrl: "",
    repoUrl: ""
  }
};

const projectModal = document.querySelector("[data-project-modal]");
const projectOverlay = document.querySelector("[data-project-overlay]");
const projectCloseBtn = document.querySelector("[data-project-close]");
const projectHero = document.querySelector("[data-project-hero]");
const projectThumbs = document.querySelector("[data-project-thumbs]");
const projectThumbsWrap = document.querySelector("[data-project-thumbs-wrap]");
const projectThumbsScroller = document.querySelector("[data-project-thumbs-scroller]");
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

const updateThumbsScrollState = function () {
  if (!projectThumbs || !projectThumbsScroller) return;

  const maxScroll = projectThumbs.scrollWidth - projectThumbs.clientWidth;
  const left = projectThumbs.scrollLeft;
  const canLeft = left > 2;
  const canRight = left < maxScroll - 2;

  projectThumbsScroller.classList.toggle("can-scroll-left", canLeft);
  projectThumbsScroller.classList.toggle("can-scroll-right", canRight);

  if (thumbsPrevBtn) thumbsPrevBtn.disabled = !canLeft;
  if (thumbsNextBtn) thumbsNextBtn.disabled = !canRight;
};

const scrollThumbsBy = function (direction) {
  if (!projectThumbs) return;

  const amount = Math.max(projectThumbs.clientWidth * 0.7, 120);
  projectThumbs.scrollBy({ left: direction * amount, behavior: "smooth" });
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
    <li class="project-meta-item">
      <span class="project-meta-label">Client</span>
      <span class="project-meta-value">${project.client}</span>
    </li>
  `;

  projectTech.innerHTML = project.tech
    .map((item) => `<li>${item}</li>`)
    .join("");

  const actions = [];

  if (project.liveUrl) {
    actions.push(`
      <a href="${project.liveUrl}" class="form-btn" target="_blank" rel="noopener noreferrer">
        <ion-icon name="open-outline"></ion-icon>
        <span>Live demo</span>
      </a>
    `);
  }

  if (project.repoUrl) {
    actions.push(`
      <a href="${project.repoUrl}" class="form-btn is-ghost" target="_blank" rel="noopener noreferrer">
        <ion-icon name="logo-github"></ion-icon>
        <span>Source</span>
      </a>
    `);
  }

  if (!actions.length) {
    actions.push(`
      <button class="form-btn is-ghost" type="button" disabled>
        <ion-icon name="lock-closed-outline"></ion-icon>
        <span>Private project</span>
      </button>
    `);
  }

  projectActions.innerHTML = actions.join("");

  setProjectImage(project.images[0], project.title);
  renderProjectThumbs(project.images, project.title);

  projectModal.classList.add("active");
  projectOverlay.classList.add("active");
  document.body.classList.add("modal-open");

  requestAnimationFrame(function () {
    requestAnimationFrame(updateThumbsScrollState);
  });
};

const closeProjectModal = function () {
  if (!projectModal) return;

  projectModal.classList.remove("active");
  projectOverlay.classList.remove("active");
  document.body.classList.remove("modal-open");
  closeLightbox();
};

const setProjectImage = function (src, alt) {
  activeProjectImage = src;
  projectHero.src = src;
  projectHero.alt = alt;
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
      setProjectImage(src, alt);

      const thumbButtons = projectThumbs.querySelectorAll(".project-thumb");
      thumbButtons.forEach((thumb) => thumb.classList.remove("active"));
      button.classList.add("active");

      button.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
      requestAnimationFrame(updateThumbsScrollState);
    });

    item.appendChild(button);
    projectThumbs.appendChild(item);
  });

  projectThumbs.scrollLeft = 0;
  requestAnimationFrame(function () {
    requestAnimationFrame(updateThumbsScrollState);
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
    scrollThumbsBy(-1);
  });
}

if (thumbsNextBtn) {
  thumbsNextBtn.addEventListener("click", function () {
    scrollThumbsBy(1);
  });
}

if (projectThumbs) {
  projectThumbs.addEventListener("scroll", updateThumbsScrollState, { passive: true });
}

window.addEventListener("resize", function () {
  if (projectModal && projectModal.classList.contains("active")) {
    updateThumbsScrollState();
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


/* Card glow follow cursor */

const canUseCardGlow = window.matchMedia("(hover: hover) and (pointer: fine)").matches
  && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const initCardGlow = function (card) {
  if (!canUseCardGlow || !card || card.querySelector(":scope > .glow-spot")) return;

  const spot = document.createElement("span");
  spot.className = "glow-spot";
  spot.setAttribute("aria-hidden", "true");
  card.appendChild(spot);

  card.addEventListener("pointerenter", function () {
    card.classList.add("is-glowing");
  });

  card.addEventListener("pointerleave", function () {
    card.classList.remove("is-glowing");
  });

  card.addEventListener("pointermove", function (event) {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", x.toFixed(2) + "%");
    card.style.setProperty("--my", y.toFixed(2) + "%");
  });
};

document.querySelectorAll("[data-glow]").forEach(initCardGlow);

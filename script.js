const whatsappNumber = "5599991310166";
const defaultMessage = "Olá! Encontrei a Racco Açailândia pelo site e gostaria de conhecer os produtos.";
const whatsappLinks = document.querySelectorAll("[data-whatsapp]");
const makeWhatsappUrl = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

whatsappLinks.forEach((link) => {
  const interest = link.dataset.interest;
  const message = interest
    ? `Olá! Encontrei a Racco Açailândia pelo site e gostaria de saber mais sobre ${interest}.`
    : defaultMessage;
  link.href = makeWhatsappUrl(message);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

function closeMenu() {
  if (!menuToggle || !mainNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  mainNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    mainNav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) closeMenu();
  });
}

const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");
const productCount = document.querySelector("#product-count");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((filterButton) => {
      const selected = filterButton === button;
      filterButton.classList.toggle("is-active", selected);
      filterButton.setAttribute("aria-pressed", String(selected));
    });

    productCards.forEach((card) => {
      const visible = category === "todos" || card.dataset.category === category;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (productCount) productCount.textContent = String(visibleCount).padStart(2, "0");
  });
});

document.querySelectorAll("[data-interest]").forEach((link) => {
  const interest = link.dataset.interest;
  if (interest) {
    link.href = makeWhatsappUrl(`Olá! Encontrei a Racco Açailândia pelo site e gostaria de saber mais sobre ${interest}.`);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".section-heading, .product-card, .experience__copy, .visit__intro").forEach((element) => {
    element.setAttribute("data-reveal", "");
    revealObserver.observe(element);
  });
}

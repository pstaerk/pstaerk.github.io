// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Sticky nav shadow on scroll =====
const nav = document.getElementById("nav");
const onScroll = () => {
  if (window.scrollY > 8) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===== Mobile menu toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ===== Publication detail toggles (Abstract / BibTeX) =====
document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.toggle; // "abstract" | "bibtex"
    const card = btn.closest(".pub-card");
    const detail = card.querySelector(`[data-detail="${type}"]`);
    const isOpen = detail.classList.contains("open");

    // Toggle this one
    detail.classList.toggle("open", !isOpen);
    btn.classList.toggle("active", !isOpen);
    btn.textContent = isOpen
      ? type.charAt(0).toUpperCase() + type.slice(1)
      : "Close " + type.charAt(0).toUpperCase() + type.slice(1);
  });
});

// ===== Email (obfuscated against spam harvesters) =====
// The address is stored split in the HTML as data-mail="user|domain" and only
// reassembled here at runtime, so the full address never appears in the source.
document.querySelectorAll("[data-mail]").forEach((el) => {
  el.href = "mailto:" + el.dataset.mail.replace(/\|/g, "@");
});

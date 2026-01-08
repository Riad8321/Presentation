/* =====================================================
   MOBILE MENU & SCROLL ANIMATION
===================================================== */
const mobileMenuBtn = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Toggle Menu Mobile
mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  // Animation simple du burger
  const bars = mobileMenuBtn.querySelectorAll(".bar");
  // On pourrait ajouter une classe 'open' ici pour transformer le burger en croix
});

// Fermer le menu au clic sur un lien
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Animation d'apparition au scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".section").forEach((sec) => observer.observe(sec));

// Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

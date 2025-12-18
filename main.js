/*
  MAIN.JS
  Scroll Animations, Mobile Menu, Sticky Header
*/

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const body = document.body;
  const navLinks = document.querySelectorAll("nav a");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      // Animate hamburger to X
      menuToggle.classList.toggle("open");

      // Lock scroll when menu is open
      if (nav.classList.contains("active")) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
      }
    });
  }

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      body.style.overflow = "";
    });
  });

  // 2. Sticky Navbar Background
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 3. Scroll Reveal Animation
  // We use IntersectionObserver to detect when elements enter the viewport (screen).
  // This is much more efficient than listening to the 'scroll' event constantly.
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // 'isIntersecting' is true when the element is visible
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Optional: Stop observing once revealed
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null, // Use the viewport as the root
      threshold: 0.15, // Trigger when 15% of element is visible
      rootMargin: "0px 0px -50px 0px", // Offset the trigger point slightly
    }
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
});

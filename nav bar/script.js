let isMenuOpen = false;
let activeLink = null;

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const notification = document.getElementById("notification");

// Toggle Mobile Menu
hamburger.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  navLinks.classList.toggle("show");
});

// Handle Link Click
document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Active state
    if (activeLink) {
      activeLink.classList.remove("active");
    }

    link.classList.add("active");
    activeLink = link;

    // Show Loading
    notification.textContent = "Loading page...";
    notification.classList.add("show");

    setTimeout(() => {
      notification.textContent = "Page Loaded!";

      setTimeout(() => {
        notification.classList.remove("show");
      }, 1500);

    }, 2000);

  });

});


//change footer year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// mobile nav
const btnNavEl = document.querySelector(".btn-mobile");
const headerEl = document.querySelector(".header-nav-box");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//smooth scrooling
const allLinks = document.querySelectorAll(".header-nav-link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scrol back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //scrool to other link
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //scrol mobile nav
    if (link.classList.contains("header-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Footer year (works on pages that have #year)
const yEls = document.querySelectorAll("#year");
yEls.forEach(el => el.textContent = new Date().getFullYear());

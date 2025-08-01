const themeToggler = document.getElementById("theme-toggler");

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});
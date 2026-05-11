
// Footer info
const year = new Date().getFullYear();
document.getElementById("copyright").textContent =
    `© ${year} 🌸 Aine Villegas 🌸 Philippines`;

document.getElementById("lastModified").textContent =
    document.lastModified;


// Hamburger menu
const menuButton = document.getElementById("menuButton");
const navMenu = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    menuButton.textContent =
        menuButton.textContent === "☰" ? "✖" : "☰";
});

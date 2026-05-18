
// ✅ Temple Data
const temples = [
    {
        name: "Manila Philippines Temple",
        location: "Manila, Philippines",
        dedicated: "1984-09-25",
        area: 26683,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
    },
    {
        name: "Cebu City Philippines Temple",
        location: "Cebu, Philippines",
        dedicated: "2010-06-13",
        area: 29856,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
    },
    {
        name: "Bacolod Philippines Temple",
        location: "Bacolod, Philippines",
        dedicated: "2021-12-05",
        area: 26000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-70237-main.jpg"
    },
    {
        name: "Alabang Philippines Temple",
        location: "Alabang, Philippines",
        dedicated: "2024-01-01",
        area: 45000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/alabang-philippines-temple/alabang-philippines-temple-67738.jpg"
    },
    {
        name: "Davao Philippines Temple",
        location: "Davao, Philippines",
        dedicated: "2023-01-01",
        area: 18000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/davao-philippines-temple/davao-philippines-temple-69513-main.jpg"
    },
    {
        name: "Urdaneta Philippines Temple",
        location: "Urdaneta, Philippines",
        dedicated: "2024-01-01",
        area: 32000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/urdaneta-philippines-temple/urdaneta-philippines-temple-45874-main.jpg"
    },
    {
        name: "Naga Philippines Temple",
        location: "Naga, Philippines",
        dedicated: "2024-01-01",
        area: 20000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/naga-philippines-temple/naga-philippines-temple-68737-main.jpg"
    },
    {
        name: "Cagayan de Oro Philippines Temple",
        location: "Cagayan de Oro, Philippines",
        dedicated: "2024-01-01",
        area: 25000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/cagayan-de-oro-philippines-temple/cagayan-de-oro-philippines-temple-50369-main.jpg"
    },
    {
        name: "Iloilo Philippines Temple",
        location: "Iloilo, Philippines",
        dedicated: "2024-01-01",
        area: 30000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/iloilo-philippines-temple/iloilo-philippines-temple-68739-main.jpg"
    }
];

// ✅ Display Function (FULLY FIXED)
function displayTemples(list) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    list.forEach(temple => {
        const card = document.createElement("figure");

        card.innerHTML = `
            <img src="${temple.image}" alt="${temple.name}" loading="lazy">
            <figcaption>
                <strong>${temple.name}</strong><br>
                ${temple.location}<br>
                Dedicated: ${temple.dedicated}<br>
                Area: ${temple.area} sq ft
            </figcaption>
        `;

        gallery.appendChild(card);
    });
}

// ✅ Filter
function filterTemples(type) {
    let filtered;

    switch (type) {
        case "old":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case "new":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }

    displayTemples(filtered);
}

// ✅ Load all
displayTemples(temples);

// ✅ Footer
document.getElementById("copyright").textContent =
    `© ${new Date().getFullYear()} 🌸 Aine Villegas 🌸 Philippines`;

document.getElementById("lastModified").textContent =
    document.lastModified;

// ✅ Menu
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.textContent =
        menuButton.textContent === "☰" ? "✖" : "☰";
});

const destinations = [
    {
        name: "Japan",
        city: "Tokyo and Kyoto",
        description: "Modern and traditional culture with temples, food, and scenic views.",
        price: 150,
        bestFor: "culture",
        image: "images/japan.webp",
        alt: "Japan temple"
    },
    {
        name: "South Korea",
        city: "Seoul and Busan",
        description: "Food, shopping, music, and exciting city life.",
        price: 120,
        bestFor: "food",
        image: "images/korea.webp",
        alt: "South Korea skyline"
    },
    {
        name: "Thailand",
        city: "Bangkok and Phuket",
        description: "Beautiful beaches, temples, markets, and tropical relaxation.",
        price: 90,
        bestFor: "beach",
        image: "images/thailand.webp",
        alt: "Thailand beach"
    },
    {
        name: "Philippines",
        city: "Batanes and Davao",
        description: "Islands, mountains, nature trips, and outdoor adventure.",
        price: 80,
        bestFor: "adventure",
        image: "images/batanes.webp",
        alt: "Philippines island"
    },
    {
        name: "Singapore",
        city: "Singapore City",
        description: "Clean city attractions, modern landmarks, gardens, and shopping.",
        price: 140,
        bestFor: "city",
        image: "images/singapore.webp",
        alt: "Singapore city travel"
    }
];

function displayList() {
    const list = document.querySelector("#destinationList");

    if (list) {
        list.innerHTML = destinations.map((dest) => `
            <li>
                <strong>${dest.name}</strong> - ${dest.city} - $${dest.price}/day
            </li>
        `).join("");
    }
}

function displayCards() {
    const container = document.querySelector("#destinationCards");

    if (container) {
        container.innerHTML = destinations.map((dest) => `
            <article class="card">
                <img src="${dest.image}" alt="${dest.alt}" loading="lazy">
                <div class="card-content">
                    <h3>${dest.name}</h3>
                    <p>${dest.description}</p>
                    <p><strong>Cost per day:</strong> $${dest.price}</p>
                </div>
            </article>
        `).join("");
    }
}

function getSuggestion(tripType) {
    return destinations.find((dest) => dest.bestFor === tripType) || destinations[0];
}

function calculatePrice(destination, days, people, tripType, addonCount) {
    let baseCost = destination.price * days * people;
    let multiplier = 1;

    if (tripType === "culture") {
        multiplier = 1.2;
    } else if (tripType === "food") {
        multiplier = 1.15;
    } else if (tripType === "beach") {
        multiplier = 1.1;
    } else if (tripType === "adventure") {
        multiplier = 1.25;
    } else if (tripType === "city") {
        multiplier = 1.18;
    }

    const addonCost = addonCount * 25 * days;
    return Math.round((baseCost * multiplier) + addonCost);
}

function handleForm(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const destinationSelect = document.querySelector("#destinationSelect").value;
    const budget = document.querySelector("#budget").value;
    const tripTypeInput = document.querySelector("input[name='tripType']:checked");
    const travelDate = document.querySelector("#travelDate").value;
    const days = Number(document.querySelector("#days").value);
    const people = Number(document.querySelector("#people").value);
    const notes = document.querySelector("#message").value.trim();
    const checkedAddons = document.querySelectorAll("input[name='addons']:checked");
    const response = document.querySelector("#responseMessage");

    if (!name || !email || !destinationSelect || !budget || !tripTypeInput || !travelDate || !days || !people || !notes) {
        response.innerHTML = "<p>Please complete all fields.</p>";
        return;
    }

    const tripType = tripTypeInput.value;
    const destination = getSuggestion(tripType);
    const totalCost = calculatePrice(destination, days, people, tripType, checkedAddons.length);

    const traveler = {
        name: name,
        email: email,
        selectedProduct: destinationSelect,
        budget: budget,
        tripType: tripType,
        travelDate: travelDate,
        days: days,
        people: people,
        notes: notes,
        destination: destination.name,
        cost: totalCost
    };

    localStorage.setItem("traveler", JSON.stringify(traveler));

    response.innerHTML = `
        <h3>Travel Plan Summary</h3>
        <p><strong>Name:</strong> ${traveler.name}</p>
        <p><strong>Recommended Destination:</strong> ${traveler.destination}</p>
        <p><strong>Travel Date:</strong> ${traveler.travelDate}</p>
        <p><strong>Trip:</strong> ${traveler.days} days for ${traveler.people} traveler(s)</p>
        <p><strong>Estimated Cost:</strong> $${traveler.cost}</p>
        <p>${destination.description}</p>
    `;
}

function loadSavedTraveler() {
    const saved = localStorage.getItem("traveler");
    const response = document.querySelector("#responseMessage");

    if (saved && response) {
        const traveler = JSON.parse(saved);

        response.innerHTML = `
            <h3>Welcome Back ${traveler.name}</h3>
            <p>Last destination: <strong>${traveler.destination}</strong></p>
            <p>Estimated cost: $${traveler.cost}</p>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayList();
    displayCards();
    loadSavedTraveler();

    const form = document.querySelector("#contactForm");

    if (form) {
        form.addEventListener("submit", handleForm);
    }
});
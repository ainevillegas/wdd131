
/* ===============================
   DESTINATIONS (ARRAY + OBJECTS)
================================= */
const destinations = [
    {
        name: "Japan",
        city: "Tokyo and Kyoto",
        description: "Modern and traditional culture with temples.",
        price: 150,
        bestFor: "culture",
        image: "images/japan.webp",
        alt: "Japan temple"
    },
    {
        name: "South Korea",
        city: "Seoul and Busan",
        description: "Food, shopping, and city life.",
        price: 120,
        bestFor: "food",
        image: "images/korea.webp",
        alt: "South Korea skyline"
    },
    {
        name: "Thailand",
        city: "Bangkok and Phuket",
        description: "Beaches and tropical relaxation.",
        price: 90,
        bestFor: "beach",
        image: "images/thailand.webp",
        alt: "Thailand beach"
    },
    {
        name: "Philippines",
        city: "Batanes and Davao",
        description: "Islands and adventure.",
        price: 80,
        bestFor: "adventure",
        image: "images/batanes.webp",
        alt: "Philippines island"
    }
];

/* ===============================
   DISPLAY LIST (ARRAY METHOD)
================================= */
function displayList() {
    const list = document.querySelector("#destinationList");

    if (list) {
        list.innerHTML = destinations.map(dest => `
            <li>
                <strong>${dest.name}</strong> - ${dest.city} - $${dest.price}/day
            </li>
        `).join("");
    }
}

/* ===============================
   DISPLAY CARDS 
================================= */
function displayCards() {
    const container = document.querySelector("#destinationCards");

    if (container) {
        container.innerHTML = destinations.map(dest => `
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

/* ===============================
   GET DESTINATION 
================================= */
function getSuggestion(tripType) {
    return destinations.find(dest => dest.bestFor === tripType)
        || destinations[0];
}

/* ===============================
   CALCULATE PRICE 
================================= */
function calculatePrice(destination, days, people, tripType) {

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
    }

    return Math.round(baseCost * multiplier);
}

/* ===============================
   FORM HANDLER 
================================= */
function handleForm(event) {
    event.preventDefault();

    console.log(" Form submitted"); // Debug check

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const tripType = document.querySelector("#tripType").value;
    const budget = document.querySelector("#budget").value;
    const days = Number(document.querySelector("#days").value);
    const people = Number(document.querySelector("#people").value);
    const notes = document.querySelector("#message").value.trim();

    const response = document.querySelector("#responseMessage");

    /*  VALIDATION */
    if (!name || !email || !tripType || !budget || !days || !people || !notes) {
        response.innerHTML = `<p>Please complete all fields.</p>`;
        return;
    }

    /* GET DATA */
    const destination = getSuggestion(tripType);
    const totalCost = calculatePrice(destination, days, people, tripType);

    /* OBJECT */
    const traveler = {
        name,
        email,
        tripType,
        budget,
        days,
        people,
        notes,
        destination: destination.name,
        cost: totalCost
    };

    /* SAVE */
    localStorage.setItem("traveler", JSON.stringify(traveler));

    /* DISPLAY RESULT (FIXED OUTPUT) */
    response.innerHTML = `
        <h3>Travel Plan Summary</h3>
        <p><strong>Name:</strong> ${traveler.name}</p>
        <p><strong>Destination:</strong> ${traveler.destination}</p>
        <p><strong>Trip:</strong> ${traveler.days} days for ${traveler.people} traveler(s)</p>
        <p><strong>Estimated Cost:</strong> $${traveler.cost}</p>
        <p>${destination.description}</p>
    `;
}

/* ===============================
   LOAD SAVED 
================================= */
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

/* ===============================
   INIT 
================================= */
document.addEventListener("DOMContentLoaded", () => {
    displayList();
    displayCards();
    loadSavedTraveler();

    const form = document.querySelector("#contactForm");

    if (form) {
        form.addEventListener("submit", handleForm);
    }
});
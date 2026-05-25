
// DATA (array + objects)
const destinations = [
    { name: "Paris", description: "City of Light", price: 1200 },
    { name: "Tokyo", description: "Modern and traditional", price: 1500 },
    { name: "New York", description: "The Big Apple", price: 1000 }
];

// Display list (Home page)
function displayList() {
    const list = document.getElementById("destinationList");

    if (list) {
        list.innerHTML = destinations
            .map(d => `<li>${d.name} - $${d.price}</li>`)
            .join("");
    }
}

// Display cards (Destinations page)
function displayCards() {
    const container = document.getElementById("destinationCards");

    if (container) {
        container.innerHTML = destinations
            .map(d => `
        <div class="card">
          <h3>${d.name}</h3>
          <p>${d.description}</p>
          <p>Price: $${d.price}</p>
        </div>
      `)
            .join("");
    }
}

// Handle form submission
function handleForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    const message = `Thank you, ${name}! We will contact you soon.`;

    document.getElementById("responseMessage").textContent = message;

    localStorage.setItem("username", name);
}

// Load saved user
function loadUser() {
    const saved = localStorage.getItem("username");

    if (saved) {
        const msg = document.getElementById("responseMessage");

        if (msg) {
            msg.textContent = `Welcome back, ${saved}!`;
        }
    }
}

// EVENTS
document.addEventListener("DOMContentLoaded", () => {
    displayList();
    displayCards();
    loadUser();

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", handleForm);
    }
});

const products = [
    { id: "p1", name: "Laptop" },
    { id: "p2", name: "Smartphone" },
    { id: "p3", name: "Tablet" },
    { id: "p4", name: "Smartwatch" }
];

const select = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});
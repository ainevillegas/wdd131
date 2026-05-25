
// ✅ Product array (REQUIRED)
const products = [
    { id: "p1", name: "Laptop" },
    { id: "p2", name: "Smartphone" },
    { id: "p3", name: "Tablet" },
    { id: "p4", name: "Smartwatch" }
];

// ✅ Populate select
const productSelect = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");

    option.value = product.id;   // value = id
    option.textContent = product.name; // display = name

    productSelect.appendChild(option);
});

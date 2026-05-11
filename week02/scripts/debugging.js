
// Get elements from HTML
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');

// Declare variables
let area = 0;
const PI = 3.14159;

// First calculation
let radius = 10;
area = PI * radius * radius;

// Display values
radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Second calculation
radius = 20;
area = PI * radius * radius;

// Display updated values
radiusOutput.textContent = radius;
areaOutput.textContent = area;

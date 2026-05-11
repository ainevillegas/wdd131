
// Footer info
const year = document.querySelector("#year");
const modified = document.querySelector("#modified");

year.textContent = new Date().getFullYear();
modified.textContent = document.lastModified;

// Weather values (static)
const temp = 8;
const windSpeed = 10;

// Function (ONE LINE)
const calculateWindChill = (t, v) =>
    13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);

const windChillElement = document.querySelector("#windchill");

// Conditions check
if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temp, windSpeed).toFixed(1) + " °C";
} else {
    windChillElement.textContent = "N/A";
}

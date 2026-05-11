
// ✅ Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// ✅ Static values
const temp = 8;
const windSpeed = 10;

// ✅ One-line wind chill function (Metric)
const calculateWindChill = (t, v) =>
    13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);

// ✅ Apply conditions
const windChillDisplay = document.getElementById("windchill");

if (temp <= 10 && windSpeed > 4.8) {
    windChillDisplay.textContent =
        calculateWindChill(temp, windSpeed).toFixed(1) + " °C";
} else {
    windChillDisplay.textContent = "N/A";
}
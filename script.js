import { Coordinates, CalculationParameters, PrayerTimes } from 'adhan';

// Initialize map
const map = L.map('map').setView([21.4225, 39.8262], 13); // Mecca coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Get current date and time
const now = moment();
const date = new Date(now.year(), now.month(), now.date()); // Convert moment to Date object

// Example coordinates (Mecca)
const latitude = 21.4225;
const longitude = 39.8262;

const coordinates = new Coordinates(latitude, longitude);
const params = CalculationParameters.muslimWorldLeague(); // Or any other method
const prayerTimes = new PrayerTimes(coordinates, date, params);

// Display prayer times (example)
console.log("Fajr:", prayerTimes.fajr);
console.log("Sunrise:", prayerTimes.sunrise);
console.log("Dhuhr:", prayerTimes.dhuhr);
console.log("Asr:", prayerTimes.asr);
console.log("Maghrib:", prayerTimes.maghrib);
console.log("Isha:", prayerTimes.isha);

// Add a marker to the map (optional)
L.marker([latitude, longitude]).addTo(map)
    .bindPopup('Mecca');

// On map click, show prayer times
map.on('click', (e) => {
  const { lat, lng } = e.latlng;
  const date = new Date(datetimeInput.value);

  // Get prayer period
  const period = getPrayerPeriod(lat, lng, date);

  // Show popup
  L.popup()
    .setLatLng([lat, lng])
    .setContent(`Current Prayer: ${period}`)
    .openOn(map);
});

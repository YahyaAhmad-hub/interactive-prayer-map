console.log('Adhan library:', Adhan); // Check if Adhan is defined

// Initialize the map
const map = L.map('map').setView([24.7136, 46.6753], 3); // Center on Saudi Arabia

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Get the datetime input
const datetimeInput = document.getElementById('datetime');

// Set default datetime to now
datetimeInput.value = new Date().toISOString().slice(0, 16);

// Function to calculate prayer times
function getPrayerPeriod(lat, lng, date) {
  const coordinates = new Adhan.Coordinates(lat, lng);
  const params = Adhan.CalculationMethod.MuslimWorldLeague();
  const prayerTimes = new Adhan.PrayerTimes(coordinates, date, params);
  return prayerTimes.currentPeriod(date);
}

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
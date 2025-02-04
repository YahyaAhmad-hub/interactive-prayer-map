// Initialize map
const map = L.map('map').setView([21.4225, 39.8262], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const now = moment();
const date = now.toDate();

const latitude = 21.4225;
const longitude = 39.8262;

try {
    const coordinates = new adhan.Coordinates(latitude, longitude);
    const params = adhan.CalculationParameters.muslimWorldLeague();
    const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);

    const fajrTime = moment(prayerTimes.fajr).format('HH:mm');
    const sunriseTime = moment(prayerTimes.sunrise).format('HH:mm');
    const dhuhrTime = moment(prayerTimes.dhuhr).format('HH:mm');
    const asrTime = moment(prayerTimes.asr).format('HH:mm');
    const maghribTime = moment(prayerTimes.maghrib).format('HH:mm');
    const ishaTime = moment(prayerTimes.isha).format('HH:mm');

    const prayerTimesPopup = `
        Fajr: ${fajrTime}<br>
        Sunrise: ${sunriseTime}<br>
        Dhuhr: ${dhuhrTime}<br>
        Asr: ${asrTime}<br>
        Maghrib: ${maghribTime}<br>
        Isha: ${ishaTime}
    `;

    L.marker([latitude, longitude]).addTo(map).bindPopup(prayerTimesPopup).openPopup();

} catch (error) {
    console.error("Error calculating prayer times:", error);
    alert("An error occurred while calculating prayer times. Please check the console for details.");
}
// ... (rest of your code)

// Example of adding a marker for another location (you'll likely want to make this dynamic)
const anotherLatitude = 24.4711; // Medina
const anotherLongitude = 39.6039;
L.marker([anotherLatitude, anotherLongitude]).addTo(map)
    .bindPopup('Medina');


// Example of getting the current time in a specific format
const currentTime = moment().format('HH:mm');
console.log("Current Time:", currentTime);

// ... (rest of your code - updating prayer times dynamically, etc.) ...

// Initialize map
const map = L.map('map').setView([21.4225, 39.8262], 13); // Mecca coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Get current date and time
const now = moment();
const date = new Date(now.year(), now.month(), now.date());


// Example coordinates (Mecca) - You'll likely want to make this dynamic
const latitude = 21.4225;
const longitude = 39.8262;

try {
    // Use adhan correctly (it's available as a global object after the CDN inclusion)
    const coordinates = new adhan.Coordinates(latitude, longitude);
    const params = adhan.CalculationParameters.muslimWorldLeague(); // Or another method
    const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);

    // Format times using moment.js (make sure it's included)
    const fajrTime = prayerTimes.fajr.format('HH:mm');
    const sunriseTime = prayerTimes.sunrise.format('HH:mm');
    const dhuhrTime = prayerTimes.dhuhr.format('HH:mm');
    const asrTime = prayerTimes.asr.format('HH:mm');
    const maghribTime = prayerTimes.maghrib.format('HH:mm');
    const ishaTime = prayerTimes.isha.format('HH:mm');

    console.log("Fajr:", fajrTime); // Log the formatted times
    console.log("Sunrise:", sunriseTime);
    console.log("Dhuhr:", dhuhrTime);
    console.log("Asr:", asrTime);
    console.log("Maghrib:", maghribTime);
    console.log("Isha:", ishaTime);

    const prayerTimesPopup = `
        Fajr: ${fajrTime}<br>
        Sunrise: ${sunriseTime}<br>
        Dhuhr: ${dhuhrTime}<br>
        Asr: ${asrTime}<br>
        Maghrib: ${maghribTime}<br>
        Isha: ${ishaTime}
    `;

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup(prayerTimesPopup)
        .openPopup();

} catch (error) {
    console.error("Error calculating prayer times:", error);
    alert("An error occurred while calculating prayer times. Please check the console for details.");
}

// ... (rest of your code - adding markers for other locations, handling user input, etc.) ...

// Example of adding a marker for another location (you'll likely want to make this dynamic)
const anotherLatitude = 24.4711; // Medina
const anotherLongitude = 39.6039;
L.marker([anotherLatitude, anotherLongitude]).addTo(map)
    .bindPopup('Medina');


// Example of getting the current time in a specific format
const currentTime = moment().format('HH:mm');
console.log("Current Time:", currentTime);

// ... (rest of your code - updating prayer times dynamically, etc.) ...

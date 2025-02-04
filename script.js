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

// Prayer Time Calculation
try {  // Wrap in a try-catch to handle potential errors
    const coordinates = new adhan.Coordinates(latitude, longitude);
    const params = adhan.CalculationParameters.muslimWorldLeague(); // Or another method
    const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);

    // Display prayer times in the console (for now)
    console.log("Fajr:", prayerTimes.fajr.format('HH:mm')); // Format as HH:MM
    console.log("Sunrise:", prayerTimes.sunrise.format('HH:mm'));
    console.log("Dhuhr:", prayerTimes.dhuhr.format('HH:mm'));
    console.log("Asr:", prayerTimes.asr.format('HH:mm'));
    console.log("Maghrib:", prayerTimes.maghrib.format('HH:mm'));
    console.log("Isha:", prayerTimes.isha.format('HH:mm'));

    // Display prayer times on the map (example - adapt as needed)
    const prayerTimesPopup = `
        Fajr: ${prayerTimes.fajr.format('HH:mm')}<br>
        Sunrise: ${prayerTimes.sunrise.format('HH:mm')}<br>
        Dhuhr: ${prayerTimes.dhuhr.format('HH:mm')}<br>
        Asr: ${prayerTimes.asr.format('HH:mm')}<br>
        Maghrib: ${prayerTimes.maghrib.format('HH:mm')}<br>
        Isha: ${prayerTimes.isha.format('HH:mm')}
    `;

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup(prayerTimesPopup)
        .openPopup(); // Optionally open the popup immediately

} catch (error) {
    console.error("Error calculating prayer times:", error);
    // Handle the error gracefully, e.g., display a message on the map
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

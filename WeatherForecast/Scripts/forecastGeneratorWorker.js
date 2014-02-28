var date = new Date();
var forecasts = [];

(function generate() {
    for (var i = 0; i < forecasts.length; i++) {
        forecasts[i].temperature = generateTemperature();
    }

    forecasts.push({ date: date, temperature: generateTemperature() });

    postMessage(forecasts);
    date.setDate(date.getDate() + 1);

    setTimeout(generate, 2000);
})();

function generateTemperature() {
    return Math.floor((Math.random() * 100) / 4);
}
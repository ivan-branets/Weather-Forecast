var date = new Date();
var forecasts = [];

(function generate() {

    forecasts.push({ date: new Date(date), temperature: generateTemperature() });

    postMessage(forecasts);
    date.setDate(date.getDate() + 1);

    setTimeout(generate, 2000);
})();

function generateTemperature() {
    return Math.floor((Math.random() * 100) / 4);
}
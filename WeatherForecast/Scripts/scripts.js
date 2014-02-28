function getDateStr(date) {
    if (typeof date == "string") {
        date = new Date(date);
    }

    var day = date.getDate();
    var month = date.getMonth() + 1;
    
    if (day < 10) {
        day = "0" + day;
    }
    
    if (month < 10) {
        month = "0" + month;
    }

    return day + "-" + month + "-" + date.getFullYear();
}

function updateObservable(observable, array) {
    var arrayLength = array.length;
    var observableLenght = observable().length;

    for (var i = 0; i < observableLenght; i++) {
        var newTemperature = array[i].temperature;

        var forecast = observable()[i];
        forecast.temperature(newTemperature);
    }

    for (var j = observableLenght; j < arrayLength; j++) {
        var newForecast = array[j];
        observable.push({ date: newForecast.date, temperature: ko.observable(newForecast.temperature) });
    }
}
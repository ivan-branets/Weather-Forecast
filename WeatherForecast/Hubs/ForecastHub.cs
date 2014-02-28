using System.Collections.Generic;
using Microsoft.AspNet.SignalR;
using WeatherForecast.Models;

namespace WeatherForecast.Hubs
{
    public class ForecastHub : Hub
    {
        public void GiveForecast(IEnumerable<Forecast> forecasts)
        {
            Clients.All.display(forecasts);
        }
    }
}
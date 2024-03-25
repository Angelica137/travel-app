const { displayWeather } = require("../client/index.js");

describe("displayWeather", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="weather-title"></div>
      <div id="weather"></div>
    `;
  });

  it("displays weather information correctly", async () => {
    // Mock data for the displayWeather function
    const mockWeatherData = {
      temp: "22",
      weather: {
        description: "Clear sky",
        icon: "01d",
      },
    };

    // Assuming displayWeather is exported and can be imported
    const { displayWeather } = require("../client/index.js");

    // Call the displayWeather function with the mock data
    displayWeather(mockWeatherData);

    // Assertions to verify that the DOM has been updated correctly
    const weatherTitle = document.getElementById("weather-title");
    const weatherDiv = document.getElementById("weather");

    expect(weatherTitle.textContent).toContain("The weather will be:");
    expect(weatherDiv.innerHTML).toContain("22°C");
    expect(weatherDiv.innerHTML).toContain("Clear sky");
    expect(weatherDiv.innerHTML).toContain(
      'src="https://www.weatherbit.io/static/img/icons/01d.png"'
    );
    expect(weatherDiv.innerHTML).toContain('alt="Weather Icon"');
    expect(weatherDiv.querySelector(".weather-icon")).not.toBeNull();
  });
});

import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

import fetchMock from "jest-fetch-mock";
import {
  handleSubmit,
  geonamesData,
  displayCountDown,
  displayWeather,
} from "../client/index.js";

// Mocks for functions needed
jest.mock("../client/index.js", () => ({
  ...jest.requireActual("../client/index.js"),
  displayWeather: jest.fn(),
  displayCountDown: jest.fn(),
  displayDestination: jest.fn(),
}));

//fetchMock.mockRejectOnce(new Error("fake error message"));

describe("handleSubmit", () => {
  // Setup the DOM environment for the test
  beforeEach(() => {
    document.body.innerHTML = `
      <input id="location" value="Paris" />
      <input id="travelDate" value="2024-03-30" />
      <div id="weather"></div>
      <p id="weather-title"></p>
      <div id="destination"></div>
      <div id="countdown"></div>
    `;

    // Reset fetch mocks before each test
    fetchMock.resetMocks();

    // Resetting mocks and geonamesData
    geonamesData.length = 0;
    geonamesData.push({ name: "Paris", lat: "49.8566", lng: "2.3522" });
  });

  // Mocking successful fetch responses
  fetchMock.mockResponse((req) => {
    if (req.url.endsWith("weather")) {
      return Promise.resolve(
        JSON.stringify({
          temp: 21,
          weather: {
            description: "Sunny",
            icon: "Old",
          },
        })
      );
    } else if (req.url.endsWith("destination")) {
      return Promise.resolve(
        JSON.stringify({
          hits: [
            {
              webformatURL: "http://example.com/image.jpg",
            },
          ],
        })
      );
    }
    return Promise.reject(new Error("Not found"));
  });

  it("Calls the weather and destination APIs with correct URLs", async () => {
    await handleSubmit();

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/weather?lat=49.8566&lng=2.3522&date=2024-03-30"
    );

    expect(fetchMock).toHaveBeenCalledWith(
      "'/api/destination?destination=paris'"
    );

    //await handleSubmit();
  });

  it("Updates the DOM to show countdown", () => {
    expect(displayCountDown).toHaveBeenCalledWith("2024-03-30");
    // Check if the countdown div was updated (example assertion, adjust as needed based on actual implementation)
    const countdownDiv = document.getElementById("countdown");
    expect(countdownDiv.innerHTML).toContain("days to go!");
  });

  it("Updates the DOM to isplay the weather", () => {
    // Directly check the display functions were called if needed
    expect(displayWeather).toHaveBeenCalledWith(expect.anything());

    // Check if the countdown div was updated (example assertion, adjust as needed based on actual implementation)
    const weatherDiv = document.getElementById("weather");
    expect(weatherDiv.innerHTML).toContain("Sunny");
  });

  it("Updates the DOM to isplay the destination", () => {
    expect(displayDestination).toHaveBeenCalledWith(expect.anything());

    const destinationDiv = document.getElementById("destination");
    expect(destinationDiv.innerHTML).toContain("Paris");
  });
});

// Try
// Directly check the display functions were called if needed
// expect(displayCountDown).toHaveBeenCalled();
// expect(displayWeather).toHaveBeenCalled();

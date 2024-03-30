import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

import fetchMock from "jest-fetch-mock";
import {
  handleSubmit,
  geonamesData,
  displayCountDown,
  displayWeather,
} from "../client/index.js"; // Adjust the path as necessary

// Mocks for other functions if needed directly instead of redeclaring them
jest.mock("../client/index.js", () => ({
  ...jest.requireActual("../client/index.js"), // Import actual other functions
  displayWeather: jest.fn(),
  displayCountDown: jest.fn(),
}));

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

    // Resetting mocks and geonamesData to ensure a clean state for each test
    geonamesData.length = 0;
    geonamesData.push({ name: "Paris", lat: "49.8566", lng: "2.3522" });
  });

  it("Calls the weather and destination APIs with correct URLs", async () => {
    await handleSubmit();

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/weather?lat=49.8566&lng=2.3522&date=2024-03-30"
    );

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/destination?destination=paris"
    );

    // Directly check the display functions were called if needed
    // expect(displayCountDown).toHaveBeenCalled();
    // expect(displayWeather).toHaveBeenCalled();

    // Check if the countdown div was updated (example assertion, adjust as needed based on actual implementation)
    const countdownDiv = document.getElementById("countdown");
    //expect(countdownDiv.innerHTML).toContain("days to go!");
  });
});

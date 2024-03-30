global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

const index = require("../client/index.js");
const mockDisplayWeather = jest.fn();
const mockDisplayCountDown = jest.fn();

//jest.spyOn(index, "displayCountDown").mockImplementation(mockDisplayCountDown);

jest.mock("../client/index.js", () => ({
  ...jest.requireActual("../client/index.js"),
  displayWeather: mockDisplayWeather,
  displayCountDown: mockDisplayCountDown,
}));

const { handleSubmit, geonamesData } = require("../client/index.js");

function setupDOM() {
  document.body.innerHTML = `
	<input id="location" value="Paris" />
	<input id="travelDate" value="2024-03-30" />
	<div id="weather"></div>
	<p id="weather-title"></p>
	<div id="destination"></div>
	<div id="countdown"></div>
`;
}

describe("handleSubmit", () => {
  beforeEach(() => {
    setupDOM();
    fetch.mockClear();
    // Reset geonamesData and populate with test data
    geonamesData.length = 0;
    geonamesData.push({ name: "Paris", lat: "49.8566", lng: "2.3522" });

    // Mock fetch responses for both weather and destination fetch calls
    fetch.mockResolvedValueOnce({
      json: () =>
        Promise.resolve({ temp: 20, weather: { description: "Sunny" } }),
    });
    fetch.mockResolvedValueOnce({
      json: () =>
        Promise.resolve({
          hits: [{ webformatURL: "https://example.com/image.jpg" }],
        }),
    });
  });

  it("updates the countdown in the DOM correctly", async () => {
    // Ensure travelDate is set to a future date relative to "now"
    const travelDateInput = document.getElementById("travelDate");
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5); // Set to 5 days in the future
    travelDateInput.value = futureDate.toISOString().split("T")[0]; // Format YYYY-MM-DD

    await handleSubmit();

    // After handleSubmit, check if the countdown div has the expected content
    const countdownDiv = document.getElementById("countdown");
    expect(countdownDiv.innerHTML).toContain("days to go!");

    // For more precise testing, calculate the expected number of days to go
    const currentDate = new Date();
    const timeDifference = futureDate - currentDate;
    const daysUntilTrip = Math.ceil(timeDifference / (1000 * 3600 * 24));
    expect(countdownDiv.innerHTML).toBe(`${daysUntilTrip} days to go!`);
  });
});

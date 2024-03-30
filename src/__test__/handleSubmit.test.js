global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

const mockDisplayWeather = jest.fn();
const mockDisplayCountDown = jest.fn();

jest.mock("../client/index.js", () => ({
  ...jest.requireActual("../client/index.js"),
  displayWeather: mockDisplayWeather,
  displayCountDown: mockDisplayCountDown,
}));

console.log("this is it", mockDisplayCountDown.mock.calls);

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
    mockDisplayWeather.mockClear();
    mockDisplayCountDown.mockClear();
    //geonamesData = [{ name: "Paris", lat: "49.8566", lng: "2.3522" }];
    geonamesData.length = 0;
    geonamesData.push({ name: "Paris", lat: "49.8566", lng: "2.3522" });
  });

  it("Calls  the weather  and destination APIS with correct URL's", async () => {
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
    await handleSubmit();

    expect(fetch).toHaveBeenCalledWith(
      "/api/weather?lat=49.8566&lng=2.3522&date=2024-03-30"
    );
    expect(mockDisplayCountDown).toHaveBeenCalledWith("2024-03-30");
  });
});

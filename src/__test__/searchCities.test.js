require("jest-fetch-mock").enableMocks();

describe("searchCities", () => {
  beforeEach(() => {
    fetch.resetMocks();
    document.body.innerHTML = `<input id="location" value="New York" /><datalist id="suggestions"></datalist>`;
  });

  it("fetches cities and updates suggestions", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        geonames: [{ name: "New York" }],
      })
    );

    const searchCities = require("../client/index.js").searchCities;

    // Call the searchCities function or simulate an input event
    // Example: document.getElementById("location").dispatchEvent(new Event('input'));
    await searchCities();

    // Check if the function was called and log the result
    console.log(document.getElementById("suggestions").innerHTML);

    const suggestionsList = document.getElementById("suggestions");
    expect(suggestionsList.childNodes.length).toBe(1);
    expect(suggestionsList.firstChild.value).toBe("New York");
  });
});

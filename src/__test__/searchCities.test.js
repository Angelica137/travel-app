const { searchCities, showSuggestions } = require("../client/index.js");

describe("searchCities", () => {
  beforeEach(() => {
    fetch.resetMocks();
    document.body.innerHTML = `
      <input id="location" value="New York" />
      <datalist id="suggestions"></datalist>
    `;
  });

  it("fetches cities and updates suggestions", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        geonames: [{ name: "New York" }],
      })
    );

    // Call the searchCities function directly
    await searchCities();

    // We must wait for the state and the DOM to be updated,
    // setTimeout with '0' will push the callback at the end of the call stack allowing the promises to resolve.
    await new Promise((resolve) => setTimeout(resolve, 0));

    const suggestionsList = document.getElementById("suggestions");

    // Assertions
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(suggestionsList.childNodes.length).toBe(1);
    expect(suggestionsList.childNodes[0].value).toBe("New York");
  });
});

const { showSuggestions } = require("../client/index.js");

function setupDOM() {
  document.body.innerHTML = '<datalist id="suggestions"></datalist>';
}

describe("showSuggestions", () => {
  beforeEach(() => {
    setupDOM();
  });

  it("displays a list of results as the user entered 2 chars", () => {
    const mockData = [
      { name: "New York" },
      { name: "Sidney" },
      { name: "New Delhi" },
    ];

    showSuggestions(mockData);

    const suggestionsList = document.getElementById("suggestions");

    expect(suggestionsList.children.length).toBe(mockData.length);

    mockData.forEach((geoname, index) => {
      expect(suggestionsList.children[index].value).toBe(geoname.name);
    });
  });
});

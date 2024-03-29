const { displayDestination } = require("../client/index.js");

// test the image is displayed in "destination" id
// Create a mock of DOM elements
function setupDOM() {
  document.body.innerHTML = '<div id="destination"></div>';
}

describe("displayDestination", () => {
  beforeEach(() => {
    setupDOM();
  });

  it("displays an image if data contains an image URL", () => {
    const mockData = {
      hits: [{ webformatURL: "https://example.com/image.jpg" }],
    };

    displayDestination(mockData);

    const img = document.querySelector("#destination img");
    expect(img).not.toBeNull();
    expect(img.src).toBe("https://example.com/image.jpg");
  });

  it("displays an error message if data does not contain an image URL", () => {
    const mockData = {};

    displayDestination(mockData);

    const destinationDiv = document.getElementById("destination");
    expect(destinationDiv.innerHTML).toBe("Displaying image failed");
  });
});

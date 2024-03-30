const { displayCountDown } = require("../client/index.js");

function setupDOM() {
  document.body.innerHTML = '<div id="countdown"></div>';
}

describe("displayCountDown", () => {
  beforeAll(() => {
    setupDOM();
  });

  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2023-01-15"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("shows correct countdown for a future date", () => {
    displayCountDown("2023-01-20");
    expect(document.getElementById("countdown").innerHTML).toBe(
      "5 days to go!"
    );
  });

  it("shows message for a past date", () => {
    displayCountDown("2023-01-10");
    expect(document.getElementById("countdown").innerHTML).toBe(
      "This date is in the past"
    );
  });

  it("shows message for the current date", () => {
    displayCountDown("2023-01-15");
    expect(document.getElementById("countdown").innerHTML).toBe(
      "Your trip is today!"
    );
  });
});

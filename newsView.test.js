/**
 * @jest-environment jsdom
 */

const NewsView = require("./newsView");
const NewsModel = require("./newsModel");
const fs = require("fs");

describe("A test for the news website", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("displays news Items on the page", () => {
    const model = new NewsModel();
    const view = new NewsView(model);

    const itemOne = "Dog learns to do taxes";
    const itemTwo = "Are trees smarter than us?";

    model.addNews(itemOne);
    model.addNews(itemTwo);
    view.displayNews();

    expect(document.querySelectorAll(".news-item").length).toBe(2);
  });
});

/**
 * @jest-environment jsdom
 */

const NewsView = require("./newsView");
const NewsModel = require("./newsModel");
const fs = require("fs");

describe("A test for the news website", () => {
  const itemOne = "Dog learns to do taxes";
  const itemTwo = "Are trees smarter than us?";

  let model, view;
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    model = new NewsModel();
    view = new NewsView(model);
  });

  it("displays news Items on the page", () => {
    model.addNews(itemOne);
    model.addNews(itemTwo);
    view.displayNews();

    expect(document.querySelectorAll(".news-item").length).toBe(2);
  });

  it("only displays the news item once even when it's called twice", () => {
    model.addNews(itemOne);
    model.addNews(itemTwo);
    view.displayNews();
    view.displayNews();

    expect(document.querySelectorAll(".news-item").length).toBe(2);
  });
});

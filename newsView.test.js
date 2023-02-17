/**
 * @jest-environment jsdom
 */

const NewsView = require("./newsView");
const NewsModel = require("./newsModel");
const NewsClient = require("./newsClient");
const fs = require("fs");

jest.mock("./NewsClient");

describe("A test for the news website", () => {
  const itemOne = "Dog learns to do taxes";
  const itemTwo = "Are trees smarter than us?";

  let model, view;
  beforeEach(() => {
    NewsClient.mockClear();
    document.body.innerHTML = fs.readFileSync("./index.html");
    client = new NewsClient();
    model = new NewsModel();
    view = new NewsView(model, client);
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

  it("displays news from the guardian api", () => {
    client.loadHeadlines.mockImplementation((callback) => {
      callback([itemOne, itemTwo]);
    });

    view.displayNewsFromApi();
    expect(client.loadHeadlines).toHaveBeenCalled();
    expect(model.getNews()).toEqual([itemOne, itemTwo]);
  });

  it("displays error message on page", () => {
    view.displayError();
    expect(document.querySelector("#error").textContent).toBe(
      "Something went wrong"
    );
  });
});

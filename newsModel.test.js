const NewsModel = require("./newsModel");

describe("News model", () => {
  const itemOne = "Dog learns to pay taxes";
  const itemTwo = "Are we all doomed?";

  let model;
  beforeEach(() => {
    model = new NewsModel();
    expect(model.getNews()).toEqual([]);
  });

  it("creates and empty array", () => {
    const model = new NewsModel();
    expect(model.getNews()).toEqual([]);
  });

  it("returns an array of news articles", () => {
    const model = new NewsModel();

    model.addNews(itemOne);
    model.addNews(itemTwo);
    expect(model.getNews()).toEqual([itemOne, itemTwo]);
  });

  it("resets the array of news articles", () => {
    const model = new NewsModel();
    const itemOne = "Are trees smarter than us?";
    model.addNews(itemOne);
    model.resetNews();
    expect(model.getNews()).toEqual([]);
  });

  it("setNews replaces the news in the list of news articles", () => {
    model.addNews(itemOne);
    model.setNews([itemOne, itemTwo]);
    expect(model.getNews()).toEqual([itemOne, itemTwo]);
  });
});

const NewsModel = require("./newsModel");

describe("News model", () => {
  it("creates and empty array", () => {
    const model = new NewsModel();
    expect(model.getNews()).toEqual([]);
  });

  it("returns an array of news articles", () => {
    const model = new NewsModel();
    const itemOne = "Dog learns to pay taxes";
    const itemTwo = "Are we all doomed?";
    model.addNews(itemOne);
    model.addNews(itemTwo);
    expect(model.getNews()).toEqual([itemOne, itemTwo]);
  });

  xit("resets the array of news articles", () => {
    const model = new NewsModel();
    const itemOne = "Are trees smarter than us?";
    model.addNews(itemOne);
    model.reset();
    expect(model.getNews()).toEqual([]);
  });
});

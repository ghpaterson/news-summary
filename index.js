const NewsModel = require("./newsModel");
const NewsView = require("./newsView");
const NewsClient = require("./newsClient");

const client = new NewsClient();
const model = new NewsModel();
const view = new NewsView(model, client);

// console.log(model.getNews());

// const itemOne = "Dog learns how to do taxes";
// const itemTwo = "Are trees smarter than us?";
// model.addNews(itemOne);
// model.addNews(itemTwo);
// view.displayNews();
// view.displayNews();
view.displayNewsFromApi();

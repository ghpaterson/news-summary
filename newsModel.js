class NewsModel {
  constructor() {
    this.newsList = [];
  }

  getNews() {
    return this.newsList;
  }

  addNews(newsItem) {
    this.newsList.push(newsItem);
  }
}

module.exports = NewsModel;

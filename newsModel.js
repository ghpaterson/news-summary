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

  resetNews() {
    this.newsList = [];
  }
}

module.exports = NewsModel;

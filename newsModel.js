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

  setNews(news) {
    this.resetNews();
    news.forEach((item) => {
      this.addNews(item);
    });
  }
}

module.exports = NewsModel;

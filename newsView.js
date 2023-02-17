class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayNews() {
    document.querySelectorAll(".news-item").forEach((item) => {
      item.remove();
    });

    const news = this.model.getNews();

    news.forEach((item) => {
      const newNews = document.createElement("div");
      newNews.className = "news-item";
      newNews.textContent = item.webTitle;
      this.mainContainerEl.append(newNews);
    });
  }
  displayNewsFromApi() {
    this.client.loadHeadlines((callback) => {
      this.model.setNews(callback);
      this.displayNews();
    });
  }

  displayError() {
    const errorMessage = document.createElement("div");
    errorMessage.id = "error";
    errorMessage.textContent = "Something went wrong";
    this.mainContainerEl.append(errorMessage);
  }
}

module.exports = NewsView;

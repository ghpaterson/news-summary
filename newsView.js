class NewsView {
  constructor(model) {
    this.model = model;
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
      newNews.textContent = item;
      this.mainContainerEl.append(newNews);
    });
  }
}

module.exports = NewsView;

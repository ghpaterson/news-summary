class NewsClient {
  loadHeadlines(callback) {
    const apiKey = process.env.GUARDIAN_KEY;
    const URL = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`;

    fetch(URL)
      .then((response) => response.json())
      .then((responseData) => {
        callback(responseData);
      });
  }
}

module.exports = NewsClient;

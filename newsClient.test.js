const NewsClient = require("./newsClient");

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)

require("jest-fetch-mock").enableMocks();

describe("NewsClient class", () => {
  it("calls the fetch and loads the lastest news articles", (done) => {
    const client = new NewsClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        status: "ok",
        currentPage: 1,
      })
    );

    client.loadHeadlines((returnedDataFromApi) => {
      expect(returnedDataFromApi.status).toBe("ok");
      expect(returnedDataFromApi.currentPage).toBe(1);

      done();
    });
  });

  it("loadHeadlines catches fetch error", (done) => {
    const client = new NewsClient();

    fetch.mockRejectedValue("Something went wrong");
    client.loadHeadlines(
      () => {},
      (error) => {
        expect(error).toBe("Something went wrong");
        done();
      }
    );
  });
});

const { server } = require("../src/app.js");
const session = require("supertest");
const request = session(server);

describe("Routes testing", () => {
  describe("GET /movies/:name", () => {
    it("Should respond status: 200", async () => {
      const res = await request.get("/movies/cars");
      expect(res.statusCode).toBe(200);
    });

    it('Should respond an object which properties: "Title", "Year", "Poster", "Genre", "imdbID"', async () => {
      const res = await request.get("/movies/batman");
      const props = ["Title", "Year", "Poster", "Genre", "imdbID"];
      props.forEach((p) => expect(res.body).toHaveProperty(p));
    });

    it("If there is an error should respond status 500", async () => {
      const res = await request.get("/movies/---");
      expect(res.statusCode).toBe(404);
    });
  });

  describe("POST /movies/fav ", () => {
    it("Should respond an array", async () => {
      const movie = {
        name: "cars",
        year: "2006",
        id: "654",
        img: "image.jpg",
      };

      const res = await request.post("/movies/fav").send(movie);
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy;
      expect(res.body).toContainEqual(movie);
      /* expect(res.body).toEqual([
        {
          id: "654",
          img: "image.jpg",
          name: "cars",
          year: "2006",
        },
      ]); */
    });

    it("Shouwld return the array with all the movies added", async () => {
      const movieTwo = {
        name: "batman",
        year: "2010",
        id: "123",
        img: "image.jpg",
      };
      const resTwo = await request.post("/movies/fav").send(movieTwo);
      expect(resTwo.body.length).toBe(2);
    });
  });

  describe("DELETE /movies/fav/:id", () => {
    it("If is a not valid Id, should respond favorites movies in an array", async () => {
      const response = await request.delete("/movies/fav/2ad2");
      expect(response.body.length).toBe(2);
    });

    it("If is a valid Id, should respond an array without the movie which has the same Id", async () => {
      const response = await request.delete("/movies/fav/123");
      expect(response.body.length).toBe(1);
    });
  });
});

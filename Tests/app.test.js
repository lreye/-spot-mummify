const app = require('../src/backend/app');
const request = require("supertest");

describe("Test the root path", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
});
//test not working yet
/*describe("Test the auht/welcome path", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/auth/welcome");
        expect(response.statusCode).toBe(200);
    });
});*/
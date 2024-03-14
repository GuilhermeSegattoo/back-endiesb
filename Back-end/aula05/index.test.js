const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test("Deve retornar status 200 no GET", async function(){
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
})
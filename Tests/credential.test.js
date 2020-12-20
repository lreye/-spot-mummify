const credentials = require('../src/backend/middleware/credentials');

test("Testing Credentials Module", () =>{
    expect(credentials.client_id).toBe(process.env.CLIENT_ID);
    expect(credentials.client_secret).toBe(process.env.CLIENT_SECRET);
    expect(credentials.redirect_uri).toBe(process.env.REDIRECTURI);
});

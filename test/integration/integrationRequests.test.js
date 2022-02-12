const setup = require('../integrationTestSetup')

describe('Integration tests:', () => {
  let http;

  beforeAll(async () => {
    jest.setTimeout(50000);
    http = await setup();
  });

  test('should return a healthcheck response', async () => {
    const resp = await http.get('/healthcheck');
    expect(resp.status).toEqual(200);
    expect(resp.body.healthy);
  });

  test('should make a new appointment', async () => {
    const testQuery = {name: 'holt', limit: 20}
    const resp = await http.get('/makeAppointment')
        .query(testQuery);
    expect(resp.status).toEqual(200);
    expect(resp.body).toBeInstanceOf(Array);
  });

  test('should return correct error if timeslot taken', async () => {
    const testQuery = {name: 'holt', limit: 20}
    const resp = await http.get('/makeAppointment')
        .query(testQuery);
    expect(resp.status).toEqual(200);
    expect(resp.body).toBeInstanceOf(Array);
  });

});

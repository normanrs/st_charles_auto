const queries = require('../../src/queries');


describe('queries', () => {

    it('should ensure db connection', async () => {
        const result = await queries.healthcheck();
        expect(result);
    });

    it('should make an appointment', async () => {
        const result = await queries.makeAppointment();
        expect(result).toHaveProperty('zipcode');
    });

});

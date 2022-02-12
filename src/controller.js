const query = require('./queries')

const healthcheck = async (req, res) => {
    try {
        const result = await query.healthcheck()
        res.status(200).send({healthy: result});
      } catch (err) {
        res.status(500).send({error: err.message});
      }
};

const makeAppointment = async (req, res) => {
    try {
        const result = await query.makeAppointment()
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const citySearch = async (req, res) => {
    const { name, limit } = req.query;
    try {
        const result = await query.citySearch(name, limit)
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}

module.exports = { healthcheck, makeAppointment, citySearch }

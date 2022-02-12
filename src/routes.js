const cors = require('cors');
const router = require('express').Router();

const controller = require('.//controller');
router.use(cors());

router.get('/healthcheck', controller.healthcheck);
router.get('/makeAppointment', controller.makeAppointment);

module.exports = router;

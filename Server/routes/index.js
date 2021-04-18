const router = require('express').Router();
const inventory = require('./routes');

router.use('/api/inventory', inventory);

module.exports = router;
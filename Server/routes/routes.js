const router = require('express').Router();

router
    .route('/')
    .get((req, res) => {
        console.log('hit the get route');
        res.json({ success: true });
    })
    .post((req, res) => {
        console.log();
        res.json({ success: true })
    });

module.exports = router;
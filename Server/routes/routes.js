const router = require('express').Router();
const { Inventory } = require('../models');

router
    .route('/')
    .get((req, res) => {
        console.log('hit the get route');
        res.json({ success: true });
    })
    .post((req, res) => {
        console.log();
        res.json({ success: true })

        Inventory
            .create({
                name: req.body.text
            })
            .then(data => {
                console.log({ data });
                res.json({ success: true, data });
            })
            .catch(err => {
                console.log({ err });
                res.json({ success: false });
            })
        
    });

module.exports = router;
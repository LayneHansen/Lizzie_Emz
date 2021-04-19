const router = require('express').Router();
const { InventoryItem } = require('../models');

router
    .route('/')
    .get((req, res) => {
        console.log('hit the get route');
        res.json({ success: true });
    })
    .post((req, res) => {
        console.log({ reqBody: req.body });
        res.json({ success: true })

        InventoryItem
        console.log(InventoryItem);
        .create({
            text: req.body.text
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
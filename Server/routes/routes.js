const router = require('express').Router();
const { Item } = require('../models/index');
const { find } = require('../models/inventory');

router
    .route('/')
    .get((req, res) => {

        Item
        .find({})
        .then(data => {
            console.log('ITEM GET');
            console.log({ data });
            res.json({ success: true });
        })
        .catch(err => {
            console.log({ err });
            res.json({ success: false });
        })
        console.log('hit the get route');
        res.json({ success: true });
    })
    .post((req, res) => {
        console.log('hit the post route');
        res.json({ success: true })

        Item
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

    router
        .route('/:id')
        .delete((req, res) => {
            console.log(req.params);
            
            Item
            .findByIdAndDelete(req.params.id)
            .then(data => {
                console.log({ data });
                res.json({ success: true });
            })
            .catch(err => {
                console.log({ err });
                res.json({ success: false})
            })

    });

        
module.exports = router;
const express = require('express');
const controller = require('../controllers/emaillist');

const router = express.Router();
router.route('').options((res, req, next) => {
    console.log('option request!!!');

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Method', req.get('Access-Control-Request-Headers'));
    res.set('Access-Control-Allow-Method', req.get('Access-Control-Request-Method'));

});
router.route('').get(controller.readAll);
router.route('').post(controller.create);

module.exports = router;
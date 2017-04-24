const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
const dateFormat = require('dateformat');

const processDateParam = (dateParam) => {
    const objToReturn = {
        unix: null,
        natural: null
    };
    if (dateParam) {
        const unixDate = Number(dateParam);
        let dateObj = null;
        const formatDate = (toFormat) => {
            return dateFormat(toFormat, "mmmm d, yyyy", true);
        }
        if (Number.isInteger(unixDate)) {
            dateObj = new Date(unixDate * 1000);
            if (dateObj.toString() !== 'Invalid Date') {
                objToReturn.unix = unixDate;
                objToReturn.natural = formatDate(dateObj);
            }
        } else {
            dateObj = new Date(dateParam);
            if (dateObj.toString() !== 'Invalid Date') {
                objToReturn.unix = dateObj.getTime() / 1000;
                objToReturn.natural = formatDate(dateObj);
            }
        }
    }
    return JSON.stringify(objToReturn);
}

router.get('/', (req, res) => {
  res.render('index');
})

router.get('/:datestring', (req, res) => {
    req.assert('datestring', 'Invalid datestring param').isAlphanumeric();
    req.getValidationResult().then((result) => {
        if (result.isEmpty()) {
            // no errors
            const dateParam = req.params.datestring;
             if (!dateParam) {
                res.sendStatus(400);
            }
            res.send(processDateParam(dateParam));
        } else {
            console.error(result.useFirstErrorOnly().array());
            res.sendStatus(400);
        }
    });
});

module.exports  = router;


    
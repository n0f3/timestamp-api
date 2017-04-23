const express = require('express');
const app = express();
const path = require('path');
const dateFormat = require('dateformat');

app.set('port', (process.env.PORT || 5000));
app.use(express.static('javascript'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:datestring', (req, res) => {
    const dateParam = req.params.datestring;
    if (!dateParam) {
        res.sendStatus(400);
    }
    const objToReturn = {
        unix: null,
        natural: null
    };
    if (dateParam) {
        const unixDate = Number(req.params.datestring);
        const dateObj = null;
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
    res.send(JSON.stringify(objToReturn));
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
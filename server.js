var express = require('express');
var app = express();
var path = require('path');
var dateFormat = require('dateformat');

app.set('port', (process.env.PORT || 5000));
app.use(express.static('javascript'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:datestring', (req, res) => {
    var dateParam = req.params.datestring;
    if (!dateParam) {
        res.sendStatus(400);
    }
    var objToReturn = {
        unix: null,
        natural: null
    };
    if (dateParam) {
        var unixDate = Number(req.params.datestring);
        var dateObj = null;
        if (Number.isInteger(unixDate)) {
            var timeOffset = new Date().getTimezoneOffset() * 60000;
            dateObj = new Date(unixDate * 1000);
            if (dateObj.toString() !== 'Invalid Date') {
                objToReturn.unix = unixDate;
                objToReturn.natural = dateFormat(dateObj, "mmmm d, yyyy", true);
            }
        } else {
            dateObj = new Date(dateParam);
            if (dateObj.toString() !== 'Invalid Date') {
                objToReturn.unix = dateObj.getTime() / 1000;
                objToReturn.natural = dateFormat(dateObj, "mmmm d, yyyy", true);
            }
        }
    }
    res.send(JSON.stringify(objToReturn));
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
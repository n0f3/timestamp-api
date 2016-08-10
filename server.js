var express = require('express');
var app = express();
var path = require('path');

var htmlDir = path.join(__dirname, 'public', 'html');
app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
    res.sendFile(htmlDir + '/index.html');
});

app.get('/:datestring', (req, res) => {
    var dateParam = req.params.datestring;
    var objToReturn = {
        unix: null,
        natural: null
    };
    if(dateParam) {
        var unixDate = Number(req.params.datestring);
        var dateObj = null;
        if(Number.isInteger(unixDate)) {
            dateObj = new Date(unixDate * 1000);
            if(dateObj.toString() !== 'Invalid Date') {
                objToReturn.unix = unixDate;
                objToReturn.natural = dateObj.toDateString();
            }
        } else {
            dateObj = new Date(dateParam);
            if(dateObj.toString() !== 'Invalid Date') {
                objToReturn.unix = dateObj.getTime() / 1000;
                objToReturn.natural = dateObj.toDateString();
            }
        }
    }
    res.send(JSON.stringify(objToReturn));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
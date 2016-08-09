var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(8080, () => {
    console.log('Listening on port 8080');
});
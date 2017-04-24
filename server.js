const express = require('express');
const path = require('path');
const helmet = require('helmet');
const routes = require('./routes/apiRoutes');
const expressValidator = require('express-validator');
const app = express();


app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// security middleware
app.use(helmet());
// request validator middleware
app.use(expressValidator());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});
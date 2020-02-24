const express = require('express');
const app = express();
const logger = require('./services/logger');

app.get('/', (req,res) => {
    logger.log('Detect request by /');
    res.send('Home');
});

app.use(function(req, res, next){
    res.status(404);
    logger.error('User call undefined page');
    // default to plain-text. send()
    res.type('txt').send('Not found');
});

app.listen(3000, () => {
    logger.log('App was started on port 3000');
});
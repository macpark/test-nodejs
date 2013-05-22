var express = require('express'),
    wines = require('./routes/wines'),
    keepWine = require('./routes/keepWine'),
    delWine = require('./routes/delWine');
 
var app = express();
 
app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);
app.get('/keepWine/:id/:value', keepWine.keepWine);
app.get('/delWine/:id', delWine.delWine);
 
app.listen(3000);
console.log('Listening on port 3000...');
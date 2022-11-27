const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/food-trucks-map'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/food-trucks-map/index.html'));
});

app.listen(process.env.PORT || 5000);

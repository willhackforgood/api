const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    console.log(req.body);
    res.send('got it');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
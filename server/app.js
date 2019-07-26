

const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static(`${__dirname}/public`)); // static assets js/css etc..
app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
    console.log("server listening on port", PORT);
});
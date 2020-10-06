const express = require('express');
const app = express();
app.use(express.static('client/public'));
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.get('/tour', function (req, res) {
    res.sendFile('tour.html', { root: './client/views' });
});

app.get('/preferences', function (req, res) {
    res.sendFile('preferences.html', { root: './client/views' });
});

app.get('/about', function (req, res) {
    res.sendFile('about.html', { root: './client/views' });
});

app.get('/2ImageTemplate', function (req, res) {
    res.sendFile('2ImageTemplate.html', { root: './client/views' });
});

app.get('/topHeader', function (req, res) {
    res.sendFile('topHeader.html', { root: './client/views' });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
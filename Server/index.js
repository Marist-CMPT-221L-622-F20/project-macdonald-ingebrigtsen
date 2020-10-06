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

app.get('/4ImageTemplate', function (req, res) {
    res.sendFile('4ImageTemplate.html', { root: './client/views' });
});

app.get('/AlliedSide', function (req, res) {
    res.sendFile('AlliedSide.html', { root: './client/views' });
});

app.get('/lanes', function (req, res) {
    res.sendFile('Lanes1.html', { root: './client/views' });
});

app.get('/jungle', function (req, res) {
    res.sendFile('Jungle2.html', { root: './client/views' });
});

app.get('/river', function (req, res) {
    res.sendFile('River3.html', { root: './client/views' });
});

app.get('/topHeader', function (req, res) {
    res.sendFile('topHeader.html', { root: './client/views' });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
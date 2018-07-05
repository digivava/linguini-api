const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Linguini API time!'));

app.listen(3000, () => console.log('linguini-api listening on port 3000'));


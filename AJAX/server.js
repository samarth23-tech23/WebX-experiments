const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.post('/validate', (req, res) => {
    const { username } = req.body;

    if (username === 'admin') {
        res.status(200).send('Username already exists');
    } else {
        res.status(200).send('Username is available');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

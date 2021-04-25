const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

const router = require('./routers/userManager');

// app.use(express.static("public"))

app.use('/user', router);

app.get('/', (req, res) => {
    console.log('a request!!');
    res.send('FRom the Clouds!!');
})

app.listen(port, () => {
    console.log(`on the heroku port: ${port}`);
})
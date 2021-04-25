const app = require('express')();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('a request!!');
    res.send('FRom the Clouds!!');
})

app.listen(port, () => {
    console.log(`on the heroku port: ${port}`);
})
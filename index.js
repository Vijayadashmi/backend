//import express
const express = require('express');
const userRouter = require('./routers/userRouter');
const portfolioRouter = require('./routers/portfolioRouter');
const utilRouter = require('./routers/util');

const cors = require('cors');


//initalize express
const app = express();
const port = 5000;

//middleware

//parse json data
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use('/user', userRouter );

//middleware
app.use('/portfolio', portfolioRouter);
app.use('/user', userRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'));

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.get('/getall', (req, res) => {
    res.send('response from getall');
});

app.get('/update', (req, res) => {
    res.send('response from update');
});

//getall
//update

//starting the server
app.listen(port, () => { console.log('server started')});
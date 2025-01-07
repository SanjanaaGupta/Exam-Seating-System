const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter'); 
//const ProductRouter = require('./Routes/ProductRouter');
const AuthController = require('./Controller/AuthController');
//const corsOptions = {
  //  origin: 'http://localhost:5000',  // Frontend is running on port 5000
   // methods: 'GET,POST,PUT,DELETE',  // Allow the necessary methods
   // credentials: true,  // Enable cookies if needed
  //};
//app.use(cors(corsOptions));
require('dotenv').config();
require('./Models/db');
const PORT = 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/Routes', AuthRouter);
//app.use('/products', ProductRouter);


app.listen(PORT, (req,res) => {
    console.log(`Server is running on ${PORT}`);
})
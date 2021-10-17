const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();

var corsOptions = {
    origin: 'localhost:4200',
    credentials: true // <-- REQUIRED backend setting
  };
  app.use(cors(corsOptions));

const PORT =  process.env.PORT || 4200;


// explanation of bodyParser @ http://expressjs.com/en/resources/middleware/body-parser.html
app.use(express.urlencoded({extended:false}));
app.use(express.json({limit: '2mb'})); //Controls the maximum request body size


app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
})

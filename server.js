const express = require('express');


const app = express();


const PORT =  process.env.PORT || 8080;

app.use(express.urlencoded({extended:false}));
app.use(express.json({limit: '2mb'})); //Controls the maximum request body size


app.use(express.static(path.join(__dirname, './dist')));

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
})

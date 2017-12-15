const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const port = process.env.PORT || 3000;
require ('dotenv').config()
const controller  = require('./controller'); 
// sim1:74C
const app = express();

app.use(bodyParser.json());
app.use(cors());

// sims1:74D-1
app.get('/api/shelf/:id', controller.getShelf);
// app.get('/api/bin/:id', );
// app.put('/api/bin/:id', );
// app.delete('/api/bin/:id', );
// app.post('/api/bin/:id', )


// sim1: 70C
massive ( process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
    app.listen(port, ()=> {console.log(`Big Brother is listening on port ${port}`);});
})
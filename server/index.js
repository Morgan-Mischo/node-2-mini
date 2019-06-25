let express = require('express');
let bc = require('./controllers/books_controller.js')

let app = express();
app.use(express.json());
app.use(express.static(__dirname + "/../build")); 
let port = 4000; 

app.get('/api/books', bc.read); 

app.post('/api/books', bc.create); 

app.put('/api/books/:id', bc.update); 

app.delete('/api/books/:id', bc.delete); 

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
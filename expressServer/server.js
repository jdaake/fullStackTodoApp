require('./config/config');
const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/users.routes');
const todoRoutes = require('./routes/todo.routes');
const bodyParser = require('body-parser').json();

// path to dist folder (Angular App)
app.use(express.static(__dirname + '../dist/fullStackApp/index.html'))

// bodyparser to use req.body.someKey - npm install body-parser
app.use(bodyParser);

// routes
app.get('/', (req, res) => res.send('Server is running'));
// app.get('/', (req, res) => res.sendFile('/public/index.html'));
// app.get('*', (req, res) => res.redirect('/'));
// Or
// app.get()

// Link to users.routes.js
app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

// redirect route


// port listener
app.listen(port, () => console.log(`Todo App listening on port ${port}!`));

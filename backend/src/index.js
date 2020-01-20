const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors');
const http = require('http');

const routes = require('./routes'); 
const { setupWebsocket } = require('./websocket');


const app = express(); 
const server = http.Server(app);

setupWebsocket(server);


mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-cwshq.mongodb.net/week10?retryWrites=true&w=majority', { // utilizando o mongoose para fazer a conecxao node.js - mongodb
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

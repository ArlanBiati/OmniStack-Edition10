const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors');
const http = require('http');

const routes = require('./routes'); 
const { setupWebsocket } = require('./websocket');


const app = express(); 
const server = http.Server(app);

setupWebsocket(server);


mongoose.connect('url mongoose, { // utilizando o mongoose para fazer a conecxao node.js - mongodb
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

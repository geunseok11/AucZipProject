const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./models/index');
const morgan = require('morgan');

var userRouter = require("./routes/user");
var buildingRouter = require("./routes/building");
var boardRouter = require("./routes/board");

const app = express();

const port = 3040;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
  })
);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use('/user', userRouter);
app.use('/building', buildingRouter);
app.use('/board', boardRouter);

  app.listen(port, () => {
    console.log(`server listen on ${port}`);
  });


module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const models = require('./models/index');
const morgan = require('morgan');

var userRouter = require("./routes/user");
var buildingRouter = require("./routes/building");
var boardRouter = require("./routes/board");
var admindRouter = require("./routes/admin");
models.sequelize.sync().then( () => {
  console.log(" DB 연결 성공");
}).catch(err => {
  console.log("연결 실패");
  console.log(err);
})
const app = express();

const port = 3040;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3040', 'http://cho-first.s3-website.ap-northeast-2.amazonaws.com/'],
    methods: ['GET', 'POST'],
    credentials: true
  })
);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public')); 

app.use('/user', userRouter);
app.use('/building', buildingRouter);
app.use('/board', boardRouter);
app.use('/admin', admindRouter);

app.listen(port, () => {
    console.log(`server listen on ${port}`);
  });


module.exports = app;

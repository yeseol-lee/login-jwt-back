"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//시퀄라이즈로 DB연결
const sequelize = require('./src/models').sequelize;
sequelize.sync();

//라우팅
const router = require("./src/routes");

//정적 경로 추가
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//미들웨어
app.use("/", router);

module.exports = app;
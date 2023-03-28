const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = express();
const porta = 3000;
const router = express.Router();

const users = require('./router/userRouter');

api.use(cors());
api.use(bodyparser.urlencoded({extended: true}))

api.use("/", router);
api.use("/user", users);

api.listen(porta);
console.log('API RUN EXPRESS');
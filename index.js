require("dotenv").config();
const express = require('express');
const sequelize = require("./db");
const router = require('./routes/index.js')
const models = require('./models/userModel')
const app = express()
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT || 5000;
const errorMiddleware = require('./middleware/errorMiddleware')
const path = require('path')


app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, 'static', )))
app.use('/', router)
app.use(errorMiddleware)


const start = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({force: true})

    app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
  } catch(e) {
    console.log(e)
  }
}

start();
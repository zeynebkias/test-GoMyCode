// create express server
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();

const songsRouter = require("./routers/songs.router")

require("dotenv").config();
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
  res.send(`Server Express Connected on ${process.env.PORT}`);
});
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection
db.on('open', () =>  console.log(`connected to database mongodb  ${process.env.URL}`) )
//************************************** */
app.use('/Songs',songsRouter)

//************************************** */
app.listen(process.env.PORT, () =>
  console.log(`server connected on port ${process.env.PORT}`)
);
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let dbConfig = require("./database/db");

const eventApplicationRoute = require("../server/routes/event-application.route");

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true
  })
  .then(
    () => {
      console.log("Database successfully connected!");
    },
    error => {
      console.log("Could not connect to database : " + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use("/", eventApplicationRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Connected to port " + port);
});

app.use(function(err, req, res, next) {
  console.log(res);
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

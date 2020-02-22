let express = require("express"),
  router = express.Router();

let eventApplicationSchema = require("../models/event-application");

router.route("/event-application").post((req, res, next) => {
  eventApplicationSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

module.exports = router;

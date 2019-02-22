const express = require('express');
const router  = express.Router();
const Butterfly = require("../models/Butterfly");

/* GET home page */
router.get('/', (req, res, next) => {
  Butterfly.find()
  .then(butterflies => res.status(200).json({data: butterflies}))
  .catch(err => res.status(500).json({data: err}));
});

router.post("/new", (req, res, next) => {
  const {name, color} = req.body;

  Butterfly.create({name, color})
  .then(butterfly => res.status(200).json({data: butterfly}))
  .catch(err => console.log(err));
})

module.exports = router;

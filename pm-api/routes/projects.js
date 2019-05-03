const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.post("/projects", (req, res) => {
  Project.create({
    title: req.body.title,
    description: req.body.description,
    tasks: []
  })
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.json(error);
    });
});

module.exports = router;

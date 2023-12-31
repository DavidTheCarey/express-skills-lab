var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"
module.exports = router;

router.get("/new", skillsCtrl.new);

router.get("/:id", skillsCtrl.show);

router.get('/', skillsCtrl.index); 

router.post("/", skillsCtrl.create);

router.delete("/:id", skillsCtrl.delete);
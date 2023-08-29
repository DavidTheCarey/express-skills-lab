module.exports = {
    index,
    show
};

function show (req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}

const Skill = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }
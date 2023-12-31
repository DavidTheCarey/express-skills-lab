module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteOne
};

function deleteOne(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect("/skills");
}

function create (req, res){
    Skill.createOne(req.body);
    res.redirect("/skills");
}

function newSkill(req, res){
    res.render('skills/new', { title: 'New Skill' });

}

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
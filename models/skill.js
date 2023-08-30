const skills = [
    {id: 125223, skill: 'Front-End', expert: true},
    {id: 127904, skill: 'Back-End', expert: false},
    {id: 139608, skill: 'Python', expert: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    createOne,
    deleteOne
  };

  function deleteOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx,1);
  }

  function createOne(skill) {
    skill.id = new Date() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }
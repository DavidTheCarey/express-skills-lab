const skills = [
    {id: 125223, skill: 'Front-End', expert: true},
    {id: 127904, skill: 'Back-End', expert: false},
    {id: 139608, skill: 'Python', expert: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }
const { Pet } = require('../models/pet.model')


module.exports.createPet = (request, response) => {
    const { pet_name, pet_type, pet_description, skill_1, skill_2, skill_3 } = request.body
    Pet.create({
        pet_name,
        pet_type,
        pet_description,
        skill_1,
        skill_2,
        skill_3
    })
    .then(newPet => response.json(newPet))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllPets = (request, response) => {
    Pet.find({})
        .then(pets => response.json(pets))
        .catch(err => response.json(err))
}

module.exports.getOnePet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(onePet => response.json(onePet))
        .catch(err => response.json(err))
}

module.exports.updatePet = (request, response) => {
    const {id} = request.params;
    Pet.updateOne({_id:id}, request.body, {new: true})
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.status(400).json(err))
}

module.exports.adoptPet = (request, response) => {
    Pet.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

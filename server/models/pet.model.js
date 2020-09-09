const mongoose = require("mongoose")

const PetSchema = mongoose.Schema({
    pet_name: {
         type: String,
         minlength: [3, "Pet name must be at least 3 characters"]
        },
    pet_type: {
         type: String,
         minlength: [3, "Pet type must be at least 3 characters" ]
        },
    pet_description: {
         type: String,
         minlength: [3, "Pet description must be at least 3 characters"]
        },
    skill_1: {
        type: String,
        },
    skill_2: {
        type: String,
        },
    skill_3: {
        type: String,
        },
},{timestamps: true})



module.exports.Pet = mongoose.model("Pet", PetSchema)

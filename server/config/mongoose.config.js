const mongoose = require('mongoose');
mongoose.set("runValidators", true)
mongoose.connect("mongodb://localhost/pets_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MONGOOSE CONNECTED TO DB"))
    .catch(() => console.log("ERR CONNECTING TO MONGODB", err));
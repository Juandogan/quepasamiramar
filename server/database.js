const mongoose = require ('mongoose');
const URI = 'mongodb+srv://quepasa:UNdianuevo.12@cluster0-c96lb.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(URI)
.then (db => console.log('Base de datos Conectada MONGODB ###### '))
.catch (err => console.error (err));



module.exports = mongoose;


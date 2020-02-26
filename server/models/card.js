const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSchema = new Schema ({
                            
    palabrasClaves:{type : String, required : false},
    titulo:{type : String, required : false},
    imagen:{type : String, required : false},

    imagen2:{type : String, required : false},
    imagen3:{type : String, required : false},
    imagen4:{type : String, required : false},
    imagen5:{type : String, required : false},
    imagen6:{type : String, required : false},
    imagendsc:{type : String, required : false},
    imagendsc2:{type : String, required : false},
    imagendsc3:{type : String, required : false},
    imagendsc4:{type : String, required : false},
    imagendsc5:{type : String, required : false},
    imagendsc6:{type : String, required : false},

    description:{type : String, required : false},
    description2:{type : String, required : false},
    description3:{type : String, required : false},
    description4:{type : String, required : false},
    description5:{type : String, required : false},
    description6:{type : String, required : false},
    creado: { type: Date, default: Date.now },
    pill:{type:String, requiered : false},
    tipo:{type:String, required:false}

    // vistas:{type :Number},
   // likes:{type :Number},
  
   
     
});

module.exports = mongoose.model('CardSchema', CardSchema);


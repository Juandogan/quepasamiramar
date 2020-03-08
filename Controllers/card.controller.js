
const cardCtrl = {};
const CardSchema = require('../models/card')

cardCtrl.pedirCard = async (req, res) => {
    const cardSchema = await CardSchema.find()
    res.json(cardSchema);


};

cardCtrl.crearCard = async (req, res) => {
    const card = new CardSchema(req.body);
    await card.save()
    res.json('Datos Guardados');
};

cardCtrl.pedirUnaCard = async (req, res) => {
    const unacard = await CardSchema.findById(req.params.id);
    res.json(unacard);

};



cardCtrl.editarCard = async (req, res) => {
    const { id } = req.params;
    const card = {
        palabrasClaves: req.body.palabrasClaves,
        titulo: req.body.titulo,
        imagen: req.body.imagen,
        description: req.body.description,
        description2: req.body.description2
    };
    await CardSchema.findByIdAndUpdate(id, { $set: card }, { new: true });
    res.json("actualizado");

};

cardCtrl.borrarCard = async (req, res) => {
    await CardSchema.findByIdAndDelete(req.params.id);
    res.json("eliminado");


};



module.exports = cardCtrl;


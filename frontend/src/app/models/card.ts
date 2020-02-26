export class Card {

    constructor(_id='', palabrasClaves='', titulo='', imagen='',imagen2='',imagen3='',imagen4='',imagen5='',imagen6='', description='', description2='', description3='', description4='', description5='', description6='', pill='', tipo="",imagendsc='',imagendsc2='',imagendsc3='',imagendsc4='',imagendsc5='',imagendsc6='',){

     this._id = _id;
        this.palabrasClaves = palabrasClaves;
        this.titulo = titulo;
        this.imagen = imagen;
        this.imagen = imagen2;
        this.imagen = imagen3;
        this.imagen = imagen4;
        this.imagen = imagen5;
        this.imagen = imagen6;
        this.imagen = imagendsc;
        this.imagen = imagendsc2;
        this.imagen = imagendsc3;
        this.imagen = imagendsc4;
        this.imagen = imagendsc5;
        this.imagen = imagendsc6;

        this.description = description;
        this.description2 = description2;
        this.description2 = description3;
        this.description2 = description4;
        this.description2 = description5;
        this.description2 = description6;

        this.pill = pill;
        this.tipo = tipo;


        

    }



    _id:string
    palabrasClaves: String;
    titulo: String;
    imagen: String;
    imagen2: String;
    imagen3: String;
    imagen4: String;
    imagen5: String;
    imagen6: String;
    imagendsc: String;
    imagendsc2: String;
    imagendsc3: String;
    imagendsc4: String;
    imagendsc5: String;
    imagendsc6: String;

    description: String;
    description2: String;
    description3: String;
    description4: String;
    description5: String;
    description6: String;

    pill:String;
    tipo:String;
}



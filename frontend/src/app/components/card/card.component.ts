import { Component, OnInit } from '@angular/core';
import { CardService} from '../../services/card.service';
import { NgForm } from '@angular/forms';
import { Card } from '../../models/card';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers:[CardService]
})

export class CardComponent implements OnInit {
  

  constructor(
    public cardService:CardService,
    
              
  ) { 
    console.log(this.cardService)

    }
  

  ngOnInit() {  
    
    this.pedirTarjetas();
    this.cardService.oculta=true;
   
    
    this.cardService.cardSeleccionada.imagen="https://scontent.faep7-1.fna.fbcdn.net/v/t1.0-9/17554268_1753441241637786_6166589062135111479_n.jpg?_nc_cat=103&_nc_eui2=AeFpUqhzxg-GlApYJ7tuA9BS7hwSB2Ikrbb5CJKtZohc9hGTFnR1GJH9mXZbAGc4scLc6AxhlavquJhOBIoHOu09JCsQU0sHbLujon6eIJN0fg&_nc_ohc=5dI5s6lWwg4AX8va1GU&_nc_ht=scontent.faep7-1.fna&oh=8a2fa631eb1a0108a23acdb72a372fec&oe=5ECB6C27"
    this.cardService.cardSeleccionada.titulo="Lorem Ipsum is simply dummy typesetting"
    this.cardService.cardSeleccionada.description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  }
 

pedirTarjetas(){
this.cardService.getCard()
.subscribe(res=> {
this.cardService.arregloCard = res as Card[];

console.log(res);


})

}

  


  agregarCard(Form:NgForm){
    this.cardService.postCard(Form.value)
    .subscribe(res => {this.resetForm(Form);      
      this.pedirTarjetas();
      
    });
     


  }
    

  resetForm(Form?: NgForm)
  {
    if (Form){
    Form.reset();
    this.cardService.cardSeleccionada = new Card; 
    }
  }

  borrar(){
    this.cardService.deleteCard('5dded78dcfa13e0a841f343d') .subscribe(res=>{console.log(res)}  )

};


}

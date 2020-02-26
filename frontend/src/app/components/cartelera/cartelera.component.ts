
import { CardService} from '../../services/card.service';
import { Card } from '../../models/card';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  public loader:boolean; //loader 


  constructor(
    public cardService:CardService,
    


  ) { }
  
  ngOnInit() {
    this.pedirTarjetas();

this.loader = true;
    
     

  };
 


  pedirTarjetas(){
    this.cardService.getCard()
    .subscribe(res=> {
    this.cardService.arregloCard  = res as Card[], 
    this.cardService.arregloCard = this.cardService.arregloCard.reverse() //da vuelta el arreglo
  
    this.loader=false; //loader borra div a traves de *NgIf y prosigue la carga de la interfazz.
    console.log(res);
    
        
    });

       
    }
 // filterPost ='';
 // lala ="";


  
get format() { return this.cardService.lala };



    //ordenarCultura(format){
      //  format = this.lala ="Cultura"  ;
     
    //};

    //ordenarTurismo(format){
  
      //format =this.lala ="Turismo"   ;

    //};

    //search(format){
      //format = this.lala = this.filterPost;

    //};
  
  }



  
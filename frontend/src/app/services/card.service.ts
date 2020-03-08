import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Card } from '../models/card';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CardService {



   filterPost:string =''
   lala :string =""

  readonly URL_API = 'http://www.quepasamiramar.com/api/cards/';


  cardSeleccionada : Card;
  arregloCard : Card [] ;
  unaNota : Card;
  public loader : boolean = true; //Variable de gi de carga
  public oculta:boolean; 
  
  constructor(private http: HttpClient) {
          
    this.cardSeleccionada = new Card(); //instancio la cardseleccionada sino tira error por estar vacia al ppio.
    this.unaNota = new Card();
  
 
   }  //instancia modulo httpClient

   
   ordenarPapa(format){
    


    return format = this.lala = format;
    
   }

      
ocultaForm(){
this.oculta =false

}


   
   ordenarTodos(format){
       
    return format = this.lala = "" ;
    
   }
 
    eventosSalidas(format){
       
    return format = this.lala ="Eventos"  ;
    
   }
 
     ordenarCultura(format){
       
         return format = this.lala ="Cultura"  ;
         
        }

        ordenarInsti(format){
       
          return format = this.lala ="Institucional"  ;
          
         }

         ordenarComercial(format){
       
          return format = this.lala ="Comercio"  ;
          
         }
      
         ordenarTurismo(format){
       
          return format = this.lala ="Turismo"  ;
          
         }

         ordenarOfertas(format){
       
          return format = this.lala ="Ofertas"  ;
          
         }

         ordenarShopping(format){
       
          return format = this.lala ="Shopping"  ;
          
         }



       

 
 

   getCard()
  { return this.http.get(this.URL_API)};   //usa el http en el envia una peticion get a la url api

  
  postCard(cardSeleccionada:Card) { 
    return this.http.post(this.URL_API, cardSeleccionada);
  
  };
  
  putCard(cardSeleccionada:Card){
    return this.http.put(this.URL_API + `/${cardSeleccionada._id}`, Card);


  };


  deleteCard(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);



  };


  obtenerUno(_id){
  return this.unaNota = this.arregloCard.find(x => x._id == _id );
  

    
        
       };

         

  getOneCard(_id){
  return this.http.get(this.URL_API + `/${_id}`);
}
  
       

};

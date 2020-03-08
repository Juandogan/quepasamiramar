import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CardService} from '../../services/card.service';
import { Card } from '../../models/card';
import { Location } from '@angular/common'; 



@Component({
  selector: 'app-notacorta',
  templateUrl: './notacorta.component.html',
  styleUrls: ['./notacorta.component.css']
})
export class NotacortaComponent implements OnInit {
  nota: Card;


  constructor(

  private ruta:ActivatedRoute,
  private _servicio:CardService,
  private location: Location,


) 

{ 

  this.nota = new Card();


  this.ruta.params.subscribe(params=>{params['_id'];

  this._servicio.getOneCard(params['_id'])
  .subscribe(res=> {this.nota = res as Card });
  
  
})
  


}  

ngOnInit() {


  window.scroll(0, 0);

  this._servicio.getCard();

  

}

cancel() { 
  this.location.back(); // <-- go back to previous location on cancel 
  } 





  }




import { Component } from '@angular/core';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  buscador(value:any){
    this.filtro = value;
    

  }


  filtro = []
  
}

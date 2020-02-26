import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service'




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   filterPost:string;


  constructor(
    public cardService:CardService,

    ) {
      

   }

  ngOnInit() {
  }




}



import{RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //se agrega lib FormsModule 
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { NotaComponent } from './components/nota/nota.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FiltroCulturaPipe } from './pipes/filtro-cultura.pipe';
import { NotacortaComponent } from './components/notacorta/notacorta.component';




const routes :Routes = [{path: '', component: CarteleraComponent, pathMatch:"full" },

                        {path: 'publicar', component: CardComponent ,pathMatch:"full"  },
                        {path: 'notas/:_id', component: NotaComponent },
                        {path: 'notacorta/:_id', component: NotacortaComponent },
                        {path: '**', redirectTo:'/' ,pathMatch:"full" }
                       ];


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    CarteleraComponent,
    NotaComponent,
    FiltroPipe,
    FiltroCulturaPipe,
    NotacortaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                 //se importa
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

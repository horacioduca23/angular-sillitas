import { Component } from '@angular/core';

//Las 3 patas que siempre tiene que tener un componente: HTML, sccs o css y TS
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//EL COMPONENTE SE LLAMA TITULO, Y LE PONE UN VALOR: sillitas
export class AppComponent {
  title = 'Sillitas!';
}
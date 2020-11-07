import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ChairCartService } from '../chair-cart.service';
import { Chair } from '../chair-list/Chair';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Chair[]>; //$ se pone por convencion, para saber q es 1 observable
  constructor(private cart: ChairCartService) { //inyecto el mismo ss de los dos lados. El mismo mismo ss, la misma instancia tienen los 2
    //cart.cartList.subscribe((observable)=> this.cartList = observable); ---> MODO DE EJEMPLO PARA COMPRENDER
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
 
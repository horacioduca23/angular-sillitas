import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chair } from './chair-list/Chair';

/**
 * Maneja la lógica del carrito.
 */
@Injectable({
  providedIn: 'root'
})
export class ChairCartService { 
  
  private _cartList: Chair[] = [];
  
  cartList: BehaviorSubject<Chair[]> = new BehaviorSubject([]);
  
  constructor() { }  

  addToCart(chair: Chair) {     //agrega los productos compramos a carList, que contiene un arreglo de las futuras sillas que iran en el carrito
    let item: Chair = this._cartList.find((v1) => v1.brand == chair.brand);  //chair recibe por param, busca si hay alguna silla dentro de la lista q sea de la misma marca(seria el nombre)
    if(!item) { //si no esta el item, lo agrego a la lista. Si pongo 2 veces la misma silla, no me la agrega
      this._cartList.push({ ... chair});   //ponete todo lo que tenga chair en un NUEVO obj. Clona el obj.
    } else {
      item.quantity += chair.quantity;  //sumo la cantidad q me trajo cuando hizo clic en comprar de nuevo
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);   //le digo al behaviorsubject q c actualize el valor, q notifiqe q hubo un cambio en mi var priv q c llama _= 
  }                                       //equivale al emitt de eventos
}

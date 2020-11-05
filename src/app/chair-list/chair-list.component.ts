import { Component, OnInit } from '@angular/core';
import { Chair } from './Chair';

@Component({
  selector: 'app-chair-list',
  templateUrl: './chair-list.component.html',
  styleUrls: ['./chair-list.component.scss']
})
export class ChairListComponent implements OnInit {
  //'FAMOSO MOCK'
  chairs: Chair[] = [
    {
      brand: "Daza",
      model: "WN6621GRBK / WN6621REBK",
      material: "Cuero sintético",
      price: 43999,
      image: "assets/img/daza.jpeg",
      stock: 2,
      clearance: false,
      quantity: 0,
    },
    {
      brand: "Desillas",
      model: "Pro Gamer Legend",
      material: "Cuero sintético",
      price: 31075,
      image: "assets/img/desillas.jpeg",
      stock: 3,
      clearance: true,
      quantity: 0,
    },
    {
      brand: "Helitec",
      model: "SILLON GAMER 5727",
      material: "Cuero sintético",
      price: 40899,
      image: "assets/img/helitec.jpeg",
      stock: 1,
      clearance: false,
      quantity: 0,
    },
    {
      brand: "iQual",
      model: "IQ77HQ",
      material: "Cuero sintético",
      price: 31999,
      image: "assets/img/iqual.jpeg",
      stock: 0,
      clearance: false,
      quantity: 0,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(chair: Chair): void {
    if(chair.quantity < chair.stock)
    chair.quantity++;
  }

  downQuantity(chair: Chair): void {
    if(chair.quantity > 0)
      chair.quantity--;
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chair-list',
  templateUrl: './chair-list.component.html',
  styleUrls: ['./chair-list.component.scss']
})
export class ChairListComponent implements OnInit {

  chair = {
    "brand": "Desillas",
    "model": "Pro Gamer Legend",
    "material": "Cuero sintético",
    "price": "$31,075",
    "image": "assets/img/desillas.jpeg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
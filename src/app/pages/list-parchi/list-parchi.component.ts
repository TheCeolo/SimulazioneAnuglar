import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-parchi',
  templateUrl: './list-parchi.component.html',
  styleUrls: ['./list-parchi.component.scss']
})
export class ListParchiComponent implements OnInit {
  listParchi = [{
    id:1,
    place:"Peschiera di Carta",
    name:"Cartaland",
    theme:"Avventura",
    typePark:"Per Bambini",
    image:"assets/park1.jpg"  },
  {
    id:2,
    place:"Peschiera di Carta",
    name:"Cartaland",
    theme:"Avventura",
    typePark:"Per Bambini",
    image:"assets/park1.jpg" 
  },
  {
    id:3,
    place:"Peschiera di Carta",
    name:"Cartaland",
    theme:"Avventura",
    typePark:"Per Bambini",
    image:"assets/park1.jpg" 
  }]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
   title: String;
   mylink: String;

   constructor() { }

  ngOnInit() {
    this.title = 'Status Update';
    this.mylink = 'https://apps.legislature.ky.gov/Lrcsearch#tabs-3';
  }

  scrollTop(event: MouseEvent): void {
    console.log('Scroll window to the top!');
    window.scrollTo(0, 0);


  }


}

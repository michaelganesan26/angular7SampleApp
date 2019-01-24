import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})
export class ServerComponent implements OnInit {
   title =  'This is a server module';
  constructor() { }

  ngOnInit() {
    // this.title  =  (new Date()).toUTCString() + ' Welcome to our server component!!';
     this.title = 'server component';
  }

}

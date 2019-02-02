import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})
export class ServerComponent implements OnInit {
   serverStatus =  'Online';
   serverId = '2234';
  title: String;
  constructor() { }

  ngOnInit() {
    // this.title  =  (new Date()).toUTCString() + ' Welcome to our server component!!';
     this.title = 'server component';
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Time} from '@angular/common';

@Component({
   selector: 'app-servers',
 // selector: '[app-servers]',
//   selector: '.app_servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit, AfterViewInit {
 serverEnabled = false;
 currentTime: string;
 trackMessages: String;
  constructor() { }

  ngAfterViewInit(): void {
    // enable the button
    setTimeout(() => {
      this.serverEnabled = !this.serverEnabled;
    }, 2000);

    setInterval(() => {
            this.currentTime = `Your current time is: ${new Date().toLocaleTimeString()}`;
    }, 1000);
  }

  ngOnInit() {

  }

    trackInputMessage(event: any): void {

        this.trackMessages = (<HTMLInputElement>event.target).value;
    }


}

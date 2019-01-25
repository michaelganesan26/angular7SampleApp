import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverstatus',
  templateUrl: './serverstatus.component.html',
  styleUrls: ['./serverstatus.component.sass']
})
export class ServerstatusComponent implements OnInit {
  serverId = 12;
  serverStatus = 'offline';

  constructor() { }

  ngOnInit() {
  }

  getServerStatus(): string {
      return (this.serverStatus + '  ' + (new Date()).toUTCString());
    }

}

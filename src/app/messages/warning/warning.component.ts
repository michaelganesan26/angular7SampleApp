import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-message',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.sass']
})
export class WarningComponent implements OnInit {
  warningMessage = '';
  
  constructor() { }

  ngOnInit() {
    this.warningMessage = 'Sorry an error has occurred!!';
  }

}

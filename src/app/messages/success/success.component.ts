import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.sass']
})
export class SuccessComponent implements OnInit {
  successMessage = '';
  constructor() { }

  ngOnInit() {
     this.successMessage = 'You have successfully completed the task!';
  }

}

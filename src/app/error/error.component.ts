import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  errorMessage='some error occur, please contact support ...';

  constructor() { }

  ngOnInit(): void {
  }

}

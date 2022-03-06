import { Component, OnInit } from '@angular/core';


export class TODO{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ) { }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new TODO(1, 'Learn to dance', false, new Date()),
    new TODO(2, 'Become expert as full stack developer', false, new Date()),
    new TODO(3, 'Become a good person', false, new Date()),
    new TODO(4, 'Roam in India', false, new Date())
  ]
  // todos1 =[{'id': 1, 'description': 'Learn to dance'},
  // {'id': 2, 'description': 'Become expert as full stack developer'},
  // {'id': 3, 'description': 'Become a good person'}]

  constructor() { }

  ngOnInit(): void {
  }

}

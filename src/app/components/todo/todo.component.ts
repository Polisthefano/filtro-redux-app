import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CompleteallTodo } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private store:Store) { }
  complete:boolean=false;
  ngOnInit(): void {
  }
completeTodos(){
  this.complete=!this.complete
  console.log(this.complete)
this.store.dispatch(new CompleteallTodo(this.complete))
}

}

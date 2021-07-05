import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';
import { words } from '../../../filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  constructor(private store:Store<AppState>) { }
  todos:Todo[]=[]
  filtros:words []=['Todas','Pendientes','Completas','Limpiar Completas'];
  ngOnInit(): void {

    this.store.subscribe(state=>{
      if(state.filtro==this.filtros[1])
      {
      this.todos=state.todos.filter(todo=>todo.completado==false)
      }
      else if(state.filtro==this.filtros[2])
      {
        this.todos=state.todos.filter(todo=>todo.completado==true)
      }
      else{
          this.todos=state.todos
      }
    })
  }

}

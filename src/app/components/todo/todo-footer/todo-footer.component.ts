import { SetFiltroAction, words } from './../../../filter/filter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { BorrarCompletesTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
pendientes:number=0
completas:number=0;
  constructor(private store:Store<AppState>) { }
  filtroActual:words='Todas'
  filtroState:any
  ngOnInit(): void {
    this.store.subscribe(state=>{
      this.filtroState=state.filtro
      let pendientes=state.todos.filter(todo=>(!todo.completado))
      let completadas=state.todos.filter(todo=>(todo.completado==true))
      this.pendientes=pendientes.length
      this.completas=completadas.length
    })
  }

  listarAccion(filtro:words){

    if(this.filtroState==filtro)
    {

      return;
    }
    this.filtroActual==filtro;
    this.store.dispatch(new SetFiltroAction(filtro))
  }

  limpiarCompletesTodos(){
    if(this.completas>0){
      this.store.dispatch(new BorrarCompletesTodos())
    }
  }

}

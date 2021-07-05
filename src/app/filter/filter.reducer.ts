import { State, Store, Action } from '@ngrx/store';
import { Todo } from "../components/todo/models/todo.model";
import * as fromFiltro from './filter.actions'




const estadoInicial:fromFiltro.words='Todas';


export function filterReducer(state:fromFiltro.words=estadoInicial, accion:fromFiltro.acciones):fromFiltro.words{
  // const accion1= accion as fromFiltro.acciones //para solucionar error de acciones imcopatible
switch(accion.type){
  case fromFiltro.SET_FILTRO:
    return accion.estado
  default:
    return state;

}

}

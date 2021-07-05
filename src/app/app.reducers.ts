import { ActionReducerMap, State } from '@ngrx/store';
import { Todo } from './components/todo/models/todo.model';
import { todoReducer } from './components/todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';
import { words } from './filter/filter.actions';

export interface AppState{
  todos:Todo[];
  filtro:words;
}
export const appReducers: ActionReducerMap<AppState,any>={
  todos:todoReducer,
  filtro:filterReducer
}; //combinacion de todo los reducers para ponerlo en el app state

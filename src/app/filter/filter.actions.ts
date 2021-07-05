import { Action } from '@ngrx/store';

export const SET_FILTRO='[Filter] Set Filtro';

export class SetFiltroAction implements Action{
  readonly type=SET_FILTRO;
  constructor (public estado:words){

  }
}

export type words='Todas'|'Pendientes'|'Completas'|'Limpiar Completas'

export type acciones=SetFiltroAction

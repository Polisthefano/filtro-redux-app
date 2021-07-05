import { Action } from "@ngrx/store";

export const AGREGAR_TODO='[TODO] Agregar todo';
export const CAMBIAR_COMPLETADO_TODO='[TODO] Cambiar Completado todo';
export const CAMBIAR_TEXT_TODO='[TODO] Cambiar text todo';
export const BORRAR_TODO='[TODO] Borrar todo'
export const COMPLETE_TODO='[TODO] Complete all todo';
export const BORRAR_COMPLETES_TODO='[TODO] Borrar Completes todo'
export class agregarTodoAction implements Action{
  readonly type = AGREGAR_TODO;
  constructor(public texto:string){
  }
}
export class CambiarCompletadoTodoAction implements Action{
  readonly type = CAMBIAR_COMPLETADO_TODO;
  constructor(public id:number,public estado:boolean){
  }
}
export class CambiarTextTodoAction implements Action{
  readonly type = CAMBIAR_TEXT_TODO
  constructor(public id:number,public text:string){
  }
}
export class BorrarTodoAction implements Action{
  readonly type = BORRAR_TODO;
  constructor(public id:number){
  }
}
export class CompleteallTodo{
readonly type=COMPLETE_TODO
constructor(public estado:boolean)
{

}
}

export class BorrarCompletesTodos{
  readonly type=BORRAR_COMPLETES_TODO
}

export type Acciones=
  agregarTodoAction|CambiarCompletadoTodoAction|CambiarTextTodoAction|BorrarTodoAction|CompleteallTodo|BorrarCompletesTodos;





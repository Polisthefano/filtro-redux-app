import * as fromTodo from './todo.actions'
import { Todo } from './models/todo.model';



const todo1=new Todo('Estudiar')
const todo2=new Todo('Comer')
todo2.completado=true;
const estadoInicial: Todo[]=[todo1,todo2];

export function todoReducer(state:Todo[]=estadoInicial, accion:fromTodo.Acciones):Todo[]{
  switch (accion.type){
    case fromTodo.AGREGAR_TODO:
      const todo=new Todo(accion.texto);
      return [...state,todo]; //con el spred puedo crear una copia pero en otra locacion de memoria y insetarle el valor
    case fromTodo.CAMBIAR_COMPLETADO_TODO:
      return state.map(todoEdit=>{ //como un foreach
        if(todoEdit.id==accion.id){
          return {
            ...todoEdit, //esto retorna un nuevo objeto de tipo todo, pero en otra locacion de memoria
            completado:accion.estado //como lo que haria con un foreach usando spred
          }
          }
        else{
          return {
            ...todoEdit
          }
        }
        })
      case fromTodo.CAMBIAR_TEXT_TODO:
        return state.map(todoAEditar=>{
          if(todoAEditar.id==accion.id)
          {

            return {
              ...todoAEditar,
              texto:accion.text
            }
          }
            else
            {
              return {...todoAEditar}
            }

        })
      case fromTodo.BORRAR_TODO:
       return [...state].filter(todo=>todo.id!=accion.id)
      case fromTodo.COMPLETE_TODO:
        return state.map(todo=>{
          return {...todo,
          completado:accion.estado}
        })

      case fromTodo.BORRAR_COMPLETES_TODO:
          return [...state].filter(todo=>todo.completado!=true)

      default:
        return state;
  }
}

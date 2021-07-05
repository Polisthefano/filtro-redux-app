import { asNativeElements, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CambiarCompletadoTodoAction, CambiarTextTodoAction, BorrarTodoAction } from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo?:Todo; //manejar los signos, ? exclamacion es que puede existir o no y ! es que si o si va a existir
@ViewChild('txtInput') txtInputF!:ElementRef;
check!:FormControl
txtInputForm!:FormControl
editando:boolean=false;
  constructor(private store:Store) {

   }

  ngOnInit(): void {
  this.check=new FormControl(this.todo?.completado)
  this.txtInputForm=new FormControl(this.todo?.texto,Validators.required)

  this.check.valueChanges.subscribe(value=>{
    this.store.dispatch(new CambiarCompletadoTodoAction(this.todo!.id,value))
  })
  }


  editar(){
  this.editando=true;
setTimeout(() => {
// console.log(this.txtInputF.nativeElement.value) de esta forma hago el value como jquery
this.txtInputF.nativeElement.select() //te hace foco y te seleciona todo el texto
}, 300);

  }

  terminarEdicion()
  {
    this.editando=false;
    if(this.txtInputForm.value==this.todo?.texto)
    {
      return;
    }
    if(this.txtInputForm.valid)
    {
        return this.store.dispatch(new CambiarTextTodoAction(this.todo!.id,this.txtInputF.nativeElement.value))
    }

  }

  borrarTodo(){
    console.log(this.todo)
    this.store.dispatch(new BorrarTodoAction(this.todo!.id))
  }

}

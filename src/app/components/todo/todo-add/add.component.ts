import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { agregarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
txtInput:FormControl;
  constructor(private store:Store<AppState>) {
    this.txtInput=new FormControl('',Validators.required)
   }

  ngOnInit(): void {

  }
  agregarTodo()
  {
    if(this.txtInput.invalid)
    {
      this.txtInput.markAsTouched();
      return;
    }

    this.store.dispatch(new agregarTodoAction(this.txtInput.value))
    this.txtInput.setValue('')
    this.txtInput.markAsUntouched()
    return ''
  }

}

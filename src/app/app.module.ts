import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './components/todo/todo.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosListComponent } from './components/todo/todos-list/todos-list.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoFooterComponent } from './components/todo/todo-footer/todo-footer.component';
import { AddComponent } from './components/todo/todo-add/add.component';

import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducers } from './app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodosListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

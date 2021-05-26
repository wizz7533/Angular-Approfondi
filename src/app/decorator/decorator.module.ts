import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorRoutingModule } from './decorator-routing.module';
import { DecoratorComponent } from './decorator.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DecoratorComponent,
    TodolistComponent
  ],
  imports: [
    CommonModule,
    DecoratorRoutingModule,
    FormsModule
  ]
})
export class DecoratorModule { }

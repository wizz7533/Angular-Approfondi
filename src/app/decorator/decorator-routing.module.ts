import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { DecoratorComponent } from './decorator.component';

const routes: Routes = [
  {
    path: '', component: DecoratorComponent, children: [
      { path: "/todo", component: TodolistComponent },
      { path: '', redirectTo: '/decorator/todo'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratorRoutingModule { }

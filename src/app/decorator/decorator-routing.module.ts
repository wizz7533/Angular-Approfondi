import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { DecoratorComponent } from './decorator.component';

const routes: Routes = [
  {
    path: '', component: DecoratorComponent, children: [
      { path: "todo", component: TodolistComponent },
      { path: "view-child", component: ViewChildComponent },
      { path: "content-child", component: ContentChildComponent },
      { path: '', redirectTo: '/decorator/todo'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratorRoutingModule { }

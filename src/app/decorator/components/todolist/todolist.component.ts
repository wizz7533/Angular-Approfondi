import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  task: string = '';
  tasks: string[] = [];

  constructor(private title: Title) { }

  ngOnInit(): void {

    this.title.setTitle('TodoList');

  }

  public addTask(): void{
    if ('' != this.task.trim()) {
      this.tasks.push(this.task);
      this.task = '';
    }
  }

  public removetask(index: number):void {
    this.tasks.splice(index, 1);
  }

}

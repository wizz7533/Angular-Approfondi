import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  task: string = '';
  tasks: string[] = [];

  // static : true -> permet de faire référence à l'élément avant le chargement dela vue
  @ViewChild('inputElement', { static : true }) inputRef?: ElementRef;

  constructor(private title: Title) { }

  ngOnInit(): void {

    this.title.setTitle('TodoList');

  }

  public addTask(): void{
    if ('' != this.task.trim()) {
      this.tasks.push(this.task);
      this.task = '';
      this.inputRef!.nativeElement.focus();
    }
  }

  public removetask(index: number):void {
    this.tasks.splice(index, 1);
  }

}

import { Component, ViewEncapsulation } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'todo_app';
  taskName = '';
  allTasks:Item[] = [
    {title: 'asd', done: 'checked'},
    {title: 'second', done: ''}
  ]
  
  addItem(){
     this.allTasks.push({
      title: this.taskName,
      done: '',
    });
    this.taskName = ''
  }

  deleteItem(index: string){
    this.allTasks.splice(parseInt(index),1);
}}
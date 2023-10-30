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

  allTasks:Item[] = [
    {title: 'asd', done: 'checked'},
    {title: 'second', done: ''}
  ]
  
  addItem(title: string){
     this.allTasks.unshift({
      title,
      done: '',
    });
  }
}

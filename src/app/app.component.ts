import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  todos = [
    {
    label: 'კვება', 
    done: false, 
    priority: 1
    },
    {
      label: 'გადარიცხვა', 
      done: true, 
      priority: 2
      },
      {
        label: ' ლექ.. 12:00', 
        done: false, 
        priority: 3
        },
        {
          label: 'ლექ.. 15:00 ', 
          done: false, 
          priority: 4
          }
       ]
addTodo(newTodoLabel:any){
  var newTodo= {
    label: newTodoLabel,
    priority: 5,
    done: false
  };

  this.todos.push(newTodo)
}

deleteTodo(todo:any){
   this.todos = this.todos.filter(t => t.label !== todo.label)
}
}

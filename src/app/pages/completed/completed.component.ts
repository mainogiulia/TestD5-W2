import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { UsersService } from '../../services/users.service';
import { iTask } from '../../interfaces/i-task';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  tasks: iTask[] = [];

  constructor(private tasksSvc: TasksService, private usersSvc: UsersService) {}

  ngOnInit(): void {
    this.tasksSvc.getTaskUser(this.usersSvc.users);

    this.tasks = this.tasksSvc.tasks.filter((task) => task.completed);
  }
}

import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TasksService } from '../../services/tasks.service';
import { iTask } from '../../interfaces/i-task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tasks: iTask[] = [];

  constructor(private tasksSvc: TasksService, private usersSvc: UsersService) {}

  ngOnInit(): void {
    this.tasksSvc.getTaskUser(this.usersSvc.users);

    this.tasks = this.tasksSvc.tasks;
  }
}

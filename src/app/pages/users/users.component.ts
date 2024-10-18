import { Component } from '@angular/core';
import { iUser } from '../../interfaces/i-user';
import { TasksService } from '../../services/tasks.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: iUser[] = [];

  constructor(private tasksSvc: TasksService, private usersSvc: UsersService) {}

  ngOnInit(): void {
    this.usersSvc.getTasktoAuthor(this.tasksSvc.tasks);

    this.users = this.usersSvc.users;
    console.log(this.users);
  }
}

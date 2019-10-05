import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss']
})
export class RemoveUserComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService,
    private counterService: CounterService) { }

  ngOnInit() {
    this.users = this.userService.addArray;
  }

  onUserAdd(id: number) {
    this.userService.addToArray(id);
    this.counterService.addCounter();
  }

}

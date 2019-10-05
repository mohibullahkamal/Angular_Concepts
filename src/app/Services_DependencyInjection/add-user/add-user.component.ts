import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService,
    private counterService: CounterService) { }

  ngOnInit() {
    this.users = this.userService.removeArray;
  }

  onUserRemove(id: number) {
    this.userService.removeFromArray(id);
    this.counterService.removeCounter();
  }

}

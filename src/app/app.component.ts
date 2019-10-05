import { Component } from '@angular/core';
import { UserService } from './Services_DependencyInjection//user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [UserService]
})
export class AppComponent {

  // constructor(userService: UserService) { }

}

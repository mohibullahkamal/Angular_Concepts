import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  // counter;

  addArray = ['Max', 'Anna'];
  removeArray = ['Brown', 'Joseph'];

  constructor(private counterService: CounterService) {
    // this.counter = counterService;
  }

  addToArray(id: number) {
    this.addArray.push(this.removeArray[id]);
    this.removeArray.splice(id, 1);
    this.counterService.addCounter();
  }

  removeFromArray(id: number) {
    this.removeArray.push(this.addArray[id]);
    this.addArray.splice(id, 1);
    this.counterService.removeCounter();
  }
}

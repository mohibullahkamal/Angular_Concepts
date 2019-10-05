import { Injectable } from '@angular/core';
// import { UserService } from './user.service';

export class CounterService {

  counter = 0;

  // constructor(userService: UserService) { }

  addCounter() {
    this.counter++;
    console.log(`The counter is --> ` + this.counter);
  }

  removeCounter() {
    this.counter--;
    console.log(`The counter is --> ` + this.counter);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './Services_DependencyInjection/add-user/add-user.component';
import { RemoveUserComponent } from './Services_DependencyInjection/remove-user/remove-user.component';
import { CounterService } from './Services_DependencyInjection/counter.service';
import { UserService } from './Services_DependencyInjection/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    RemoveUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CounterService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

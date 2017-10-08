import { Component } from '@angular/core';
// app
import { IUser } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList: IUser[] = [
    {
      name: 'Jane Jurado',
      picture: 'https://d3iw72m71ie81c.cloudfront.net/female-8.jpg',
      email: 'janejurado@dayrep.com',
      emailVerified: true
    },
    {
      name: 'James Summers',
      picture: 'https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg',
      email: 'jamessummers@wappows.com',
      emailVerified: false
    },
    {
      name: 'Sharon Bergin',
      picture: 'https://d3iw72m71ie81c.cloudfront.net/female-49.jpg',
      email: 'sharonbergin@ekirnok.com',
      emailVerified: true
    }
  ]
}

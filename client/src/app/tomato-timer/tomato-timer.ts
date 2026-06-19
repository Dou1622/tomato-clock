import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tomato-timer',
  imports: [],
  templateUrl: './tomato-timer.html',
  styleUrl: './tomato-timer.css',
  standalone: true
})
export class TomatoTimer {

  constructor(private http: HttpClient) { }

  // This is useless, but normally when you start a new project, you get
  // one simple feature that works completey, from the UI, to the Web API,
  // to the business logic (but usually no database stuff).

  

}

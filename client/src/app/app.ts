import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TomatoTimer } from "./tomato-timer/tomato-timer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TomatoTimer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('client');
}

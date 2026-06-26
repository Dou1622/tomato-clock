import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TomatoTimer } from "./tomato-timer/tomato-timer";
import { PomodoroTimer } from "./components/pomodoro-timer/pomodoro-timer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PomodoroTimer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('client');
}

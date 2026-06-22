import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timer } from '../models/timer';

@Component({
  selector: 'app-tomato-timer',
  imports: [CommonModule],
  templateUrl: './tomato-timer.html',
  styleUrls: ['./tomato-timer.css'],
  standalone: true
})
export class TomatoTimer implements OnInit {
  timers = signal<Array<Timer>>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTimers();
  }

  fetchTimers() {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<Timer[]>('/Timer').subscribe({
      next: (data) => {
        this.timers.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message ?? 'Failed to load timers');
        this.loading.set(false);
      }
    });
  }

}

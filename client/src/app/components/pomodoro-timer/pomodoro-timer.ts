import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'
//import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pomodoro-timer',
  imports: [],
  templateUrl: './pomodoro-timer.html',
  styleUrl: './pomodoro-timer.css',
})

export class PomodoroTimer implements OnInit, OnDestroy {
  //Default Pomodoto Time : 25 mins in seconds
  readonly WORK_TIME = 0.2 * 60;
  readonly BREAK_TIME = 0.5 * 60;

  timeLeft: number = this.WORK_TIME;
  //timerInterval: any = null;
  isRunning: boolean = false;
  isBreak: boolean = false;

  // Use RxJS Subscription instead of any for the interval.
  private timerSubscription: Subscription | null = null;

  private audio = new Audio('https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg');

  // Inject ChangeDetectorRef to force UI updates if needed.
  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void { }
    
  // Starts the countdown timer
  startTimer(): void {
    // If the timer already started then return.
    if(this.isRunning) return;

    // Start the timer.
    this.isRunning = true;
    //??
    this.timerSubscription = interval(1000).subscribe(() => {
      if(this.timeLeft > 0){
        this.timeLeft--;
        // Explicitly tell Angular to check for changes and update the view
        this.cdr.detectChanges();
      } else {
        //this.playNotificationSound();
        this.handleTimerExpiry();
        // this.pauseTimer();
        // alert('Timer is up! Take a break.');
        // TODO: Call C# API to save this completed session.
      }
    });
  }

  private handleTimerExpiry(): void {
    this.pauseTimer(); // Pause the timer first

    if(!this.isBreak) {
      alert('Timer is up! Take a break!');
      // TODO: Call C# API to save this completed session.
    }
  }

  // Pause the active timer
  pauseTimer(): void {
    // If this.timeLeft <=0, stop this.isRunning and clear this.timerInterval.
    this.isRunning = false;
    if(this.timerSubscription){
      this.timerSubscription.unsubscribe(); // Properly unsubscribe from RxJS observable
      this.timerSubscription = null;
    }
  }

  // Reset the timer to default 25 mins.
  resetTimer(): void {
    this.pauseTimer();
    this.timeLeft = this.WORK_TIME;
    this.cdr.detectChanges();
  }

  // Helper methos to format seconds into MM:SS
  get formatTime(): string {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  // Clean up the interval when component is destoryed to prevent memory leaks
  ngOnDestroy(): void {
    this.pauseTimer();
  }
}

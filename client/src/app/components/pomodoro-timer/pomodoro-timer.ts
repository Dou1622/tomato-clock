import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pomodoro-timer',
  imports: [],
  templateUrl: './pomodoro-timer.html',
  styleUrl: './pomodoro-timer.css',
})

export class PomodoroTimer implements OnInit, OnDestroy {
  //Default Pomodoto Time : 25 mins in seconds
  readonly DEFAULT_TIME = 25 * 60;
  timeLeft: number = this.DEFAULT_TIME;
  timerInterval: any = null;
  isRunning: boolean = false;

  constructor(){}

  ngOnInit(): void { }
    
    // Starts the countdown timer
  startTimer(): void {
    // If the timer already started then return.
    if(this.isRunning) return;

    // Start the timer.
    this.isRunning = true;
    //??
    this.timerInterval = setInterval(() => {
      if(this.timeLeft > 0){
        this.timeLeft--;
      } else {
        this.pauseTimer();
        alert('Timer is up! Take a break.');
        // TODO: Call C# API to save this completed session.
      }
    }, 1000);
  }

  pauseTimer(): void {
    // If this.timeLeft <=0, stop this.isRunning and clear this.timerInterval.
    this.isRunning = false;
    if(this.timerInterval){
      clearInterval(this.timerInterval);
    }
  }

  resetTimer(): void {
    this.pauseTimer();
    this.timeLeft = this.DEFAULT_TIME;
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

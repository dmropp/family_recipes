import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppRoutingModule],
  template: `
    <div class="container-md">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent { }

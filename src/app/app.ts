import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Voorpagina } from './components/voorpagina/voorpagina';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Voorpagina, CommonModule],
  styleUrl: './app.css',
  template: `
    <div class="flex flex-col h-screen">
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class App {
  protected readonly title = signal('ppgwinten');
}

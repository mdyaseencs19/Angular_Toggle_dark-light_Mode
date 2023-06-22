import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'mat-theming';
  // isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
  isDarkModePreferred = false;
  toggleDarkMode() {
    this.isDarkModePreferred = !this.isDarkModePreferred; 
  }
}

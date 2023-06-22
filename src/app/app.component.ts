import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toggle-dark-light-mode';
  buttonTitle="Dark Mode"
  isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  ngOnInit() {
    if(this.isDarkModePreferred == true) {
      this.buttonTitle="Light Mode"
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('dark-theme');
    }
  }
  
  toggleDarkMode(): void {
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('dark-theme')){
      body.classList.remove('dark-theme');
      this.buttonTitle="Dark Mode"
    } else {
      body.classList.add('dark-theme');
      this.buttonTitle="Light Mode"
    }
  }
}

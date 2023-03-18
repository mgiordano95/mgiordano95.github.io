import { Component } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mauro Giordano';
  
  constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/') {
          this.router.navigate(['/home']);
        }
      }
    });
  }
}
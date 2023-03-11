import { Component } from '@angular/core';

@Component({ /* component decorator */
  selector: 'app-root',
  templateUrl: './app.component.html', /* view component */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-ng-app';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-notification', // html tag <app-notification></app-notification>
  //selector: '[app-notification]', // as html attribute <div app-notification></div>
  //selector: '.app-notification', // as class attribute <div class='app-notification'></div>

  // template: '<div><p>This website uses cookies to provide better user experience</p></div>', /*template property*/
  // styles: ['div{margin: 10px 0px; padding: 10px 20px; background-color: lightgray; text-align: center}', 'p{font-size: 14px}']
  template: `<div class='alert alert-success' [hidden] = 'displayNotification'>
                <p>This website uses cookies to provide better user experience</p>
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>`, /*template property*/
  styles: ['.notification-div{margin: 10px 0px; padding: 10px 20px; background-color: lightgray; text-align: center}', 'p{font-size: 14px}', ".close{float: right; margin-top: -15px;}",
    ".fadeOut {visibility: hidden;opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"] /* styles property */
})
export class NotificationComponent {
  displayNotification: boolean = false;
  closeNotification = () => {
    this.displayNotification = true;
  }
}
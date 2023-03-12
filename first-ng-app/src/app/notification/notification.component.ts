import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  // template: '<div><p>This website uses cookies to provide better user experience</p></div>', /*template property*/
  // styles: ['div{margin: 10px 0px; padding: 10px 20px; background-color: lightgray; text-align: center}', 'p{font-size: 14px}']
  template: `<div class='notification-div'><p>This website uses cookies to provide better user experience</p></div>`, /*template property*/
  styles: ['.notification-div{margin: 10px 0px; padding: 10px 20px; background-color: lightgray; text-align: center}', 'p{font-size: 14px}'] /* styles property */
})
export class NotificationComponent {

}

import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
    sayHello(inputElement: HTMLInputElement) {
        alert(inputElement.value);
    }
}

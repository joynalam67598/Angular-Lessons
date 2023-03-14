<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    ContentChild,
    DoCheck,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
} from '@angular/core';
>>>>>>> Stashed changes

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css'],
})
<<<<<<< Updated upstream
export class DemoComponent {
    sayHello() {
        console.log('Hello from demo');
=======
export class DemoComponent implements AfterContentInit {
    ngAfterContentInit(): void {
        this.paragraphElm.nativeElement.textContent = 'New value';
        console.log(this.paragraphElm);
>>>>>>> Stashed changes
    }
    @ContentChild('para') paragraphElm!: ElementRef;
}

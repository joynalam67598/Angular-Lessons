import {
    AfterContentInit,
    ContentChild,
    ElementRef,
    Component,
} from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements AfterContentInit {
    ngAfterContentInit(): void {
        this.paragraphElm.nativeElement.textContent = 'New value';
        console.log(this.paragraphElm);
    }

    @ContentChild('para') paragraphElm!: ElementRef;
}

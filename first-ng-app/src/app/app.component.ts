import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
    /* component decorator */ selector: 'app-root',
    templateUrl: './app.component.html' /* view component */,
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'view-child';
    @ViewChild('dobInput') dateOfBirth!: ElementRef;
    @ViewChild('ageInput') age!: ElementRef; //"Definite Assignment Assertion" (!) to tell TypeScript that we know this value

    calculateAge() {
        let birthYear = new Date(
            this.dateOfBirth.nativeElement.value
        ).getFullYear();
        let currentYear = new Date().getFullYear();
        this.age.nativeElement.value = currentYear - birthYear;
    }

    @ViewChild(DemoComponent, { static: true }) demoComp!: DemoComponent;
}

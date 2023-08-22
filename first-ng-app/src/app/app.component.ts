import { Component, ElementRef, ViewChild } from '@angular/core';
import { EnrollService } from './services/enroll.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // providers: [EnrollService], //hierarchical dependency injection. child will get this instance.
})
export class AppComponent {
    title = 'view-child';
    constructor(private enrollService: EnrollService) {}
}

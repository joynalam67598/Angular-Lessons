import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.css'],
    providers: [EnrollService], // Override EnrollService instance of AppModule.
})
export class JavascriptComponent {
    title = 'JavaScript';

    constructor(private enrollService: EnrollService) {}

    OnEnroll() {
        this.enrollService.OnEnrollClicked(this.title);
    }
}

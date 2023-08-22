import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.css'],
})
export class JavascriptComponent {
    title = 'JavaScript';

    constructor() {}

    OnEnroll() {
        const enrollService = new EnrollService();
        enrollService.OnEnrollClicked(this.title);
    }
}

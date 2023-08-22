import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    styleUrls: ['./angular.component.css'],
})
export class AngularComponent {
    title = 'Angular';

    OnEnroll() {
        const enrollService = new EnrollService();
        enrollService.OnEnrollClicked(this.title);
    }
}

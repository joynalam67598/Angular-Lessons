import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import { LoggerService } from './services/logger.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService, LoggerService],
})
export class AppComponent implements OnInit {
    title = 'view-child';

    constructor(
        private userService: UserService,
        private loggerServie: LoggerService
    ) {}

    users: { name: string; status: string }[] = [];
    ngOnInit() {
        this.users = this.userService.users;
    }
}

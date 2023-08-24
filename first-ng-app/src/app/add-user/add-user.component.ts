import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css'],
    //providers: [UserService],
})
export class AddUserComponent implements OnInit {
    userName: string = '';
    status: string = 'active';
    constructor(private userService: UserService) {}

    ngOnInit() {}

    AddUser() {
        this.userService.AddUser(this.userName, this.status);
    }
}

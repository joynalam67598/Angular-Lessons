import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {
    constructor(private loggerService: LoggerService) {}
    users = [
        { name: 'Jhon', status: 'active' },
        { name: 'Mark', status: 'inactive' },
        { name: 'Steve', status: 'active' },
    ];

    AddUser(userName: string, status: string) {
        this.users.push({ name: userName, status: status });
        this.loggerService.LogMessage(userName, status);
    }
}

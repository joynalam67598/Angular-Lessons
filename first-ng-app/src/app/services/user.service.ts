export class UserService {
    users = [
        { name: 'Jhon', status: 'active' },
        { name: 'Mark', status: 'inactive' },
        { name: 'Steve', status: 'active' },
    ];

    AddUser(userName: string, status: string) {
        this.users.push({ name: userName, status: status });
    }
}

export class LoggerService {
    LogMessage(name: string, status: string) {
        console.log(
            'A new user with user name "' +
                name +
                '" with status "' +
                status +
                '"'
        );
    }
}

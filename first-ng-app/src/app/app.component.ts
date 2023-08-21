import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'view-child';

    inputText: string = '';
    destroy: boolean = true;
    display: boolean = false;

    onSubmit(inputElement: HTMLInputElement) {
        this.inputText = inputElement.value;
    }

    destoryComponent() {
        this.destroy = false;
    }

    displayNotice() {
        this.display = true;
    }
}

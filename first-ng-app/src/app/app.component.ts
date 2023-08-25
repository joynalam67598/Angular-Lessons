import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'view-child';
    myObservable = new Observable((observer) => {
        //this call back nothing but an observer who is waiting for the data/
        observer.next('1');
        observer.next('2');
        observer.next('3');
        observer.next('4');
    });

    ngOnInit() {
        // this.myObservable.subscribe(next /*callback*/, error, complete);
        this.myObservable.subscribe(
            (data /*resive the data that observable has returned*/) => {
                console.log(data);
            }
        );
    }
}

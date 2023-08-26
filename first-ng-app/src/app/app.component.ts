import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, filter, from, map, of } from 'rxjs';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'view-child';
    myObservableOld = new Observable((observer) => {
        //this call back nothing but an observer who is waiting for the data/
        observer.next('1');
        observer.next('2');
        observer.next('3');
        observer.next('4');
        // observer.error(new Error('Something went wrong'));
        observer.next('5');
        observer.next('6');
        observer.complete();
    });

    array1 = [1, 2, 3, 4, 5];
    array2 = ['A', 'B', 'C'];

    myObservable1 = of(this.array1, this.array2);
    myObservable = from(this.array1);

    // map() -> operator -> takes input and transform it into new observable.
    transformedObservable = this.myObservable.pipe(
        map((value) => {
            return value * 5;
        }),
        filter((val) => val >= 2)
    );

    ngOnInit() {
        // this.myObservable.subscribe(next /*callback*/, error, complete);
        this.myObservable.subscribe(
            (data /*resive the data that observable has returned*/) => {
                console.log(data);
            },
            (error) => {
                /* if error occured overvable is not completed */
                console.log(error.message);
            },
            () => {
                /* can execute after complete the observabel */
                /*after complete observable not data will be emit */
                console.log('Observable has complete emitting al the values.');
            }
        );
    }
}

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[set-background]', // use as a attribute directive
})
export class SetBackgroundDirective implements OnInit {
    constructor(
        private element: /*create a private property for the class*/ ElementRef
    ) {
        this.element = element;
    }

    ngOnInit(): void {
        this.element.nativeElement.style.background = '#CBE6C9';
    }
}

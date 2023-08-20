import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appClass]',
})
export class ClassDirective {
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    @Input() /*set allows use a property as method*/ set display(
        value: Object
    ) {
        let entries = Object.entries(value); //return an array of key value pair.
        // console.log(entries);
        for (let [className, condition] of entries) {
            if (condition) {
                this.renderer.addClass(this.element.nativeElement, className);
            }
        }
    }
}

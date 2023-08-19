import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appBetterhighlight]',
})
export class BetterhighlightDirective {
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    // binding - property of directive class with the property of html element.
    @HostBinding('style.backgroundColor') background: string = 'yellow';
    @HostBinding('style.border') border: string = 'none';

    @HostListener('mouseenter') mouseEnter() {
        this.background = 'pink';
        this.border = 'red 2px solid';
    }
    @HostListener('mouseleave') mouseLeave() {
        this.background = 'yellow';
        this.border = 'none';
    }
}
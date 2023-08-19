import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Renderer2,
    Input,
    OnInit,
} from '@angular/core';

@Directive({
    selector: '[appBetterhighlight]',
})
export class BetterhighlightDirective implements OnInit {
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    @Input() defaultColor: string = 'yellow';
    @Input() highLightColor: string = 'pink';

    // binding - property of directive class with the property of html element.
    @HostBinding('style.backgroundColor') background: string =
        this.defaultColor;
    @HostBinding('style.border') border: string = 'none';

    ngOnInit(): void {
        this.background = this.defaultColor;
    }

    @HostListener('mouseenter') mouseEnter() {
        this.background = this.highLightColor;
        this.border = 'red 2px solid';
    }
    @HostListener('mouseleave') mouseLeave() {
        this.background = this.defaultColor;
        this.border = 'none';
    }
}

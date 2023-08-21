import {
    Directive,
    ElementRef,
    Input,
    Renderer2,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

@Directive({
    selector: '[appIf]',
})
export class IfDirective {
    // what to remove

    // from where to add or  remove.

    constructor(
        private template: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {}

    // @Input('appIf') set displayView(condition: boolean) {
    @Input() set appIf(condition: boolean) {
        if (condition) {
            this.viewContainer.createEmbeddedView(this.template);
        } else {
            this.viewContainer.clear();
        }
    }
}

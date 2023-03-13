import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css'],
})
export class DemoComponent
    implements
        OnInit,
        OnChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
{
    @Input() value: string = 'anguler';

    constructor() {
        //first called;
        console.log('constructor Called');
        console.log(this.value);
        // output anguler because the value is not updated yet by input text;
    }

    ngOnChanges() {
        //second called, called in every input value changed;
        console.log('ngOnChanges Called');
        console.log(this.value);
        // output empty because value updated whith input value. that's why for initialization it is a best place;
    }

    ngOnInit() {
        //3rd called
        console.log('ngOnInit Called');
        console.log(this.value);
        // output empty because value updated whith input value. that's why for initialization it is a best place;
    }

    ngDoCheck(): void {
        //4th; when ever an event happent in evey cycle it called. changed or not.
        console.log('ngDoCheck Called');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit Called');
        //called only onece first detection cycle.
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked Called');
        //called every detection cycle.
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit Called');
        // called when the component view and all its child view fully initialized. called oance;
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked Called');
        //called for every change in the view.
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy Called');
        // called just before the compoent or directived gets destroyed.
        // used to do some clening work.
    }
}

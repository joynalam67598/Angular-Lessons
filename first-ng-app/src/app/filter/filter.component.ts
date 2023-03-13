import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
    @Input('total') all: number = 0; //after adding @Input() decorator it can recive data from the parent.
    @Input() free: number = 0;
    @Input() premium: number = 0;

    selectedRadioButtonValue: string = 'All';

    @Output()
    filterRadioButtonSelectionChange: EventEmitter<string> =
        new EventEmitter<string>();

    onRedioButtonSelectionChanged() {
        this.filterRadioButtonSelectionChange.emit(
            this.selectedRadioButtonValue
        );
        console.log(this.selectedRadioButtonValue);
    }
}

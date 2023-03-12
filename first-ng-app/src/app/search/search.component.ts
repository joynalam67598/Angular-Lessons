import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = "enter somethings";
  changeSearchValue = (eventData: Event) => {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan: string = "Shop anything";
  source: string = "../../assets/img/shop_header.jpg";

  getSlogan = () => {
    return this.slogan;
  }
}

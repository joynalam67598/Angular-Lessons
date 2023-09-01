import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {}
  navigateToHome() {
    // this.route.navigate(['Home']); // Absolute Route
    // this.route.navigateByUrl('Home');  // Absolute Route
    this.route.navigate(['Home'], { relativeTo: this.activatedRoute }); // relative path
  }
}

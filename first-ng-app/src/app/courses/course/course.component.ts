import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit, OnDestroy {
  constructor(
    private service: CoursesService,
    private activatedRoute: ActivatedRoute
  ) {}

  course: any;
  courseId: any;
  RouteParamObs: any;

  ngOnInit(): void {
    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.course = this.service.courses.find((x) => x.id == this.courseId);

    this.RouteParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.service.courses.find((x) => x.id == this.courseId);
    });
  }

  ngOnDestroy() {
    this.RouteParamObs.unsubscribe();
  }
}

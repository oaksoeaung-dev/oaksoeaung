import { Component, computed, inject } from '@angular/core';
import { CourseApi } from '../../services/course-api';
import { sortCoursesBySeqNo } from '../../models/course.model';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-courses-page',
  imports: [CourseCard],
  templateUrl: './courses-page.html',
})
export class CoursesPage {
  protected readonly courseApi = inject(CourseApi);

  private readonly coursesResource = this.courseApi.getCoursesResource();

  protected readonly courses = computed(() => this.coursesResource.value().sort(sortCoursesBySeqNo));

  reload() {
    this.coursesResource.reload();
  }
}

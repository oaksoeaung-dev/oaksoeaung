import { Service } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Course, CourseResponse } from '../models/course.model';

@Service()
export class CourseApi {
  getCoursesResource() {
    return httpResource<Course[]>(() => 'api/courses', {
      parse: (res) => (res as CourseResponse).payload,
      defaultValue: [],
    });
  }
}

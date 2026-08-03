import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { LucidePencilSparkles, LucideView } from '@lucide/angular';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [CardModule, ButtonModule, TagModule, LucideView, LucidePencilSparkles],
  templateUrl: './course-card.html',
  host: { class: 'block h-full' },
})
export class CourseCard {
  course = input.required<Course>();
}

import { Request, Response } from 'express';
import { COURSES } from './db-data';

export function getAllCourses(req: Request, res: Response) {
  setTimeout(() => {
    res.status(200).json({ payload: Object.values(COURSES) });
  }, 400);
}

export function getCourseByUrl(req: Request, res: Response) {
  const ref: any = req.params['id'];

  const courses: any = Object.values(COURSES);

  const course = /^\d+$/.test(ref) ? COURSES[Number(ref)] : courses.find((c: any) => c.url === ref);

  setTimeout(() => {
    res.status(200).json(course);
  }, 800);
}

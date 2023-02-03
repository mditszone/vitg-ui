import { Course } from "./course";
import { Subcourse } from "./subcourse";

export class Student {

  id!: number;
  phoneNumber!: number;
  name: string = "";
  //course!: Course;
  subCourse!: Subcourse;
  gender: string = "";
  email:any;
  registrationStatus: any;
}
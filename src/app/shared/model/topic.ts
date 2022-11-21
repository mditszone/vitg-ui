import { Course } from "./course";
import { Subcourse } from "./subcourse";

export class Topic {
    id!:number;
    name:string="";
    course!:Course;
    subCourse!:Subcourse
}

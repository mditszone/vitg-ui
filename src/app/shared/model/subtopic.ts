import { Course } from "./course";
import { Subcourse } from "./subcourse";
import { Topic } from "./topic";

export class Subtopic {
    id!: number;
    name!: string;
    course!:Course;
    subCourse!:Subcourse;
    topic!:Topic
}

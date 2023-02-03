import { Course } from "./course";
import { Staff } from "./staff";
import { Subcourse } from "./subcourse";
import { Trainer } from "./trainer";
import { TrainerCourse } from "./trainer-course";

export class Batch {
    id!: number;
    courseId:any;
    trainerName:any;
    trainerCourse!:TrainerCourse;
    staff!: Staff;
    organizers !: Staff;
    name: string = "";
    batchCode!: String;
    startDate !: string;
    endDate !: string;
    startTime: string = "";
    endTime: string = "";
}
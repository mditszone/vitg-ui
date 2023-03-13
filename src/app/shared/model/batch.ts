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
    fee!:number;
    duration!:number;
    status!: string;
    staff!: Staff;
    organizers !: Staff;
    name!: string;
    batchCode!: String;
    startDate !: string;
    endDate !: string;
    startTime: string = "";
    endTime: string = "";
}

export class BatchTableInfo {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    trainerName: string;
    actions: any;
}
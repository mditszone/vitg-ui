import { Course } from "./course";
import { Staff } from "./staff";
import { Subcourse } from "./subcourse";
import { Trainer } from "./trainer";

export class Batch {
    id!: number;
    course!: Course;
    subCourse !: Subcourse;
    trainer!: Trainer;
    staff!: Staff;
    organizers !: Staff;
    name: string = "";
    batchCode!: String;
    startDate !: string;
    endDate !: string;
    // startDate : any;
    // endDate : any;

    startTime: string = "";
    endTime: string = "";
}

import { Course } from "./course";

export class Trainer {
    id!: number;
    phoneNumber!: number;
    name: string = "";
    course!: Course;
    gender: string = "";
    email: string="";
    aadharNumber: string = "";
    panCardNumber: string = "";
    address: string = "";
}

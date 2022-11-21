import { Course } from "./course";
import { Subcourse } from "./subcourse";
import { Subtopic } from "./subtopic";
import { Topic } from "./topic";

export class SubTopicConcept {
    //name!:string;
    course!:Course;
    subCourse!:Subcourse;
    topic!:Topic;
    subTopic!:Subtopic;
    description:any;
}

import { Course } from "./course";
import { Subcourse } from "./subcourse";
import { Subtopic } from "./subtopic";
import { Topic } from "./topic";

export class SubTopicConcept {
    id!:number
    name!:string;
    course!:Course;
    subCourse!:Subcourse;
    topic!:Topic;
    subTopic!:Subtopic;
    concept:any;
    trainerPpt:any;
    examples:any;
    youtubeUrl:any;
    githubUrl:any;
    otherUrls:any;
}

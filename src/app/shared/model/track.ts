import { Batch } from "./batch";

export class Track {
    id!: number;
    batch!: Batch;
    date !: string;
    
    startTime : string="";
    endTime : string="";
    remarks: string="";
    topicsCovered: string="";
}

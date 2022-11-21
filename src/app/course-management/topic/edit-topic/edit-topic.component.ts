import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/shared/model/topic';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.scss']
})
export class EditTopicComponent implements OnInit {
  topicDetailsForm: any
  topicdata!: Topic;
  id!: number;
  submitted!:boolean;
  topicForm:any

  constructor(public courseService: CourseService, public route: ActivatedRoute, public formBuilder: FormBuilder, public router:Router) { }

  ngOnInit(): void {
    this.topicDetailsForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: [['',Validators.required]],

    }),
    this.patchValue();
    
  }
  patchValue(){
    this.id = this.route.snapshot.params['id']
    this.courseService.getTopicById(this.id).subscribe((data: Topic) => {
      console.log(data);
      this.topicdata = data;
    });
    this.topicDetailsForm.patchValue({
      id:this.topicdata.id,
      name:this.topicdata.name
    })
  }
  
updateTopic(){
  this.submitted=true;
  if(this.topicDetailsForm.invalid){
    return
  }
  else{
    this.topicForm = this.topicDetailsForm.value

    this.topicdata.id = this.topicForm.id;
    this.topicdata.name = this.topicForm.name

    this.courseService.updateTopic(this.topicdata).subscribe((data:any)=>{
      console.log(data);

      this.router.navigate(['/topic'])
    })
  }
}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subtopic } from 'src/app/shared/model/subtopic';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-edit-sub-topic',
  templateUrl: './edit-sub-topic.component.html',
  styleUrls: ['./edit-sub-topic.component.scss']
})
export class EditSubTopicComponent implements OnInit {
  subTopicDetailsForm: any;
  subTopicdata!: Subtopic;
  data: any;
  id!: number;
  subTopicForm:any;
  submitted!:boolean;

  constructor(public formBuilder: FormBuilder, public route: ActivatedRoute, public courseService: CourseService,
    public router:Router) { }

  ngOnInit(): void {
    this.subTopicDetailsForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]]
    })
    this.patchValue();
  }
  patchValue() {
    this.id = this.route.snapshot.params['id']
    this.courseService.getSubTopicById(this.id).subscribe((data: Subtopic) => {
      this.subTopicdata = data;
    })
    this.subTopicDetailsForm.patchValue({
      id: this.subTopicdata.id,
      name: this.subTopicdata.name
    })
  }
  
  updateSubTopic(){
    this.submitted=true;
    if(this.subTopicDetailsForm.invalid){
      return
    }
    else{
      this.subTopicForm = this.subTopicDetailsForm.value;

      this.subTopicdata.id = this.subTopicForm.id;
      this.subTopicdata.name = this.subTopicForm.name;

      this.courseService.updateSubTopic(this.subTopicdata).subscribe((data:any)=>{
        console.log(data);
        this.router.navigate(['/subtopic'],{skipLocationChange: true})
      })
    }
  }
}

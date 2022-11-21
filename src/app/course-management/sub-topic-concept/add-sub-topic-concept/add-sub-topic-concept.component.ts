import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
import ClassicEditor from '@haifahrul/ckeditor5-build-rich';
@Component({
  selector: 'app-add-sub-topic-concept',
  templateUrl: './add-sub-topic-concept.component.html',
  styleUrls: ['./add-sub-topic-concept.component.scss']
})
export class AddSubTopicConceptComponent implements OnInit {

  subTopicConcept: SubTopicConcept = new SubTopicConcept();
  subTopicConceptDetailsForm: any;
  id!: number;
  data: any;
  submitted!: boolean;
  subTopicConceptForm: any;
  courseList: any;
  subCourseList: any;
  topicList: any;
  subTopicList:any;
  errorMessage: any

  
  
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.subTopicConceptDetailsForm = this.formBuilder.group({
      //name: ['', [Validators.required]],
      course: ['', [Validators.required]],
      subCourse: ['', [Validators.required]],
      topic: ['', [Validators.required]],
      subTopic:['',[Validators.required]],
      description: ['', Validators.required],
    }),
      this.getCoursesList();
      this.getSubCourseList(this.data);
      this.getTopicList(this.data);
      this.getSubTopicList(this.data);
  }

  getCoursesList() {
    this.courseService.getCoursesList().subscribe((data: any) => {
      console.log(data);
      this.courseList = data;
      (error: any) =>
        this.errorMessage = error;
    });
  }
  getSubCourseList(data: any){
    console.log(data.value.id);
    this.route.snapshot.params['id']
    this.courseService.getSubCourseListByCourseId(data.value.id).subscribe((data:SubTopicConcept)=>{
      console.log(data)
      this.subCourseList= data;
      (error: any) =>
      this.errorMessage = error;
    })
  }
  getTopicList(data: any){
    console.log(data)
    this.route.snapshot.params['id']
    
    this.courseService.getTopicListBySubCourseId(data.value.id).subscribe((data:SubTopicConcept)=>{
      console.log(data)
      this.topicList= data;
      (error: any) =>
      this.errorMessage = error;
    })
  }
  getSubTopicList(data: any){
    console.log(data)
    this.route.snapshot.params['id']
    
    this.courseService.getSubTopicListBySubCourseId(data.value.id).subscribe((data:SubTopicConcept)=>{
      console.log(data)
      this.subTopicList= data;
      (error: any) =>
      this.errorMessage = error;
    })
  }

  get f() { return this.subTopicConceptDetailsForm.controls; }

  patchValue() {

    this.subTopicConceptDetailsForm.patchValue({
      //name: this.data.name,
      course: this.data.course,
      subCourse: this.data.subCourse,
      topic: this.data.topic,
      subTopic:this.data.subTopic,
      description:this.data.description,
    });
  }

  createSubTopicConcept() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.subTopicConceptDetailsForm.invalid) {
      return;
    }
    else {
      this.subTopicConceptForm = this.subTopicConceptDetailsForm.value;

      //this.subTopicConcept.name = this.subTopicConceptForm.name;
      this.subTopicConcept.course = this.subTopicConceptForm.course;
      this.subTopicConcept.subCourse = this.subTopicConceptForm.subCourse;
      this.subTopicConcept.topic = this.subTopicConceptForm.topic;
      this.subTopicConcept.subTopic = this.subTopicConceptForm.subTopic;
      this.subTopicConcept.description = this.subTopicConceptForm.description;
      
      this.courseService.createSubTopicConcept(this.subTopicConcept).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/sidebar']);
        
        (error) => {
          this.errorMessage = error.error.message;
          console.log(this.errorMessage)
        }
      });
    }
  }
  editor = ClassicEditor;
  ckdata: any = `<p>Hello, vitg!</p>`;
 
  config = {
    toolbar: [
      'undo',
      'redo',
      '|',
      'heading',
      'fontFamily',
      'fontSize',
      '|',
      'bold',
      'italic',
      'underline',
      'fontColor',
      'fontBackgroundColor',
      'backgroundColor',
      'highlight',
      '|',
      'link',
      'CKFinder',
      'imageUpload',
      'mediaEmbed',
      '|',
      'alignment',
      'bulletedList',
      'numberedList',
      '|',
      'indent',
      'outdent',
      '|',
      'insertTable',
      'blockQuote',
      'specialCharacters',
      
       '|', 'colors', 
      ],
    language: 'id',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side'
      ]
    },
  }
}

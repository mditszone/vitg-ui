import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { StudentSubCourse } from 'src/app/shared/model/student-subCourse';
import { CourseService } from 'src/app/shared/services/course.service';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-student-subcourse',
  templateUrl: './student-subcourse.component.html',
  styleUrls: ['./student-subcourse.component.scss']
})
export class StudentSubcourseComponent implements OnInit {

  studentDetailsForm: FormGroup = new FormGroup({});
  courseList: any
  subCourseListById: any
  errorMessage: any;
  submitted = false;
  studentSubCourse:any = [];
  studentForm: any;
  data: any;
  dropdownSettings: IDropdownSettings = {};
  selected: any = [];
  selectedItems!: any[];
  studentId:any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.studentDetailsForm = this.formBuilder.group({
      course: ['', [Validators.required]],
      subCourse: ['', [Validators.required]],
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.patchValue();
    this.getCoursesList();
    this.getSubCourseList(this.data);
    
  }
  patchValue() {
    this.route.queryParams.subscribe(params => {
      console.log(params["id"]);
      this.studentId = parseInt(params["id"]);
      // this.userService.getStudentById(studentId).subscribe((studentResponse) => {
      //   this.studentSubCourse = studentResponse;
      // })
    })
    this.studentDetailsForm.patchValue({
      subCourse: this.studentSubCourse.subCourseId,
    });
  }
  getCoursesList() {
    this.courseService.getCoursesList().subscribe((data: any) => {
      console.log(data);
      this.courseList = data;
      (error: any) =>
        this.errorMessage = error;
    });
  }

  getSubCourseList(data: any) {
    this.route.snapshot.params['id']
    this.courseService.getSubCourseListByCourseId(data.value.id).subscribe((data: any) => {
      console.log(data);
      this.subCourseListById = data;
      (error: any) =>
        this.errorMessage = error;
    })
  }

  get f() { return this.studentDetailsForm.controls; }

  onItemSelect(event) {
    if (this.selected.length > 0) {
      this.studentSubCourse = this.selected.map((item: any) => ({
        "studentId": this.studentId,
        "subCourseId": item.id,
      })
      )
    }
    console.log(this.studentSubCourse)
  }

  onSelectAll(items: any) {
    this.studentSubCourse = items.map((item: any) => ({
      "studentId": this.studentId,
      "subCourseId": item.id,
    })
    )
  }

  onSubmitUpdateStudent() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.studentDetailsForm.invalid) {
      return;
    }
    else {
      this.studentForm = this.studentDetailsForm.value;

      // this.studentSubCourse.subCourseId = this.studentForm.subCourse
      // console.log(this.studentSubCourse);

      this.userService.updateStudentSubCourse(this.studentSubCourse).subscribe(data => {
        this.studentSubCourse = data;
        console.log(data)
        this.router.navigate(['/student'])
      })
    }
  }
}
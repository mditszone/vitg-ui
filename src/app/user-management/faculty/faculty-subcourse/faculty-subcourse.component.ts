import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CourseService } from 'src/app/shared/services/course.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-faculty-subcourse',
  templateUrl: './faculty-subcourse.component.html',
  styleUrls: ['./faculty-subcourse.component.scss']
})
export class FacultySubcourseComponent implements OnInit {

  facultyDetailsForm: FormGroup = new FormGroup({});
  courseList: any
  subCourseListById: any
  errorMessage: any;
  submitted = false;
  facultySubCourse:any = [];
  facultyForm: any;
  data: any;
  dropdownSettings: IDropdownSettings = {};
  selected: any = [];
  selectedItems!: any[];
  facultyId:any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.facultyDetailsForm = this.formBuilder.group({
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
      this.facultyId = parseInt(params["id"]);
      console.log(this.facultyId)
    })
    this.facultyDetailsForm.patchValue({
      subCourse: this.facultySubCourse.subCourseId,
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

  get f() { return this.facultyDetailsForm.controls; }

  onItemSelect(event) {
    if (this.selected.length > 0) {
      this.facultySubCourse = this.selected.map((item: any) => ({
        "facultyId": this.facultyId,
        "subCourseId": item.id,
      })
      )
    }
    console.log(this.facultySubCourse)
  }

  onSelectAll(items: any) {
    this.facultySubCourse = items.map((item: any) => ({
      "facultyId": this.facultyId,
      "subCourseId": item.id,
    })
    )
  }

  onSubmitUpdateStudent() {
    this.submitted = true;
    if (this.facultyDetailsForm.invalid) {
      return;
    }
    else {
      this.facultyForm = this.facultyDetailsForm.value;

      this.userService.updateFacultySubCourse(this.facultySubCourse).subscribe(data => {
        this.facultySubCourse = data;
        console.log(data)
        this.router.navigate(['/faculty'])
      })
    }
  }
}

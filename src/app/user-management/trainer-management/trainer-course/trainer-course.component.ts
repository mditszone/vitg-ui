import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-trainer-course',
  templateUrl: './trainer-course.component.html',
  styleUrls: ['./trainer-course.component.scss']
})
export class TrainerCourseComponent implements OnInit {

  courseList: any = [];
  errorMessage: any;
  trainerForm: any;
  submitted = false;
  trainerdata: any

  trainerCourse: any = [];
  trainerId: any;
  trainerName: any;
  dropdownSettings: IDropdownSettings = {};
  selected: any = [];
  selectedItems!: any[];

  constructor(private router: Router, private userService: UserService,
    public route: ActivatedRoute, private formBuilder: FormBuilder) { }

  trainerDetailsForm = this.formBuilder.group({
    course: ['', [Validators.required]]
  });
  ngOnInit(): void {
    this.patchValue()
    this.getCourseList();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
  }

  getCourseList() {
    this.userService.getCoursesList().subscribe((res: any) => {
      console.log(res);
      this.courseList = res;
    })
  }
  // patchValue() {
  //   this.route.queryParams.subscribe(params => {
  //     console.log(params["id"]);
  //     this.trainerId = parseInt(params["id"]);
  //     this.trainerName = parseInt(params["name"]);
  //     console.log(this.trainerName)
  //   })
  // }
  patchValue() {
    this.route.queryParams.subscribe(params => {
      console.log(params["id"]);
      this.trainerId = parseInt(params["id"]);
      this.userService.getTrainerById(this.trainerId).subscribe((trainer) => {
        this.trainerdata = trainer;
      })
    })
  }

  onItemSelect(event) {
    if (this.selected.length > 0) {
      this.trainerCourse = this.selected.map((item: any) => ({
        "trainerId": this.trainerdata.id,
        "courseId": item.id,
        "trainerName": this.trainerdata.name
      })
      )
    }
    console.log(this.trainerCourse)
  }

  onSelectAll(items: any) {
    this.trainerCourse = items.map((item: any) => ({
      "trainerId": this.trainerdata.id,
      "courseId": item.id,
      "trainerName": this.trainerdata.name
    })
    )
  }
  updateTrainerInfo() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.trainerDetailsForm.invalid) {
      return;
    }
    else {
      this.trainerForm = this.trainerDetailsForm.value;

      //this.trainerCourse.course = this.trainerForm.course

      //console.log(this.trainerCourse);

      this.userService.createTrainerCourse(this.trainerCourse).subscribe(
        (data: any) => {
          this.router.navigate(['/trainer']);
        });
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Trainer } from 'src/app/shared/model/trainer';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.scss']
})
export class AddTrainerComponent implements OnInit {
  trainer: Trainer = new Trainer();
  submitted = false;
  data: any;
  errorMessage: any;
  trainerForm: any;
  rolesList: any;
  courseList:any = [];
  subCourseListById: any;
  dropdownSettings:IDropdownSettings={};
  //selected:any = [];

  //selectedItems!: any[];

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  trainerDetailsForm = this.formBuilder.group({
    id: [{ value: '', disabled: false }],
    phoneNumber: [{ value: '', disabled: false }],
    name: ['', Validators.required],
    course: ['', [Validators.required]],
    //gender: ['', Validators.required],
    //email: ['', Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")],
    //aadharNumber: ['', [Validators.required,Validators.minLength(12), Validators.maxLength(12), Validators.pattern("^[0-9]*$") ]],
    //panCardNumber: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]*$")]]
  });

  constructor(private router: Router, private userService: UserService,
    public route: ActivatedRoute, private formBuilder: FormBuilder) { }



  ngOnInit() {
    this.patchValue();
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

  // convenience getter for easy access to form fields
  get f() { return this.trainerDetailsForm.controls; }

  patchValue() {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(atob(params['data']));
      console.log(this.data);

      this.trainerDetailsForm.patchValue({
        id: this.data.id,
        phoneNumber: this.data.phoneNumber,
        name: this.data.name,
        course: this.data.course,
        //gender: this.data.gender,
        //email: this.data.email,
        //aadharNumber: this.data.aadharNumber,
        //panCardNumber: this.data.panCardNumber
      });
    });
  }

  updateTrainerInfo() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.trainerDetailsForm.invalid) {
      return;
    }
    else {
      this.trainerForm = this.trainerDetailsForm.value;

      this.trainer.id = this.trainerForm.id;
      this.trainer.phoneNumber = this.trainerForm.phoneNumber,
        this.trainer.name = this.trainerForm.name;
      this.trainer.course = this.trainerForm.course,
        //this.trainer.gender = this.trainerForm.gender,
        //this.trainer.email = this.trainerForm.email,
        //this.trainer.aadharNumber = this.trainerForm.aadharNumber,
        //this.trainer.panCardNumber = this.trainerForm.panCardNumber

        console.log(this.trainer);

      this.userService.updateTrainerinfo(this.trainer).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/trainer']);
        });
    }
  }
  // onItemSelect(event) {
  //   if(this.selected.length>0){
  //     this.trainer.course=this.selected[0].id;
  //   }
  // }

  // onSelectAll(items: any) {
  //   console.log(items);
  // }
}


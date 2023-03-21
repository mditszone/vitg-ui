import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-verify-trainer',
  templateUrl: './verify-trainer.component.html',
  styleUrls: ['./verify-trainer.component.scss']
})
export class VerifyTrainerComponent implements OnInit {

  subscription: Subscription = new Subscription;
  data: any
  pin:string;
  id:number;
  userName:string
  constructor(
    private router: Router,
    private userService: UserService) { }

  onOtpChange(pin: string) {
    this.pin = pin;
  }
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };
  
  handleClick() {
    var data = JSON.parse(sessionStorage.getItem('trainer_pin') || '{}');
    this.id = data.id;
    this.userName = data.userName;

    let obj = {
      id: this.id,
      pin: this.pin,
      userName: this.userName
    }

    this.userService.verifyFacultyLogin(obj).subscribe(response=>{
      console.log(response)
      this.router.navigate(['/materialScreen'])
    })
  }
  ngOnInit(): void {
    
  }
}
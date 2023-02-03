import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trainer } from 'src/app/shared/model/trainer';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {

  trainerdata: Trainer[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private userService: UserService, public route: ActivatedRoute) { }


  ngOnInit(): void {

    this.userService.getAllTrainers().subscribe(data => {
      this.trainerdata = data;
      console.log(this.trainerdata)
    });
  }

}


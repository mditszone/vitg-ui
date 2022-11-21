import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trainer } from 'src/app/shared/model/trainer';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-view-trainer',
  templateUrl: './view-trainer.component.html',
  styleUrls: ['./view-trainer.component.scss']
})
export class ViewTrainerComponent implements OnInit {

  trainerdata: any;
  id!: number;
  errorMessage:string="";

  constructor(private userService: UserService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getTrainerById(this.id).subscribe((data: Trainer) => {
      this.trainerdata = data;
    });
  }

}

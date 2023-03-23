import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.scss']
})
export class ViewFacultyComponent implements OnInit {

  id: number
  data: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.userService.getFacultyById(this.id).subscribe(data => {
      this.data = {
        facultyId: data.id,
        facultyName: data.userName
      }
    })
  }
}
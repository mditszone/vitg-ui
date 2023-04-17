import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { ChatBotData } from 'src/app/shared/model/chatbot-data';
import { Course } from 'src/app/shared/model/course';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { BatchService } from 'src/app/shared/services/batch.service';
import { CourseService } from 'src/app/shared/services/course.service';
import { MenuDataService } from 'src/app/shared/services/menu.data.service';

@Component({
  selector: 'app-material-screen',
  templateUrl: './material-screen.component.html',
  styleUrls: ['./material-screen.component.scss']
})
export class MaterialScreenComponent implements OnInit {
  topicData: any[];
  userName: string;
  showSideMenu: boolean = false;
  linksArray: ChatBotData[] = [{show: false, title: "Courses", heading: "Learning about courses", body: "VIT Global is an online learning and teaching marketplace with over 213000 courses and 57 million students. Learn programming, marketing, data science and more, Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"},
  {show: false, title: "Batches", heading: "Learning about courses", body: "VIT Global is an online learning and teaching marketplace with over 213000 courses and 57 million students. Learn programming, marketing, data science and more, Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"},
  {show: false, title: "Payment", heading: "Learning about courses", body: "VIT Global is an online learning and teaching marketplace with over 213000 courses and 57 million students. Learn programming, marketing, data science and more, Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"}
  ];
  
  constructor(private courseService: CourseService, private router: Router, private menuDataService: MenuDataService) {}

  ngOnInit(): void {
    this.menuDataService.showSideBar.subscribe(val => {
      this.showSideMenu = val;
    });

    this.menuDataService.topicData.subscribe(data => {
      this.topicData = data;
    });

  }

  onClickSubTopic(subTopic: any) {
    this.router.navigate(['/material/material'], { queryParams: { id: subTopic.id } })
  }

}

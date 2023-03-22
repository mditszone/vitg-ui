import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/app/shared/model/course';
import { MenuItem } from 'src/app/shared/model/menu-item';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { Topic } from 'src/app/shared/model/topic';
import { BatchService } from 'src/app/shared/services/batch.service';
import { ChatBotData } from 'src/app/shared/model/chatbot-data';
import { FaqData } from 'src/app/shared/model/FaqData';
import { FaqService } from 'src/app/shared/services/faq.service';

declare var SockJS: any;
declare var Stomp: any;

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss']
})

export class MainscreenComponent implements OnInit {

  linksArray: ChatBotData[] = [{show: false, title: "Courses", heading: "Learning about courses", body: "VIT Global is an online learning and teaching marketplace with over 213000 courses and 57 million students. Learn programming, marketing, data science and more, Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"},
  {show: false, title: "Batches", heading: "Learning about courses", body: "VIT Global is an online learning and teaching marketplace with over 213000 courses and 57 million students. Learn programming, marketing, data science and more, Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"},
  {show: false, title: "Payment", heading: "Learning about courses", body: "VIT Global is an online learning and teaching marketplace with over 213000 courses and 57 million students. Learn programming, marketing, data science and more, Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"}
  ];

  constructor() {}
  ngOnInit(): void {}


}

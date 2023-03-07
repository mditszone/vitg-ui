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
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  
  subscription: any;
  response: any;
  stompClient: any;

  linksArray: ChatBotData[] = [{show: false, title: "Courses", heading: "Learning about courses", body: "VIT Global is an online learning and teaching marketplace with over 213000 courses and 57 million students. Learn programming, marketing, data science and more, Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"},
  {show: false, title: "Batches", heading: "Learning about courses", body: "VIT Global is an online learning and teaching marketplace with over 213000 courses and 57 million students. Learn programming, marketing, data science and more, Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"},
  {show: false, title: "Payment", heading: "Learning about courses", body: "VIT Global is an online learning and teaching marketplace with over 213000 courses and 57 million students. Learn programming, marketing, data science and more, Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"}
  ];

  openMyMenu() {
    this.trigger.openMenu();
  }
  
  closeMyMenu() {
    this.trigger.closeMenu();
  }

  batchMenu: BatchMenu[];

  menuItems: any = [{
    displayName: "ALL COURSES",
    children: []
  }];

  childCourse: any = this.menuItems.children;

  constructor(private courseService: CourseService, 
      private batchService: BatchService,  
      private cdr: ChangeDetectorRef, 
      private faqService: FaqService,
      private router: Router, private zone: NgZone) {
    this.courseService.getAllCourses().subscribe((arrayOfCourse: Course[]) => {
      arrayOfCourse.forEach((course, courseIndex) => {
      console.log("course children", this.menuItems[0].children);

        this.menuItems[0].children[courseIndex] = {
          "displayName": course.name,
          "children": []
        };
        this.courseService.getSubCourseListByCourseId(course.id).subscribe((arrayOfSubCourse: Subcourse[]) => {
          arrayOfSubCourse.forEach((subCourse, subCourseIndex) => {
            this.menuItems[0].children[courseIndex].children[subCourseIndex] = {
              "displayName": subCourse.name,
              "route": 'tabComponent',
              "id": subCourse.id
            };
          });
        });
      });
      
    });

    this.batchService.getAllBatches().subscribe(data => {
      this.batchMenu = data.map(item => { return {"name": item.name, "id": item.id}; });
      console.log("batchMenu", this.batchMenu);
    });

    // stomp.configure({
    //   host:'/ws',
    //   debug:true,
    //   queue:{'init':false}
    // });

    // stomp.startConnect().then(() => {
    //   stomp.done('init');
    //   console.log('connected');
      
    //   //subscribe
    //   this.subscription = stomp.subscribe('/topic', this.response);
      
    //   //send data
    //   stomp.send('destionation',{"data":"data"});
      
    //   //unsubscribe
    //   this.subscription.unsubscribe();
      
    //   //disconnect
    //   stomp.disconnect().then(() => {
    //     console.log( 'Connection closed' )
    //   })
      
    // });



  }

  ngOnInit(): void {

  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }



  batchView() {
    this.router.navigate(['/batchList']);
  }

  onClick() {
    console.log("i am working");
    this.router.navigate(['/tabComponent']);
  }

  moveToTabs(id: any): void { 
    this.zone.run(() => this.router.navigate(['/tabComponent'], { queryParams: { subCourseId: id } }));
  }

  // onClickMaterial() {
  //   console.log("i am working");
  //   this.router.navigate(['/materialSidebar']);
  // }
}


interface BatchMenu {
  id: number;
  name: string;
}
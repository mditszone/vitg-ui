import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { CourseService } from 'src/app/shared/services/course.service';
import { DisableRightClickService } from 'src/app/shared/services/disable-right-click.service';
import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';

@Component({
  selector: 'app-view-example',
  templateUrl: './view-example.component.html',
  styleUrls: ['./view-example.component.scss']
})
export class ViewExampleComponent implements OnInit {

 
  filePath: any;
  fileURL:any
  constructor(public courseService:CourseService,
    public dialogRef: MatDialogRef<DialogDemoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer,
    private rightClickDisable: DisableRightClickService) { }

  ngOnInit(): void {
    console.log(this.data.dataKey)
    this.courseService.getFileFromS3(this.data.dataKey).subscribe((response: any) => {
      let file = new Blob([response], { type: "application/pdf" });
      //this.fileURL = URL.createObjectURL(file);
      this.fileURL = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
      
    this.rightClickDisable.disableRightClick();
    })
  }
  close() {
    this.dialogRef.close('Play Youtube Video Closed');
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { DisableRightClickService } from 'src/app/shared/services/disable-right-click.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  demoUrl: any;
  constructor(public dialogRef: MatDialogRef<DemoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer,
    private rightClickDisable: DisableRightClickService) { }

  ngOnInit(): void {
    this.demoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.data.dataKey}?rel=0&modestbranding=1&autoplay=1&fs=0  `);
      this.rightClickDisable.disableRightClick();
  }
  close() {
    this.dialogRef.close('Play Youtube Video Closed');
  }
}

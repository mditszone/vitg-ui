import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FbShareService } from 'src/app/shared/services/fb-share.service';

@Component({
  selector: 'app-facebook-share',
  templateUrl: './facebook-share.component.html',
  styleUrls: ['./facebook-share.component.scss']
})
export class FacebookShareComponent {

  selectedFiles: File[] | undefined;
  url: any
  inputValue:any

  constructor(private fbService: FbShareService,private router:Router) { }

  onKey(event) {
    this.inputValue = event.target.value;
  }

  public onUploadChangeImage(event: any): void {
    this.selectedFiles = [...event.target.files]
    this.url = this.selectedFiles[0]
  }

  uploadImage() {
    this.fbService.uploadImagetoFb(this.url,this.inputValue).subscribe((response: any) => {
      console.log(response)
      alert("success")
      this.router.navigate(['/fb'])
    })
  }
}

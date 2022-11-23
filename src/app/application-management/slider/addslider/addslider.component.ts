import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Slider } from 'src/app/shared/model/slider';
import { SliderService } from 'src/app/shared/services/slider.service';

@Component({
  selector: 'app-addslider',
  templateUrl: './addslider.component.html',
  styleUrls: ['./addslider.component.scss']
})

export class AddsliderComponent implements OnInit {
  fileName: string;
  slider: Slider = new Slider();
  submitted = false;

  sliderDetailsForm = this.formBuilder.group({
    name: [{ value: '', disabled: false }],
    status: ['', Validators.required],
    image: ['', Validators.required],
    thumbImage: ['', Validators.required],

  });

  constructor(
    private sliderService: SliderService, 
    private router: Router, 
    private formBuilder: FormBuilder
    ) {
      this.fileName = "";
     }

  ngOnInit() {}

  // get file data [ArrayBuffer]
  // conver ArrayBuffer Uint8Array
  // send byte data to backend

  
  public onUploadChange(evt: any): void {
    const file = evt.target.files[0];
    this.fileName = file.name;
    this.slider.name = file.name;
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      //this.slider.image = reader.result;
      const arr = new Uint8Array(<ArrayBuffer>reader.result);
      var newFileArray:Array<number> = [];
      if (arr.length > 0) {
        for (let i:number = 0; i < arr.length; i++) {
          newFileArray.push(arr[i]);
        }
      }
      this.slider.imageBytes = newFileArray;
    }, false);
    
    if (file) {
      //reader.readAsDataURL(file);
      reader.readAsArrayBuffer(file);
    }

  }

  addSlider() {
    this.submitted = true;
    this.slider.status = true;
    console.log(this.slider);
    this.sliderService.addSlider(this.slider).subscribe(data => {
      console.log(data)
      this.router.navigate(['/slider']);
    })
  }

}
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

  slider: Slider = new Slider();
  submitted = false;

  sliderDetailsForm = this.formBuilder.group({
    name: [{ value: '', disabled: false }],
    status: ['', Validators.required],
    image: ['', Validators.required],
    thumbImage: ['', Validators.required],

  });
  constructor(private sliderService: SliderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

  }
  onChange(event) {
    this.slider = event.target.files;

  }


  onUploadChange(evt: any) {
    const file = evt.target.files[0];
    //const extension = file.split('.').pop();
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    let base64textString: any;
    base64textString = ('data:image/jpg;base64,' + btoa(e.target.result));
    let array: Uint8Array[] = [];
    for (var i = 0; i < base64textString.length; i++) {
      array.push(base64textString.charCodeAt(i));
    }

    this.slider.image = array;
    this.slider.thumbImage = array;
    console.log(this.slider.image)
  }
  addSlider() {
    this.submitted = true;
    console.log(this.slider);
    this.sliderService.addSlider(this.slider).subscribe(data => {
      console.log(data)
      this.router.navigate(['/slider']);
    })
  }

}
















  // OnClick of button Upload
  // onUpload() {
  //     this.loading = !this.loading;
  //     console.log(this.file);
  //     this.sliderService.upload(this.file).subscribe(
  //         (event: any) => {
  //           this.router.navigate(['/slider']);
  //             console.log(event)
  //         }
  //     );
  // }


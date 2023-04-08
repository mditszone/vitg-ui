import { Component } from '@angular/core';
import country from 'country-flags-dial-code';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-w-country',
  templateUrl: './login-w-country.component.html',
  styleUrls: ['./login-w-country.component.scss']
})
export class LoginWCountryComponent {
  countryCtrl: FormControl = new FormControl();
  countryFilterCtrl: FormControl = new FormControl();
  phoneNumberCtrl: FormControl = new FormControl();
  submitCtrl: FormControl = new FormControl();
  message: string = "";
  cities: CountryData[];
  filteredCountrys: ReplaySubject<CountryData[]> = new ReplaySubject<CountryData[]>(1);
  protected _onDestroy = new Subject<void>();
  

  constructor(private sanitizer: DomSanitizer, private registrationService: RegistrationService, private router: Router,) {
    console.log(country.getCountryListMap());
    this.cities = Object.entries(country.getCountryListMap()).map(item => item[1] as any)
      .map(item => new CountryData(item.country, item.dialCode, this.sanitizer.bypassSecurityTrustHtml(item.flag)));
    console.log(this.cities);
  }

  ngOnInit() {
    this.countryCtrl.setValue(this.cities[10]);

    this.filteredCountrys.next(this.cities.slice());

    this.countryFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
    this.countryCtrl.valueChanges.subscribe(val => console.log(val));
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  filterBanks() {
    if (!this.cities) {
      return;
    }
    // get the search keyword
    let search = this.countryFilterCtrl.value;
    if (!search) {
      this.filteredCountrys.next(this.cities.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredCountrys.next(
      this.cities.filter(item => item.code.toLowerCase().indexOf(search) > -1)
    );
  }

  submit() {

    if (this.phoneNumberCtrl.invalid) {
      return;
    }
    else {
      console.log("test", this.countryCtrl.value);
      let phonenumber = this.countryCtrl.value.dialCode + this.phoneNumberCtrl.value.trim();
      console.log(phonenumber);

      this.registrationService.sendOTP('/api/auth/register/vitg/student/sendOtp/', `?phoneNumber=${encodeURIComponent(phonenumber)}`).subscribe((data: any) => {
        this.message = data;
        console.log(data)
        console.log(data.phoneNumber);

        sessionStorage.setItem('student_send_otp_response', JSON.stringify(data))
        this.router.navigate(['/verifyStudent']);
      });
    }
  }

}


class CountryData {
  code: string;
  dialCode: string;
  html: any;
  constructor(code: string, dialCode: string, html: any) {
    this.code = code;
    this.dialCode = dialCode;
    this.html = html;
  }
}
import { Component, OnInit } from '@angular/core';
import {
  NgxViaCepService,
  NgxViaCepConfiguration
} from '@ksakira10/ngx-via-cep';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ngx-via-cep',
  templateUrl: './ngx-via-cep.component.html',
  styleUrls: ['./ngx-via-cep.component.scss'],
  providers: [NgxViaCepService]
})
export class NgxViaCepComponent implements OnInit {
  viaCepForm: FormGroup;
  cep: FormControl;
  constructor(
    private httpClient: HttpClient,
    private viaCepService: NgxViaCepService
  ) {
    this.cep = new FormControl(
      { value: '', disabled: false },
      {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(9)
        ],
        updateOn: 'submit'
      }
    );
    this.viaCepForm = new FormGroup({
      cep: this.cep
    });
  }

  ngOnInit() {}

  fetchByCEP(form: FormGroup) {
    if (form.invalid) {
      return;
    }
    const { fetchByCEP } = this.viaCepService;
    const { cep } = form.value;
    fetchByCEP(cep).subscribe(data => console.log(data));
  }
}

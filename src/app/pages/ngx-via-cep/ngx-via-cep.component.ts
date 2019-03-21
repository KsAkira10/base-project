import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxViaCepService } from '@ksakira10/ngx-via-cep';

@Component({
  selector: 'app-ngx-via-cep',
  templateUrl: './ngx-via-cep.component.html',
  styleUrls: ['./ngx-via-cep.component.scss'],
  providers: [NgxViaCepService]
})
export class NgxViaCepComponent implements OnInit {
  viaCepForm: FormGroup;
  cep: FormControl;
  result: string;
  constructor(private viaCepService: NgxViaCepService) {
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
    fetchByCEP(cep).subscribe(
      data => (this.result = JSON.stringify(data, null, 2))
    );
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxViaCepService } from '@ksakira10/ngx-via-cep';

@Component({
  selector: 'app-ngx-via-cep',
  templateUrl: './ngx-via-cep.component.html',
  styleUrls: ['./ngx-via-cep.component.scss'],
  providers: [NgxViaCepService]
})
export class NgxViaCepComponent {
  viaCepForm: FormGroup;
  viaAddressForm: FormGroup;
  cep: FormControl;
  address: FormControl;
  result: string;
  constructor(private viaCepService: NgxViaCepService) {
    this.cep = new FormControl(
      { value: '', disabled: false },
      {
        validators: [
          Validators.required,
          Validators.pattern(/\d{5}\-?\d{3}/),
          Validators.minLength(8),
          Validators.maxLength(9)
        ],
        updateOn: 'change'
      }
    );
    this.address = new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]);
    this.viaCepForm = new FormGroup({
      cep: this.cep
    });
    this.viaAddressForm = new FormGroup({
      address: this.address
    });
  }

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

  fetchByAddress(form: FormGroup) {
    if (form.invalid) {
      return;
    }
    const { fetchByAddressSaoPaulo } = this.viaCepService;
    const { address } = form.value;
    fetchByAddressSaoPaulo(address).subscribe(
      data => (this.result = JSON.stringify(data, null, 2))
    );
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxViaCepService } from '@ksakira10/ngx-via-cep';
import { Subject } from 'rxjs';
import {
  takeUntil,
  tap,
  map,
  switchMap,
  groupBy,
  reduce,
  filter
} from 'rxjs/operators';

@Component({
  selector: 'app-ngx-via-cep',
  templateUrl: './ngx-via-cep.component.html',
  styleUrls: ['./ngx-via-cep.component.scss'],
  providers: [NgxViaCepService]
})
export class NgxViaCepComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<boolean>();
  viaCepForm: FormGroup;
  cep: FormControl;
  endereco: FormControl;
  result: string;
  logradouros: string[] = [];
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
    this.endereco = new FormControl('', {
      validators: [Validators.minLength(5)],
      updateOn: 'change'
    });
    this.viaCepForm = new FormGroup({
      cep: this.cep,
      endereco: this.endereco
    });
  }

  ngOnInit() {
    this.registerValueChanges();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  fetchByCEP(form: FormGroup) {
    if (form.invalid) {
      return;
    }
    const { fetchByCEP } = this.viaCepService;
    const { cep } = form.value;
    fetchByCEP(cep)
      .pipe(
        takeUntil(this.destroy$),
        tap(data => (this.result = JSON.stringify(data, null, 2)))
      )
      .subscribe();
  }

  private registerValueChanges() {
    this.endereco.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        tap(address => {
          const { fetchByAddressSaoPaulo } = this.viaCepService;
          if (address.length >= 5) {
            fetchByAddressSaoPaulo(address)
              .pipe(
                takeUntil(this.destroy$),
                tap(data => (this.result = JSON.stringify(data, null, 2))),
                map(data => {
                  let logradouro;
                  const logradouros = [];
                  data.map(data => {
                    if (!logradouro) {
                      logradouro = data.logradouro;
                      logradouros.push(data.logradouro);
                    } else if (logradouro !== data.logradouro) {
                      logradouro = data.logradouro;
                      logradouros.push(data.logradouro);
                    }
                  });
                  return logradouros;
                }),
                tap(data => (this.logradouros = data))
              )
              .subscribe();
          } else {
            this.logradouros = [];
            this.result = '';
          }
        })
      )
      .subscribe();
  }
}

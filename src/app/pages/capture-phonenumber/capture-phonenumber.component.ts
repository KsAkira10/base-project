import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'capture-phonenumber',
  templateUrl: './capture-phonenumber.component.html',
  styleUrls: ['./capture-phonenumber.component.scss']
})
export class CapturePhonenumberComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();

  form = new FormGroup({
    phoneNumber: new FormControl(
      {
        value: '',
        disabled: false
      },
      {
        validators: [Validators.required],
        updateOn: 'change'
      }
    ),
    submit: new FormControl('Buscar')
  });

  get phoneNumber(): FormControl {
    return this.form.get('phoneNumber') as FormControl;
  }

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.registerActivatedRouteEvent();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private registerActivatedRouteEvent() {
    this.activatedRoute.queryParams
      .pipe(
        takeUntil(this.destroy$),
        tap((queryParams: { phoneNumber: string }) => {
          if (Object.keys(queryParams).length > 0) {
            this.form.patchValue(
              { ...queryParams },
              {
                emitEvent: true
              }
            );
            this.form.disable();
            this.fetchUserByPhone(this.form);
          }
        })
      )
      .subscribe();
  }

  fetchUserByPhone(form: FormGroup) {
    if (form.invalid) {
      alert('Valor Inválido');
      return;
    }

    console.log('Chamou!');
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'capture-phonenumber',
  templateUrl: './capture-phonenumber.component.html',
  styleUrls: ['./capture-phonenumber.component.css']
})
export class CapturePhonenumberComponent implements OnInit, OnDestroy {
  phoneNumber = new FormControl('');
  form = new FormGroup({
    phoneNumber: this.phoneNumber
  });
  destroy$ = new Subject<boolean>();
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.registerActivatedRouteEvent();
  }

  private registerActivatedRouteEvent() {
    this.activatedRoute.queryParams
      .pipe(
        takeUntil(this.destroy$),
        tap(queryParams => {
          if (Object.keys(queryParams).length > 0) {
            this.form.setValue({ ...queryParams });
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

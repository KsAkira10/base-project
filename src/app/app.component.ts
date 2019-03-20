import { Component, OnInit } from '@angular/core';
import { NgxViaCepService } from '@ksakira10/ngx-via-cep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgxViaCepService]
})
export class AppComponent implements OnInit {
  title = 'base-project';

  constructor(private ngxViaCepService: NgxViaCepService) {}

  ngOnInit() {
    this.ngxViaCepService
      .fetchByCEP('03911000')
      .subscribe(data => console.log(data));
  }
}

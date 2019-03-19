import { Component } from '@angular/core';
import { NgxViaCepService } from '@ksakira10/ngx-via-cep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'base-project';

  constructor(private ngxViaCepService: NgxViaCepService) {

  }
}

import { Component, OnInit } from '@angular/core';
import { NgxViaCepService } from '@ksakira10/ngx-via-cep';

@Component({
  selector: 'app-ngx-via-cep',
  templateUrl: './ngx-via-cep.component.html',
  styleUrls: ['./ngx-via-cep.component.sass']
})
export class NgxViaCepComponent implements OnInit {
  constructor(private viaCepService: NgxViaCepService) {}

  ngOnInit() {}
}

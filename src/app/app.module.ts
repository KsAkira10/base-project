import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxViaCepModule } from '@ksakira10/ngx-via-cep';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxViaCepModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './template/template.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CepComponent } from './cep/cep.component';

import { FormatarMoedaPipe } from './formatar-moeda.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FormatarMoedaPipe,
    CepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { CepService } from '../services/cep.service';
import { Cep } from './cep-old';

@Component({
  selector: 'app-cep-old',
  templateUrl: './cep-old.component.html',
  styleUrls: ['./cep-old.component.css']
})
export class CepComponentOld implements OnInit {

  cep = new Cep();

  constructor(private _cepService: CepService) { }

  buscarCep() {
    this._cepService.buscarCepService(this.cep.cep)
      .then((cep: any) => this.cep = cep);
  }

  ngOnInit(): void {
  }

}

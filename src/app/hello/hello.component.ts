import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello', //id do meu componente
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

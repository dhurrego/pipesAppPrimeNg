import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'deivid';
  nombreUpper: string = 'DEIVID';
  nombreCompleto: string = 'DeIvId UrReGo';

  fecha: Date = new Date();

}

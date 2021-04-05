import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public nombre: string = 'dEiVid uRrEgO';
  public valor: number = 1000;
  public obj: Object = {
    nombre: 'Deivid',
    apellido: 'Urrego'
  }

  mostrarNombre(){
    console.log(this.nombre, this.valor);
  }


}

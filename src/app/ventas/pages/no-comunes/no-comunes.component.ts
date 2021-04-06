import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Deivid';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Deivid','Alejandra','Samantha','Juan David','Leydi','Ines'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){

    if(this.nombre == 'Deivid'){
      this.nombre = 'Alejandra';
      this.genero = 'femenino';
    }else{
      this.nombre = 'Deivid';
      this.genero = 'masculino';
    }
    
  }

  borrarCliente(){
    this.clientes.shift(); // Elimina el primer elemento del array
    //this.clientes.pop(); // Elimina el ultimo elemento del array
  }

  // KeyValuePipe

  persona = {
    nombre: 'Deivid',
    edad: 25,
    direccion: 'En algun lugar'
  }

  //JsonPipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}

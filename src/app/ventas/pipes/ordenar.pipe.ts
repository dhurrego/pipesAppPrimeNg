import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor: string = 'sin valor' ): Heroe[] {

    if(ordenarPor === 'nombre'){
      return heroes.sort( ( heroe1, heroe2 ) => (heroe1.nombre > heroe2.nombre) ? 1: -1 );
    }else if(ordenarPor === 'vuela'){
      return heroes.sort( ( heroe1, heroe2 ) => (heroe1.vuela > heroe2.vuela) ? 1: -1 );
    }else if(ordenarPor === 'color'){
      return heroes.sort( ( heroe1, heroe2 ) => heroe1.color - heroe2.color );
    }

    return heroes;
   
  }

}

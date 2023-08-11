import { Component } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMapa = {
    femenino: 'invitarla',
    masculino: 'invitarlo',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juana', 'Lolo'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': ' tenemos un cliente esperando',
    '=2': ' tenemos dos clientes esperando',
    other: ' tenemos # clientes esperando',
  };

  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //keyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa,Canadá',
  };

  //Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Acuaman',
      vuela: false,
    },
  ];

  //Async Pipe

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de  promesa');
    }, 3500);
  });
}

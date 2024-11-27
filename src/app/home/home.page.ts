import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sueldo: number = 0;
  apuesta: number = 0;
  saldo: number = 0;
  jugando: boolean = false;
  resultado: string = '';
  mostrarRuleta: boolean = false;

  constructor() {}

  iniciarJuego() {
    this.saldo = this.sueldo;
    this.mostrarRuleta = false;
  }

  hacerApuesta() {
    if (this.apuesta > 0 && this.apuesta <= this.saldo) {
      this.jugando = true;
      this.mostrarRuleta = true;
      this.resultado = '';

    
      setTimeout(() => {
        this.mostrarRuleta = false;
        this.jugar();
      }, 2000);
    }
  }

  jugar() {
    const gano = Math.random() < 0.5; 
    if (gano) {
      this.saldo += this.apuesta *2-this.apuesta; 
      this.resultado = '¡Ganaste!';
    } else {
      this.saldo -= this.apuesta; 
      this.resultado = 'Perdiste.';
    }
    this.jugando = false;
    this.mostrarRuleta = false;
  }
}
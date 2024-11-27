import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  sueldo: number = 0;
  apuesta: number = 0;
  saldo: number = 0;
  jugando: boolean = false;
  resultado: string = '';
  mostrarRuleta: boolean = false;
  isPortrait: boolean = true;
  ruletaVisible: boolean = false;

  constructor() {}

  ngOnInit() {
    this.detectOrientation();
    window.addEventListener('orientationchange', () => {
      this.detectOrientation();
    });
  }

  detectOrientation() {
    this.isPortrait = window.orientation === 0 || window.orientation === 180;
  }

  iniciarJuego() {
    this.saldo = this.sueldo;
    this.mostrarRuleta = false; 
    this.ruletaVisible = true; 
  }

  hacerApuesta() {
    if (this.apuesta > 0 && this.apuesta <= this.saldo) {
      this.jugando = true;
      this.ruletaVisible = true; 
      this.resultado = '';

      setTimeout(() => {
        this.mostrarRuleta = true;
        this.jugar();
      }, 2000);
    }
  }

  jugar() {
    const gano = Math.random() < 0.5;
    if (gano) {
      this.saldo += this.apuesta * 2 - this.apuesta;
      this.resultado = '¡Ganaste!';
    } else {
      this.saldo -= this.apuesta;
      this.resultado = 'Perdiste.';
    }
    this.jugando = false;
    this.ruletaVisible = false; 
  }
}

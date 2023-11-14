import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = '';

  subscribe(form: NgForm): void {

    if (!this.isValidEmail(this.email)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }

    // Borra el email después de suscribirse
    this.email = '';
    this.showAlert();

  }

  private showAlert(): void {
    alert('Se suscribio correctamente');
  }

  private isValidEmail(email: string): boolean {
    // Expresión regular para verificar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

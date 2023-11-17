import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  fromName: string = '';
  toEmail: string = '';
  message: string = '';

  constructor() { }
  

  sendEmail(): void {
    if (!this.isValidEmail(this.toEmail)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }
    const templateParams = {
      from_name: this.fromName,
      to_email: this.toEmail,
      message: this.message
    };
    

    emailjs.send('service_z3htdrf', 'template_nb2j7mk', templateParams, '9iVXov3EE9qYgzFCW')
      .then((response) => {
        alert('Mensaje enviado con éxito');
        this.fromName = '';
        this.toEmail = '';
        this.message = '';
        // Puedes mostrar un mensaje de éxito aquí
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        // Puedes mostrar un mensaje de error aquí
      });

  }
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
})
export class BotonComponent {
  @Input() textoActivo: string = "";
  @Input() textoInactivo: string = "";
  @Input() claseBtnActivo: string = "";
  @Input() claseBtnInactivo: string = "";
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();
  clicked: boolean = false;
  buttonClass: string = "";
  texto: string = "";

ngOnInit(): void{
  this.buttonClass = this.claseBtnActivo;
  this.texto = this.textoActivo;
}

  onClick(): void {
    this.buttonClicked.emit();
    this.clicked = true;
    this.buttonClass = this.claseBtnInactivo;
    this.texto = this.textoInactivo;
  }

}

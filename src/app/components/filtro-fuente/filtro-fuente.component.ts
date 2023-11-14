import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-fuente',
  templateUrl: './filtro-fuente.component.html',
  styleUrls: ['./filtro-fuente.component.css']
})
export class FiltroFuenteComponent {
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  fuenteSeleccionada = '';


  ngOnInit(): void {
    
  }

  buscarNoticiaPorCategoria(){
    this.parametrosSeleccionados.emit(this.fuenteSeleccionada);
    
  }
}
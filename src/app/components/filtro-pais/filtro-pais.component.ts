import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-pais',
  templateUrl: './filtro-pais.component.html',
  styleUrls: ['./filtro-pais.component.css']
})
export class FiltroPaisComponent implements OnInit{
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  paisSeleccionado = 'ar';

  paises: any[]=[
    {value: 'ar', nombre:'Argentina', img: "argentina"},
    {value: 'br', nombre: 'Brazil'},
    {value: 'co', nombre: 'Colombia'},
    {value: 'mx', nombre: 'Mexico'},
    {value: 'us', nombre: 'USA'}
  ]

  ngOnInit(): void {
    
  }



  buscarNoticiaPorPais(){
    this.parametrosSeleccionados.emit(this.paisSeleccionado);
    
  }
}
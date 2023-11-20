import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-pais',
  templateUrl: './filtro-pais.component.html',
  styleUrls: ['./filtro-pais.component.css']
})
export class FiltroPaisComponent implements OnInit{
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  paisSeleccionado: any;

  paises: any[]=[
    {value: 'ar', nombre:'Argentina', img: 'assets/argentina.png'},
    {value: 'br', nombre: 'Brazil', img: 'assets/brasil.png'},
    {value: 'co', nombre: 'Colombia', img: 'assets/colombia.png'},
    {value: 'mx', nombre: 'Mexico', img: 'assets/mexico.png'},
    {value: 'us', nombre: 'USA', img: 'assets/usa.png'}
  ]

  opcionesAbiertas = false;

  toggleSelect(): void {
    this.opcionesAbiertas = !this.opcionesAbiertas;
  }

  selectCountry(pais: any): void {
    this.paisSeleccionado = pais;
    this.opcionesAbiertas = false;
  }

  ngOnInit(): void {
    
  }



  buscarNoticiaPorPais(){
    if(this.paisSeleccionado == null){
      alert('Selecciones un pais.');
      return;
    }
    this.parametrosSeleccionados.emit(this.paisSeleccionado.value);
    
  }
}
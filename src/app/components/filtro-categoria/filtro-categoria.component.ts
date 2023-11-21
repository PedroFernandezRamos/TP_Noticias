import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-categoria',
  templateUrl: './filtro-categoria.component.html',
  styleUrls: ['./filtro-categoria.component.css']
})
export class FiltroCategoriaComponent implements OnInit{

  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada: any;

  categorias: any[]=[
    {value: 'general', nombre:'General', img: 'assets/general.png'},
    {value: 'business', nombre:'Negocios', img: 'assets/negocios.png'},
    {value: 'sports', nombre:'Deportes', img: 'assets/deporte.png'},
    {value: 'entertainment', nombre:'Entretenimiento', img: 'assets/entretenimiento.png'},
    {value: 'health', nombre:'Salud', img: 'assets/salud.png'},
    {value: 'technology', nombre:'Tecnología', img: 'assets/tecnologia.png'},
  ];

  opcionesAbiertas = false;

  toggleSelect(): void {
    this.opcionesAbiertas = !this.opcionesAbiertas;
  }

  selectCategory(pais: any): void {
    this.categoriaSeleccionada = pais;
    this.opcionesAbiertas = false;
  }

  ngOnInit(): void {
    
  }

  buscarNoticiaPorCategoria(){
    if(this.categoriaSeleccionada == null){
      alert('Seleccione la categoria.');
      return;
    }
    this.parametrosSeleccionados.emit(this.categoriaSeleccionada.value);
    
  }
}

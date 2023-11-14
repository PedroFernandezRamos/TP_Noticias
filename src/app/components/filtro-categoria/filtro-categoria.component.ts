import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-categoria',
  templateUrl: './filtro-categoria.component.html',
  styleUrls: ['./filtro-categoria.component.css']
})
export class FiltroCategoriaComponent {

  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada = 'general';

  categorias: any[]=[
    {value: 'general', nombre:'General'},
    {value: 'business', nombre:'Negocios'},
    {value: 'sports', nombre:'Deportes'},
    {value: 'entertainment', nombre:'Entretenimiento'},
    {value: 'health', nombre:'Salud'},
    {value: 'technology', nombre:'Tecnología'},
  ];

  ngOnInit(): void {
    
  }

  buscarNoticiaPorCategoria(){
    this.parametrosSeleccionados.emit(this.categoriaSeleccionada);
    
  }
}

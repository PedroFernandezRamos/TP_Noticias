import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit{
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

  paisSeleccionado = 'ar';

  paises: any[]=[
    {value: 'ar', nombre:'Argentina'},
    {value: 'br', nombre: 'Brazil'},
    {value: 'co', nombre: 'Colombia'},
    {value: 'mx', nombre: 'Mexico'},
    {value: 'us', nombre: 'USA'}
  ]

  ngOnInit(): void {
    
  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria : this.categoriaSeleccionada,
      pais : this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS);
    
  }
}

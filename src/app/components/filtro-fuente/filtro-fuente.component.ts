import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro-fuente',
  templateUrl: './filtro-fuente.component.html',
  styleUrls: ['./filtro-fuente.component.css']
})
export class FiltroFuenteComponent implements OnInit{

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  formulario: FormGroup = this.formBuilder.group({
    fuente:['', Validators.required]
  })

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  buscarNoticiaPorFuente(){
    if(this.validar('fuente', 'required')  || this.formulario.invalid){
      alert('El campo es requerido.');
      return;
    }

    let fuenteSeleccionada : string= this.formulario.controls['fuente'].value;
    fuenteSeleccionada= fuenteSeleccionada.toLowerCase().replace(/^\s+|\s+$/g, '').replace(/\s+/g, '-');   /// reemplaza los espacios por - y pone todo en minuscula para que encuentre la fuente
    console.log(fuenteSeleccionada);

    this.parametrosSeleccionados.emit(fuenteSeleccionada);
    
  }

  validar(field: string, error: string){
    return this.formulario.controls[field].getError(error)
    &&
    this.formulario.controls[field].touched
  }
}
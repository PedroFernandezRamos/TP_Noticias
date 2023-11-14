import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro-palabra-clave',
  templateUrl: './filtro-palabra-clave.component.html',
  styleUrls: ['./filtro-palabra-clave.component.css']
})
export class FiltroPalabraClaveComponent implements OnInit{

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  formulario: FormGroup = this.formBuilder.group({
    palabraClave:['', [Validators.required, Validators.minLength(3)]]
  })

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  buscarNoticiaPorPalabraClave(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched()
      return;
    }
    this.parametrosSeleccionados.emit(this.formulario.controls['palabraClave'].value);
    
  }

  validar(field: string, error: string){
    return this.formulario.controls[field].getError(error)
    &&
    this.formulario.controls[field].touched
  }
}
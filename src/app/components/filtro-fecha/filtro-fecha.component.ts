import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro-fecha',
  templateUrl: './filtro-fecha.component.html',
  styleUrls: ['./filtro-fecha.component.css']
})
export class FiltroFechaComponent implements OnInit{

  @Output() parametrosSeleccionados = new EventEmitter<{fechaInicio: string, fechaFinal: string}>();

  formulario: FormGroup = this.formBuilder.group({
    fechaInicio:['', Validators.required],
    fechaFinal:['', Validators.required]
  })

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  buscarNoticiaPorFecha(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched()
      return;
    }

    this.parametrosSeleccionados.emit({fechaInicio: this.formulario.controls['fechaInicio'].value, fechaFinal: this.formulario.controls['fechaFinal'].value});
    
  }

  validar(field: string, error: string){
    return this.formulario.controls[field].getError(error)
    &&
    this.formulario.controls[field].touched
  }
}
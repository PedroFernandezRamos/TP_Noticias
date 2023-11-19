import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro-fecha',
  templateUrl: './filtro-fecha.component.html',
  styleUrls: ['./filtro-fecha.component.css']
})
export class FiltroFechaComponent implements OnInit{

  
  fechaActual: Date = new Date();
  fechaLimite: Date = new Date(this.fechaActual);


  @Output() parametrosSeleccionados = new EventEmitter<{fechaInicio: string, fechaFinal: string}>();

  formulario: FormGroup = this.formBuilder.group({
    fechaInicio:['', Validators.required],
    fechaFinal:['', Validators.required]
  })

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fechaLimite.setMonth(this.fechaLimite.getMonth() - 1);
  }

  buscarNoticiaPorFecha(){

    const formatoFechaActual: string = `${this.fechaActual.getFullYear()}-${(this.fechaActual.getMonth() + 1).toString().padStart(2, '0')}-${this.fechaActual.getDate().toString().padStart(2, '0')}`;
    const formatoFechaLimite: string = `${this.fechaLimite.getFullYear()}-${(this.fechaLimite.getMonth() + 1).toString().padStart(2, '0')}-${this.fechaLimite.getDate().toString().padStart(2, '0')}`;

    if(this.validar('fechaInicio', 'required')){
      alert('Completar fecha de inicio.');
      return;
    }

    if(this.validar('fechaFinal', 'required')){
      alert('Completar fecha final.');
      return;
    }

    if(this.formulario.controls['fechaFinal'].value < this.formulario.controls['fechaInicio'].value ){
      alert('La fecha final debe ser mayor a la de inicio');
      return;
    }

    if(formatoFechaLimite > this.formulario.controls['fechaInicio'].value ){
      alert('La fecha de inicio limite es desde el '+formatoFechaLimite.split('-')[2]+' de '+(this.fechaLimite.getMonth() + 1)+' del '+this.fechaLimite.getFullYear());
      return;
    }

    if(formatoFechaActual < this.formulario.controls['fechaFinal'].value ){
      alert('La fecha final limite es hoy '+formatoFechaActual.split('-')[2]+' de '+(this.fechaActual.getMonth() + 1)+' del '+this.fechaActual.getFullYear());
      return;
    }

    this.parametrosSeleccionados.emit({fechaInicio: this.formulario.controls['fechaInicio'].value, fechaFinal: this.formulario.controls['fechaFinal'].value});
    
  }

  validar(field: string, error: string){
    return this.formulario.controls[field].getError(error)
  }
}
import { Component, OnInit } from '@angular/core';
import { DolarService } from 'src/app/services/dolar.service';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {
  dolarBlueData: any;
  dolarOficialData: any;
  dolarBolsaData: any;
  dolarTarjetaData: any;
  dolarCCLData: any;
  euroData: any;
  realData: any;
  pesoChileData: any;
  pesoUruData: any;


  constructor(private dolarService: DolarService) {}

  ngOnInit(): void {
    this.getDolarBlueData();
    this.getDolarOficialData();
    this.getDolarBolsaData();
    this.getDolarTarjetaData();
    this.getdolarCCLData();
    this.getEuroData();
    this.getRealData();
    this.getPesoChileData();
    this.getPesoUruData();
  }

  getDolarBlueData(): void {
    this.dolarService.getDolarBlue().subscribe(data => {
      this.dolarBlueData = data;
      console.log(this.dolarBlueData);
    });
  }

  getDolarOficialData(): void {
    this.dolarService.getDolarOficial().subscribe(data => {
      this.dolarOficialData = data;
      console.log(this.dolarOficialData);
    });
  }

  getDolarBolsaData(): void {
    this.dolarService.getDolarBolsa().subscribe(data => {
      this.dolarBolsaData = data;
      console.log(this.dolarBolsaData);
    });
  }

  getDolarTarjetaData(): void {
    this.dolarService.getDolarTarjeta().subscribe(data => {
      this.dolarTarjetaData = data;
      console.log(this.dolarTarjetaData);
    });
  }

  getdolarCCLData(): void{
    this.dolarService.getDolarCCL().subscribe(data => {
      this.dolarCCLData = data;
      console.log(this.dolarCCLData);
    });
  }

  getEuroData(): void{
    this.dolarService.getEuro().subscribe(data => {
      this.euroData = data;
  });
  }

  getRealData(): void{
    this.dolarService.getReal().subscribe(data => {
      this.realData = data;
    });
  }

  getPesoChileData(): void{
    this.dolarService.getPesoChileno().subscribe(data => {
      this.pesoChileData = data;
  });
  }

  getPesoUruData(): void{
    this.dolarService.getPesoUru().subscribe(data => {
      this.pesoUruData = data;
  });
  }
}

import { Component, OnInit } from '@angular/core';
import { DolarService } from 'src/app/services/dolar.service';

@Component({
  selector: 'app-bar-dolar',
  templateUrl: './bar-dolar.component.html',
  styleUrls: ['./bar-dolar.component.css']
})
export class BarDolarComponent implements OnInit {
  dolarBlueData: any;
  dolarOficialData: any;
  dolarBolsaData: any;
  dolarTarjetaData: any;

  constructor(private dolarService: DolarService) {}

  ngOnInit(): void {
    this.getDolarBlueData();
    this.getDolarOficialData();
    this.getDolarBolsaData();
    this.getDolarTarjetaData();
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
}

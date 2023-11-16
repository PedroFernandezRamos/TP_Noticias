import { Component, Input } from '@angular/core';
import { Noticia } from 'src/app/models/noticiaClase';

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.css']
})
export class NoticiaCardComponent {

  @Input() noticia!: Noticia;

  constructor(){
    
  }
}

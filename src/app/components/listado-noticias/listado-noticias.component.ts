import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/models/noticiaClase';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit{
  @Input() listadoNoticias: Noticia[]=[];
   
  constructor(){}
  
  ngOnInit(): void {

   }
}

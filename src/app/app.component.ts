import { Component } from '@angular/core';
import { NoticiasServiceService } from './services/noticias-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test_Noticias';

  constructor(private _api: NoticiasServiceService){

  }
}

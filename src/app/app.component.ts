import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProductosService } from './services/productos.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'portafolio';

  	constructor(public _infoPageService: InfoPageService, 
              	public _productoService: ProductosService){ // el guion bajo, indica que es un servicio.
    
  	}
}

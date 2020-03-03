import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ItemDetalle } from '../../interfaces/item.intefaces';

@Component({
  	selector: 'app-item',
  	templateUrl: './item.component.html',
  	styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	item:ItemDetalle;
	id:String;

	constructor(private route: ActivatedRoute, public _productoService: ProductosService) { }
		
	ngOnInit() {
    	this.route.params.subscribe(parametros => {
			
			this.id = parametros['id'];
			this._productoService.getProducto(parametros['id']).subscribe( (resp:ItemDetalle) => {
				this.item = resp;
				
			})
    	})
	}

}

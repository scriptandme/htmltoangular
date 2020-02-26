import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosInfo } from '../interfaces/producto.interfaces';

@Injectable({
  	providedIn: 'root'
})
export class ProductosService {

	productosidx:any = [];
	productos:ProductosInfo[] = [];
	cargando = true;

  	constructor(private http:HttpClient) { 
		this.cargarProductosIdx();
	}
	  
	private cargarProductos(){
		this.http.get('https://angular-html-cl.firebaseio.com/productos.json')
			.subscribe((resp: any )=> {
				console.log(resp)	
				// this.cargando = false;		
			})
	}

	private cargarProductosIdx(){
		this.http.get('https://angular-html-cl.firebaseio.com/productos_idx.json')
			.subscribe((resp: ProductosInfo[] )=> {
				console.log(resp);
				this.productos = resp;	
				this.cargando = false;		
			})
	}
}

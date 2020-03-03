import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosInfo } from '../interfaces/producto.interfaces';
import { reject } from 'q';

@Injectable({
  	providedIn: 'root'
})
export class ProductosService {

	productosidx:any = [];
	productos:ProductosInfo[] = [];
	productosFiltrado:ProductosInfo[] = [];
	cargando = true;

  	constructor(private http:HttpClient) { 
		this.cargarProductos();
	}
	  
	getProducto(id:String){

		return this.http.get(`https://angular-html-cl.firebaseio.com/productos/${id}.json`)
			
	}

	private cargarProductos(){

		//asincrono

		return new Promise((resolve, reject) => {
			this.http.get('https://angular-html-cl.firebaseio.com/productos_idx.json')
			.subscribe((resp: ProductosInfo[] )=> {
				this.productos = resp;	
				this.cargando = false;	
				resolve();	
			})
		})

		
	}

	public buscarProductos(busqueda:string){
		if(this.productos.length === 0){
			this.cargarProductos().then(()=> {
				this.filtrarProducto(busqueda);
			})
		}else{
			this.filtrarProducto(busqueda);
		}
		
	}

	private filtrarProducto(busqueda:string){
		/*this.productosFiltrado = this.productos.filter(producto =>{
			return true;
		});*/
		this.productosFiltrado = [];
		console.log(this.productos);
		this.productos.forEach(producto => {
			if( producto.categoria.indexOf(busqueda) >= 0  || producto.titulo.indexOf(busqueda)>=0){
				this.productosFiltrado.push(producto);
			}
		})
	}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-page.interfaces';
/* Un servicio se puede usar para compartir informacion global para toda mi aplicación */
@Injectable({
	providedIn: 'root'
})
export class InfoPageService {

	info: InfoPagina;
	equipo: any[] = [];

	constructor(private http:HttpClient) {
		this.cargarInfo();
		this.cargarEquipo();
		}
	   
	private cargarInfo(){
		this.http.get('assets/data/data.json')
			.subscribe((resp: InfoPagina)=> {
				this.info = resp;				
			})
	}

	private cargarEquipo(){
		this.http.get('https://angular-html-cl.firebaseio.com/equipo.json')
			.subscribe((resp: any)=> {
				this.equipo = resp;
			})
	}
}

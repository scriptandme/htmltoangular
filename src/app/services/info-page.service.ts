import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-page.interfaces';
/* Un servicio se puede usar para compartir informacion global para toda mi aplicación */
@Injectable({
	providedIn: 'root'
})
export class InfoPageService {

	info: InfoPagina;

	constructor(private http:HttpClient) {
		console.log("servicio up");
		this.http.get('assets/data/data.json')
			.subscribe((resp: InfoPagina)=> {
				this.info = resp;
				console.log(this.info.email)
			})
   	}
}

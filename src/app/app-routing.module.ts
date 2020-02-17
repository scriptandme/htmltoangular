import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
	{path: 'home', component: PortafolioComponent},
	{path: 'about', component: AboutComponent},
	{path: 'item', component: ItemComponent},
	{path: '**', pathMatch:'full', redirectTo: ''}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})], 
	  exports: [RouterModule]
	  /*
	  La opción useHash: true, agrega a todas nustras url el simbolo '#',
	  esto el navegador lo interpreta, diciendo que todas las cosas que pongamos después del slash /, 
	  no son carpetas o sub carpetas, si no que solo URL's ::: Ejemplo: http://localhost:4200/#/home ..
	  Nos sirve para subir nuestra app a servidores donde no podamos configurar nuestro .htacces */
})
export class AppRoutingModule { }




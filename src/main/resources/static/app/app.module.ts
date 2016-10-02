import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent }   from './app.component';

// Components
import { HomeComponent } from './components/home.component'

// Pages
import { PageNotFoundComponent } from './components/page-not-found.component'

@NgModule({
	imports: [
		BrowserModule,
		Ng2BootstrapModule,
		MaterialModule.forRoot(),
		routing
	],
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		HomeComponent
	],
	providers: [
		appRoutingProviders
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}

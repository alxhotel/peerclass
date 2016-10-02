import { Component } from '@angular/core';

@Component({
	selector: 'app',
	template: `
		<md-toolbar color="primary">
			<span>PeerClass</span>
		</md-toolbar>

		<router-outlet></router-outlet>

	`
})
export class AppComponent {
	
}
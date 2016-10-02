/* global System */

/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
	System.config({
		paths: {
			// Paths serve as alias
			'npm:': 'node_modules/'
		},
		// Map tells the System loader where to look for things
		map: {
			// Our app is within the app folder
			app: 'app',
			// Angular bundles
			'@angular/core': 'npm:@angular/core/bundles/core.umd.js',
			'@angular/common': 'npm:@angular/common/bundles/common.umd.js',
			'@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
			'@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/http': 'npm:@angular/http/bundles/http.umd.js',
			'@angular/router': 'npm:@angular/router/bundles/router.umd.js',
			'@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
			'@angular/material': 'npm:@angular/material/material.umd.js',
			// Other libraries
			'rxjs': 'npm:rxjs',
			'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
			'moment': 'npm:moment/moment.js',
			'ng2-bootstrap': 'npm:ng2-bootstrap/ng2-bootstrap'
		},
		// Packages tells the System loader how to load when no filename and/or no extension
		packages: {
			app: {
				main: './main.js',
				defaultExtension: 'js'
			},
			rxjs: {
				defaultExtension: 'js'
			},
			'angular2-in-memory-web-api': {
				main: './index.js',
				defaultExtension: 'js'
			},
			'npm:ng2-bootstrap' : {
				defaultExtension: 'js'
			}
		}
	});
})(this);

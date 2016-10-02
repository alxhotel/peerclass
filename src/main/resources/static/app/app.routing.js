"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home.component');
var page_not_found_component_1 = require('./components/page-not-found.component');
var appRoutes = [
    //{ path: 'room/:id', component: RoomComponent },
    { path: '', component: home_component_1.HomeComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
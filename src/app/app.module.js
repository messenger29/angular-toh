"use strict";
/** MORE INFO AT https://angular.io/docs/ts/latest/guide/appmodule.html **/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//these 'import' is JS that give access to symbols EXPORTED by other files so can be referenced within THIS file (nothing to do with Angular)
var core_1 = require("@angular/core"); //always
var platform_browser_1 = require("@angular/platform-browser"); //
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http"); // HTTP services to CRUD against 
var app_routing_module_1 = require("./app-routing.module"); // example of custom feature module
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard.component");
var heroes_component_1 = require("./heroes.component");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_service_1 = require("./hero.service");
var hero_search_component_1 = require("./hero-search.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        // JYnotes: only include NgModule classes and custom feature modules
        // this 'imports' tells Angular about specific OTHER Angular modules that the app needs
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule
        ],
        // JYnotes: only include components; must declare EVERY component that is used
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            hero_search_component_1.HeroSearchComponent
        ],
        // JYnotes: globally creates instances of the services that the injector injects into components and other services
        // in this case, HeroService provides hero data
        providers: [hero_service_1.HeroService],
        //JYnotes: creates the listed component(s) and inserts each one into the browser DOM but usually SINGLE root component
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
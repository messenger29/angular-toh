/** MORE INFO AT https://angular.io/docs/ts/latest/guide/appmodule.html **/

//these 'import' is JS that give access to symbols EXPORTED by other files so can be referenced within THIS file (nothing to do with Angular)
import { NgModule }      from '@angular/core';  //always
import { BrowserModule } from '@angular/platform-browser';  //
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';  // HTTP services to CRUD against 

import { AppRoutingModule } from './app-routing.module';  // example of custom feature module

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';

@NgModule({
  // JYnotes: only include NgModule classes and custom feature modules
  // this 'imports' tells Angular about specific OTHER Angular modules that the app needs
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  // JYnotes: only include components; must declare EVERY component that is used
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  // JYnotes: globally creates instances of the services that the injector injects into components and other services
  // in this case, HeroService provides hero data
  providers: [ HeroService ],
  //JYnotes: creates the listed component(s) and inserts each one into the browser DOM but usually SINGLE root component
  bootstrap: [ AppComponent ]
})
export class AppModule { }

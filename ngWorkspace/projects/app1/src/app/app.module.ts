import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavComponent } from './components/nav/nav.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

// Listamos Providers de manera comportida
const providers: [] = [];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

// * Creamos un módulo comportido que se usa en el AppRoutingModule de App 0
// * La idea, es compartir este módulo de manera controlado con otras apliaciones que lo necesiten
@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}

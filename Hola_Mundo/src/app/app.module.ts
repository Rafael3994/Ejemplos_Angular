import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

// Módulos de angular material
import { MatFormFieldModule } from '@angular/material/form-field';

// Locale para PIPES
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES) // registramos el LOCALE_ID de 'es' para poder usarlo en los pipes

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
// Módulo personalizado que exporta componentes de tipo Lista
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';
import { EjemploAnimacionComponent } from './components/ejemplo-animacion/ejemplo-animacion.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe,
    EjemploAnimacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Importamos nuestro módulo personalizado
    ListsModule,
    // Importamos el módulo HttpClientModule para hacer peticiones HTTP
    HttpClientModule,
    // Importamos Reactive FormModuls para trabajar con formularios
    ReactiveFormsModule,
    // Importamos los módulos de angular material
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [
    // Registramos el Locale de ES para que los PIPES salgan en Español
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

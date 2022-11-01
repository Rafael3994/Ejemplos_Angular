import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NetworkAwarePreloadStrategy } from './preloading-strategies/network-aware-preloading-strategy';
import { OnDemandPreloadingStrategy } from './preloading-strategies/on-demand-preloading-strategy';
import { OptInPreloadingStrategy } from './preloading-strategies/opt-in-preloading-strategy';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/pages/auth/auth.module').then(m => m.AuthModule),
    data: {
      preload: true // esto querrá decir que este módulo es va a precargar bajo las estrategia de precarga OptIn / OnDemand
    }
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/pages/profile/profile.module').then(m => m.ProfileModule),
    data: {
      preload: true // esto querrá decir que este módulo es va a precargar bajo las estrategia de precarga OptIn / OnDemand
    }
  },
  // Siempre el 404 se pondrá en el módulo de enrutado principal
  {
    path: '**',
    loadChildren: () => import('./modules/pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // * 1 - PRECARGAR TODOS los módulos de las rutas --> Evitar Carga Perezosa
    // preloadingStrategy: PreloadAllModules
    // * 2 - NO PRECARGAR NINGÚNO módulo --> Forzar Carga Perezosa
    // preloadingStrategy: NoPreloading
    // * 3 - Estrategia Personalizada: Precarga por opciones en rutas
    // preloadingStrategy: OptInPreloadingStrategy
    // * 4 - Estrategia Personalizada: Precarga por conexión de usuario a internet
    // preloadingStrategy: NetworkAwarePreloadStrategy,
    // * 5 - Estrategia Personalizada: Precarga por Demanda iniciada por evento controlado desde servicio PreloadingService
    preloadingStrategy: OnDemandPreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

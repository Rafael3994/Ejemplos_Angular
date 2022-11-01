import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OptInPreloadingStrategy implements PreloadingStrategy {

    /**
     * 
     * @param route La ruta recibida que debería cargar un módulo.
     * @param load el callback que carga el módulo.
     * @returns ejecuta el callback que carga el módulo o devuelve un Observable vacío
     */
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        // Evaluación que determina:
        // 1. SI dentro de la ruta hay un valor llamado "data"
        // 2. SI dentro del valor "data" hay una clave llamda "preload" a "true"
        // Entonces, ejecuta el callback y carga el módulo
        // Si no lo tiene, devuelve un Observable nulo para que no se precargue el módulo
        return route.data && route.data['preload'] ? load() : EMPTY;
    }
}

import { of, Observable, fromEvent, interval, zip } from 'rxjs';
import { groupBy, map, take } from 'rxjs/operators';


// ****** Ejemplo 1 ****** //
// Uso básico de un observable y un observer
// * 1. Creación de observable
// Creamos un observable que emite 2 valores: 'Hola' y después emitirá 'Martín' 
const observable$ = of('Hola', 'Martín', 30);

// * 2. Creación de Observador
const observer = {
    next: (valor: string | number) => console.log(`- ${valor}`),
    error: (error: any) => console.error(`Error: ${error}`),
    complete: () => console.info(`Hemos terminada`)
}

// * Ejecución del observable => Imprescindible una suscripción
observable$.subscribe(observer);

// ****** Ejemplo 2 ****** //
// Creación de una función que devuelva un Observable personalizado
export const miObservable = (...args: (string | number)[]): Observable<string | number> => {
    return new Observable((observer) => {
        // Si el número de argumentos recibidos es más de 10, emitidos un error
        if (args.length > 5) {
            observer.error('Tiene demasiados argumentos');
        }
        // Para cada uno de los argumentos recibidos por parámetro
        args.forEach((arg) => observer.next(arg)); // Emitimos todos los valores que recibimos
        observer.complete(); // Completamos el observer
    });
}

// ****** Ejemplo 3 (OBSERVABLE A PARTIR DE EVENTOS EN EL DOM)****** //
// Emisión de valores a partir de eventos en el DOM
// Para ello usaremos "fromEvent" de rxJS

// * 1. Creamos el observable a partir de fromEvent
const observableClicks$ = fromEvent(document, 'click');

// * 2. Creación de observer del observable
observableClicks$.subscribe({
    next: (valor: Event) => console.log(`Ha ocurrido un click en: ${valor.type}`),
    error: (error: any) => console.error(`Ha ocurrido un error: ${error}`),
    complete: () => console.log('Observable terminado que escucha clicks')
})


// ****** Ejemplo 4 (OBSERVABLE A PARTIR DE INTERVALO CON PIPE Y TAKE) ****** //
// * 1. Definimos el observable a partir de un intervalo que emite cada 2 segundos
const observableInterval$ = interval(2000)

// * 2. Creamos el observer que consuma los valores, pero solo se quede con los 3 primeros
observableInterval$.pipe(
    take(3) // Le decimos que solo nos interesan los 3 primeros
).subscribe({
    next: (value: number) => console.log(`Valor: ${value}`),
    error: ((error) => console.error(`Error ${error}`)),
    complete: () => console.info('Obtenidos los 3 primeros valores del intervalo')
})


// ****** Ejemplo 5 (AGRUPACIÓN DE VALORES) ****** //
const observableGroupBy$ = interval(1000).pipe(
    groupBy((n: number) => n % 2)
)

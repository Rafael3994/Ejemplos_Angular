import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rolCorrecto]'
})
export class StructDirective {

  private _mostrando: boolean = false;

  constructor(private _templateRed: TemplateRef<any>, private _viewContainerRef: ViewContainerRef) { }

  @Input() set rolCorrecto(condicion: boolean) {
    if(condicion && !this._mostrando) {
      this._viewContainerRef.createEmbeddedView(this._templateRed); // Creamos el elemento
      this._mostrando = true;
    } else {
      this._viewContainerRef.clear(); // Eliminamos el elemento
      this._mostrando = false;
    }
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploAttrComponent } from './ejemplo-attr.component';

describe('EjemploAttrComponent', () => {
  let component: EjemploAttrComponent;
  let fixture: ComponentFixture<EjemploAttrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploAttrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

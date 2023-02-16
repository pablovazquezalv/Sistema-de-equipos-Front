import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearPartidoComponent } from './formulario-crear-partido.component';

describe('FormularioCrearPartidoComponent', () => {
  let component: FormularioCrearPartidoComponent;
  let fixture: ComponentFixture<FormularioCrearPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCrearPartidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCrearPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

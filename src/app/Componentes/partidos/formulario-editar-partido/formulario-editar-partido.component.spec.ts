import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarPartidoComponent } from './formulario-editar-partido.component';

describe('FormularioEditarPartidoComponent', () => {
  let component: FormularioEditarPartidoComponent;
  let fixture: ComponentFixture<FormularioEditarPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEditarPartidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEditarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

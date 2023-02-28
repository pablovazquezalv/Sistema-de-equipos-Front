import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarJugadoresEquipoComponent } from './eliminar-jugadores-equipo.component';

describe('EliminarJugadoresEquipoComponent', () => {
  let component: EliminarJugadoresEquipoComponent;
  let fixture: ComponentFixture<EliminarJugadoresEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarJugadoresEquipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarJugadoresEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

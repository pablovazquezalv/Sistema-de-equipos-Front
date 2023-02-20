import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarJugadoresComponent } from './mostrar-jugadores.component';

describe('MostrarJugadoresComponent', () => {
  let component: MostrarJugadoresComponent;
  let fixture: ComponentFixture<MostrarJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarJugadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

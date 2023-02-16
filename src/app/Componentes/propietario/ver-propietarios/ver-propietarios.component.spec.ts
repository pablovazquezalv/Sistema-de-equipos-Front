import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPropietariosComponent } from './ver-propietarios.component';

describe('VerPropietariosComponent', () => {
  let component: VerPropietariosComponent;
  let fixture: ComponentFixture<VerPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPropietariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

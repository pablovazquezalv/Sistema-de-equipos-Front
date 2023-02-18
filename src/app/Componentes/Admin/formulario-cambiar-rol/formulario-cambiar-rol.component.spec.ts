import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCambiarRolComponent } from './formulario-cambiar-rol.component';

describe('FormularioCambiarRolComponent', () => {
  let component: FormularioCambiarRolComponent;
  let fixture: ComponentFixture<FormularioCambiarRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCambiarRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCambiarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

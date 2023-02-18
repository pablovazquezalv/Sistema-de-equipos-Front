import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCambiarStatusComponent } from './formulario-cambiar-status.component';

describe('FormularioCambiarStatusComponent', () => {
  let component: FormularioCambiarStatusComponent;
  let fixture: ComponentFixture<FormularioCambiarStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCambiarStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCambiarStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

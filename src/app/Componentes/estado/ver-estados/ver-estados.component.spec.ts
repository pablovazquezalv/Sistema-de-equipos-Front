import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEstadosComponent } from './ver-estados.component';

describe('VerEstadosComponent', () => {
  let component: VerEstadosComponent;
  let fixture: ComponentFixture<VerEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEstadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

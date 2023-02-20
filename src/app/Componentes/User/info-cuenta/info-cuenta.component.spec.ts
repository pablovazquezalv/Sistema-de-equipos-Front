import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCuentaComponent } from './info-cuenta.component';

describe('InfoCuentaComponent', () => {
  let component: InfoCuentaComponent;
  let fixture: ComponentFixture<InfoCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

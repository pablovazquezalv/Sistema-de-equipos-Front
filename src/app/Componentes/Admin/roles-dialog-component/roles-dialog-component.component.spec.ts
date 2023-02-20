import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesDialogComponentComponent } from './roles-dialog-component.component';

describe('RolesDialogComponentComponent', () => {
  let component: RolesDialogComponentComponent;
  let fixture: ComponentFixture<RolesDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesDialogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

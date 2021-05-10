import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxAccountGlAccountComponent } from './dialog-box-account-gl-account.component';

describe('DialogBoxAccountGlAccountComponent', () => {
  let component: DialogBoxAccountGlAccountComponent;
  let fixture: ComponentFixture<DialogBoxAccountGlAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBoxAccountGlAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxAccountGlAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxAccountGlSubGroupComponent } from './dialog-box-account-gl-sub-group.component';

describe('DialogBoxAccountGlSubGroupComponent', () => {
  let component: DialogBoxAccountGlSubGroupComponent;
  let fixture: ComponentFixture<DialogBoxAccountGlSubGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBoxAccountGlSubGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxAccountGlSubGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

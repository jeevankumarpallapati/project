import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGlSubGroupComponent } from './create-gl-sub-group.component';

describe('CreateGlSubGroupComponent', () => {
  let component: CreateGlSubGroupComponent;
  let fixture: ComponentFixture<CreateGlSubGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGlSubGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGlSubGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

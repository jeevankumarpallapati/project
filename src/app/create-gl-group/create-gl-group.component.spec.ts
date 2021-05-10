import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGlGroupComponent } from './create-gl-group.component';

describe('CreateGlGroupComponent', () => {
  let component: CreateGlGroupComponent;
  let fixture: ComponentFixture<CreateGlGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGlGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGlGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

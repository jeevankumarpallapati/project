import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSKComponent } from './rsk.component';

describe('RSKComponent', () => {
  let component: RSKComponent;
  let fixture: ComponentFixture<RSKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RSKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

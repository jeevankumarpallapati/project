import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDeedComponent } from './sale-deed.component';

describe('SaleDeedComponent', () => {
  let component: SaleDeedComponent;
  let fixture: ComponentFixture<SaleDeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleDeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

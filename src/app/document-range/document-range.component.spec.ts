import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRangeComponent } from './document-range.component';

describe('DocumentRangeComponent', () => {
  let component: DocumentRangeComponent;
  let fixture: ComponentFixture<DocumentRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

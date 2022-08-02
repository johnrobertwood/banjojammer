import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaRowComponent } from './cta-row.component';

describe('CtaRowComponent', () => {
  let component: CtaRowComponent;
  let fixture: ComponentFixture<CtaRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

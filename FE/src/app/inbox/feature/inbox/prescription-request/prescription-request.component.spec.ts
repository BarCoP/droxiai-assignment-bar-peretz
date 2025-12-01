import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionRequestComponent } from './prescription-request.component';

describe('PrescriptionRequestComponent', () => {
  let component: PrescriptionRequestComponent;
  let fixture: ComponentFixture<PrescriptionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

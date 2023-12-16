import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpselladdonsComponent } from './upselladdons.component';

describe('UpselladdonsComponent', () => {
  let component: UpselladdonsComponent;
  let fixture: ComponentFixture<UpselladdonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpselladdonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpselladdonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

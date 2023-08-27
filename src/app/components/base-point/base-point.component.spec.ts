import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePointComponent } from './base-point.component';

describe('BasePointComponent', () => {
  let component: BasePointComponent;
  let fixture: ComponentFixture<BasePointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasePointComponent]
    });
    fixture = TestBed.createComponent(BasePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

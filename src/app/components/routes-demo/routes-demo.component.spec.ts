import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesDemoComponent } from './routes-demo.component';

describe('RoutesDemoComponent', () => {
  let component: RoutesDemoComponent;
  let fixture: ComponentFixture<RoutesDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutesDemoComponent]
    });
    fixture = TestBed.createComponent(RoutesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormBuildComponent } from './reactive-form-build.component';

describe('ReactiveFormBuildComponent', () => {
  let component: ReactiveFormBuildComponent;
  let fixture: ComponentFixture<ReactiveFormBuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormBuildComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

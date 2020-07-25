import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMobileComponent } from './body-mobile.component';


describe('BodyMobileComponent', () => {
  let component: BodyMobileComponent;
  let fixture: ComponentFixture<BodyMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

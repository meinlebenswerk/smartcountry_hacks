import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsStatusComponent } from './request-details-status.component';

describe('RequestDetailsStatusComponent', () => {
  let component: RequestDetailsStatusComponent;
  let fixture: ComponentFixture<RequestDetailsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDetailsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEndComponent } from './request-end.component';

describe('RequestEndComponent', () => {
  let component: RequestEndComponent;
  let fixture: ComponentFixture<RequestEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

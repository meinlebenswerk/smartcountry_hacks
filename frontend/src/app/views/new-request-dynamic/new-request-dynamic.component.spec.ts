import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestDynamicComponent } from './new-request-dynamic.component';

describe('NewRequestDynamicComponent', () => {
  let component: NewRequestDynamicComponent;
  let fixture: ComponentFixture<NewRequestDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRequestDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRequestDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

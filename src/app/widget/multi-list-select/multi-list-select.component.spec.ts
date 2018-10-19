import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiListSelectComponent } from './multi-list-select.component';

describe('MultiListSelectComponent', () => {
  let component: MultiListSelectComponent;
  let fixture: ComponentFixture<MultiListSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiListSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiListSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

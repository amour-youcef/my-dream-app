import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPreCompComponent } from './mon-pre-comp.component';

describe('MonPreCompComponent', () => {
  let component: MonPreCompComponent;
  let fixture: ComponentFixture<MonPreCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonPreCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonPreCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

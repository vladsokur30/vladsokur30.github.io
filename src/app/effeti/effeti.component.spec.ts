import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffetiComponent } from './effeti.component';

describe('EffetiComponent', () => {
  let component: EffetiComponent;
  let fixture: ComponentFixture<EffetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

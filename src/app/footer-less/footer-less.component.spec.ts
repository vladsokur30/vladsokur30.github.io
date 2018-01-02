import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLessComponent } from './footer-less.component';

describe('FooterLessComponent', () => {
  let component: FooterLessComponent;
  let fixture: ComponentFixture<FooterLessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

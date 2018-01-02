import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTextComponent } from './bank-text.component';

describe('BankTextComponent', () => {
  let component: BankTextComponent;
  let fixture: ComponentFixture<BankTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

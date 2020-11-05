import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullCreateComponent } from './bull-create.component';

describe('BullCreateComponent', () => {
  let component: BullCreateComponent;
  let fixture: ComponentFixture<BullCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BullCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

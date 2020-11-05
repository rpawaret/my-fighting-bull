import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullListComponent } from './bull-list.component';

describe('BullListComponent', () => {
  let component: BullListComponent;
  let fixture: ComponentFixture<BullListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

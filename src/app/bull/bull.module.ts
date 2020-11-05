import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BullListComponent } from './bull-list/bull-list.component';
import { BullRoutingModule } from './bull-routing.module';

@NgModule({
  declarations: [BullListComponent],
  imports: [CommonModule, BullRoutingModule],
})
export class BullModule {}

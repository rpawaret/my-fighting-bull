import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BullCreateComponent } from './bull-create/bull-create.component';
import { BullListComponent } from './bull-list/bull-list.component';
import { BullRoutingModule } from './bull-routing.module';

@NgModule({
  declarations: [BullListComponent, BullCreateComponent],
  imports: [CommonModule, BullRoutingModule],
})
export class BullModule {}

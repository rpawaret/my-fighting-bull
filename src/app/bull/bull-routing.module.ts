import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BullCreateComponent } from './bull-create/bull-create.component';
import { BullListComponent } from './bull-list/bull-list.component';

const routes: Routes = [
  {
    path: 'bull-list',
    component: BullListComponent,
  },
  {
    path: 'bull-create',
    component: BullCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BullRoutingModule {}

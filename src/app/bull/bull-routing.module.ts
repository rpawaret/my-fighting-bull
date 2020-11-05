import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BullListComponent } from './bull-list/bull-list.component';

const routes: Routes = [
  {
    path: 'bull-list',
    component: BullListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BullRoutingModule {}

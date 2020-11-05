import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'bull',
    loadChildren: () => import('../bull/bull.module').then((m) => m.BullModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

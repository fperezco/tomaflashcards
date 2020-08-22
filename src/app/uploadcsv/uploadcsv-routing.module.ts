import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadcsvPage } from './uploadcsv.page';

const routes: Routes = [
  {
    path: '',
    component: UploadcsvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadcsvPageRoutingModule {}

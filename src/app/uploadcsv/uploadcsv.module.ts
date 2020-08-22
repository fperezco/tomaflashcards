import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadcsvPageRoutingModule } from './uploadcsv-routing.module';

import { UploadcsvPage } from './uploadcsv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadcsvPageRoutingModule
  ],
  declarations: [UploadcsvPage]
})
export class UploadcsvPageModule {}

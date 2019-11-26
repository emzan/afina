import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Tab1Page } from './tab1.page';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  declarations: [Tab1Page],
  entryComponents: [Tab1Page],
  bootstrap: [Tab1Page],
  providers: []
})
export class Tab1PageModule {}

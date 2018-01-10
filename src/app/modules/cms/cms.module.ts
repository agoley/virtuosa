import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AGMaterialModule } from './components/cms/_material';

import { MenuComponent } from './components/menu/menu';
import { CMSRoutingModule } from './cms-routing.module';
import { CMSComponent, SafeHtmlPipe } from './components/cms/cms.component';

@NgModule({
  imports: [
    CommonModule,
    CMSRoutingModule,
    FormsModule,
    AGMaterialModule
  ],
  declarations: [CMSComponent, SafeHtmlPipe, MenuComponent],
  exports: [CMSComponent]
})
export class CMSModule { }

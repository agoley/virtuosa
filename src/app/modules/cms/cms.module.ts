import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AGMaterialModule } from './components/cms/_material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './components/menu/menu';
import { PageBodyComponent, SafeHtmlPipe } from './components/page-body/pageBody';
import { CMSRoutingModule } from './cms-routing.module';
import { CMSComponent } from './components/cms/cms.component';

@NgModule({
  imports: [
    CommonModule,
    CMSRoutingModule,
    FormsModule,
    AGMaterialModule,
    NoopAnimationsModule
  ],
  declarations: [CMSComponent, MenuComponent, PageBodyComponent, SafeHtmlPipe],
  exports: [CMSComponent]
})
export class CMSModule { }

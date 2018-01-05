import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WorkingRoutingModule } from './working-routing.module';
import { WorkbenchComponent, SafeHtmlPipe } from './components/workbench/workbench.component';

@NgModule({
  imports: [
    CommonModule,
    WorkingRoutingModule,
    FormsModule
  ],
  declarations: [WorkbenchComponent, SafeHtmlPipe],
  exports: [WorkbenchComponent]
})
export class WorkingModule { }

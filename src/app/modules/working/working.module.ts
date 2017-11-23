import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorkingRoutingModule } from './working-routing.module';
import { WorkbenchComponent } from './components/workbench/workbench.component';

@NgModule({
  imports: [
    CommonModule,
    WorkingRoutingModule
  ],
  declarations: [WorkbenchComponent],
  exports: [WorkbenchComponent]
})
export class WorkingModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GeneratorRoutingModule } from './generator-routing.module';
import { ViewComponent } from './component/view/view.component';

@NgModule({
  imports: [
    CommonModule,
    GeneratorRoutingModule
  ],
  declarations: [ViewComponent],
  exports: [ViewComponent]
})
export class GeneratorModule { }

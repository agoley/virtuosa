import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WorkingModule } from './modules/working/working.module';
import { CMSModule } from './modules/cms/cms.module';
import { environment } from '../environments/environment';
import { GeneratorModule } from './modules/generator/generator.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WorkingModule,
    CMSModule,
    GeneratorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

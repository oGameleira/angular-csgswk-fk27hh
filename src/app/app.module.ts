import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { MaterialExampleModule } from '../material.module';
import { AppComponent } from './app.component';
import { OverviewDialog } from './dialog';
import { MaskDirective } from './mask.directive';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    ButtonsModule,
    InputsModule,
    DropDownsModule,
    DateInputsModule,
    MaterialExampleModule,
  ],
  exports: [OverviewDialog],
  declarations: [AppComponent, OverviewDialog, MaskDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}

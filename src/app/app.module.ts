import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoSkuFormComponent } from './demo-sku-form/demo-sku-form.component';
import { DemoSkuFormWithBuilderComponent } from './demo-sku-form-with-builder/demo-sku-form-with-builder.component';
import { DemoSkuFormWithValidationComponent } from './demo-sku-form-with-validation/demo-sku-form-with-validation.component';
import { DemoSkuFormWithCustomValidationComponent } from './demo-sku-form-with-custom-validation/demo-sku-form-with-custom-validation.component';
import { DemoFormWithEventsComponent } from './demo-form-with-events/demo-form-with-events.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, DemoSkuFormComponent, DemoSkuFormWithBuilderComponent, DemoSkuFormWithValidationComponent, DemoSkuFormWithCustomValidationComponent, DemoFormWithEventsComponent, DemoFormNgModelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

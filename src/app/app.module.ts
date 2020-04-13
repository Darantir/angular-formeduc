import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoSkuFormComponent } from './demo-sku-form/demo-sku-form.component';
import { DemoSkuFormWithBuilderComponent } from './demo-sku-form-with-builder/demo-sku-form-with-builder.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, DemoSkuFormComponent, DemoSkuFormWithBuilderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

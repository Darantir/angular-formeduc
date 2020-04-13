import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-demo-sku-form-with-custom-validation',
  templateUrl: './demo-sku-form-with-custom-validation.component.html',
  styleUrls: ['./demo-sku-form-with-custom-validation.component.css']
})

export class DemoSkuFormWithCustomValidationComponent implements OnInit {

  constructor() { }
  
  skuValidator(control: FormControl): {[s: string]: boolean}
  {
    if (!control.value.match(/^123/)) {
    return {invalidSku: true};
    }
  }

  ngOnInit() {
  }

}
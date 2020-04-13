import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-demo-sku-form-with-validation',
  templateUrl: './demo-sku-form-with-validation.component.html',
  styleUrls: ['./demo-sku-form-with-validation.component.css']
})
export class DemoSkuFormWithValidationComponent implements OnInit {
  myForm: FormGroup; 
  sku: AbstractControl;
  constructor(fb: FormBuilder) 
  {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  OnSubmit(value: string): void {
   console.log('you submitted value: ', value);
  }

}
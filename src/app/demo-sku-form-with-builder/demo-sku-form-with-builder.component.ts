import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-demo-sku-form-with-builder',
  templateUrl: './demo-sku-form-with-builder.component.html',
  styleUrls: ['./demo-sku-form-with-builder.component.css']
})
export class DemoSkuFormWithBuilderComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123']
    });
   }

  ngOnInit() {
  }

  OnSubmit(value: string): void
  {
    console.log('you submitted value:', value);
  }

}
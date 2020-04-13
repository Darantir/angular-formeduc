import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-sku-form',
  templateUrl: './demo-sku-form.component.html',
  styleUrls: ['./demo-sku-form.component.css']
})
export class DemoSkuFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: any): void{
    console.log('you admitted value',form);
  }

}
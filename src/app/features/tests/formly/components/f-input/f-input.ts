import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';
import { FluidModule } from 'primeng/fluid';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'f-input',
  imports: [InputTextModule, LabelModule, FluidModule, ReactiveFormsModule, FormlyModule],
  templateUrl: './f-input.html',
})
export class FInput extends FieldType<FieldTypeConfig> {
  ngOnInit() {
    console.log(this.field);
  }
}

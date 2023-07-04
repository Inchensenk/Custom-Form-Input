import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-custom-form-input',
  templateUrl: './custom-form-input.component.html',
  styleUrls: ['./custom-form-input.component.scss'],

  imports: [CommonModule, FormsModule],
  standalone: true,

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomFormInputComponent,
      multi: true
    }
  ]

})
export class CustomFormInputComponent implements ControlValueAccessor{

  input!: string;

  onChange: any = () => {};
  onTouched: any = () => {};


  writeValue(input: any) {
    this.input = input;
  }
  registerOnChange(fn: any){
    this.onTouched = fn;
  }
  registerOnTouched(fn: any) {
    this.onChange = fn;
  }

}

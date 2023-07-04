import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomFormInputComponent } from '../custom-form-input/custom-form-input.component';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],

  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CustomFormInputComponent]
})
export class FormContainerComponent implements OnInit{

  form!: FormGroup;

  constructor(private fb: NonNullableFormBuilder){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    })
  }

  get firstName(){
    return this.form.controls['firstName'];
  }

  get lastName(){
    return this.form.controls['lastName'];
  }

  get address(){
    return this.form.controls['address'];
  }

  onSubmit (formData: any){
    console.log(formData);
  }
}

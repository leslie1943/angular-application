import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface Data {
  name: string;
  value: string;
}
@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss'],
})
export class FormDemoComponent implements OnInit {
  Data: Array<Data> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Lime', value: 'limi' },
  ];

  /**
   * this.fb.group({})
   * this.fb.control('',validators)
   * this.fb..array([]),
   */
  form!: FormGroup;
  methodForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([]),
      gender: this.fb.control(''),
    });
  }

  ngOnInit(): void {
    this.methodForm.get('lastName')?.valueChanges.subscribe((value) => {
      console.info('update value', value);
    });
  }

  onSubmit() {
    // Radio start
    const gender = this.form.get('gender') as FormControl;
    console.info(gender.value);
    // Radio end
    console.info('this.form.value', this.form.value);
  }

  onChange(event: Event) {
    // Checkbox start
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const checked = target.checked;
    const checkArray = this.form.get('checkArray') as FormArray; //链并没有断开, 操作的依然的 this.form(FormGroup)里的Array
    if (checked) {
      console.info(
        'this.form before',
        (this.form.get('checkArray') as FormArray).length
      );
      checkArray.push(this.fb.control(value));
      console.info(
        'this.form after',
        (this.form.get('checkArray') as FormArray).length
      );
    } else {
      const index = checkArray.controls.findIndex(
        (control) => control.value === value
      );
      checkArray.removeAt(index);
    }
    // Checkbox end
  }

  onMethodSubmit() {}

  patchValue() {
    this.methodForm.patchValue({
      firstName: 'test',
    });
  }

  setValue() {
    this.methodForm.setValue({
      firstName: 'test',
      lastName: 'test',
    });
  }

  onReset() {
    this.methodForm.reset();
  }
}

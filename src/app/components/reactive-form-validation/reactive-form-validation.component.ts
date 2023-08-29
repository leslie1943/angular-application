import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NameValidators } from 'src/app/validators/name.validator';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.scss'],
})
export class ReactiveFormValidationComponent {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(5),
        NameValidators.cannotContainSpace,
      ],
      // 第三个参数是异步验证规则
      NameValidators.isUnique
    ),
  });

  // 获取 FormGroup的某个属性
  get name() {
    return this.contactForm.get('name');
  }

  onSubmit() {}
}

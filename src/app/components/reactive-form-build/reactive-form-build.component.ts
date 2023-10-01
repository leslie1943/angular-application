import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-build',
  templateUrl: './reactive-form-build.component.html',
  styleUrls: ['./reactive-form-build.component.scss'],
})
/**
 * this.fb.group({})
 * this.fb.control('',validators)
 * this.fb..array([]),
 */
export class ReactiveFormBuildComponent {
  contactForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: this.fb.group({
        firstName: this.fb.control('', [Validators.required]), // 也可以直接写 firstName: ['', Validators.required]
        lastName: ['', Validators.required],
      }),
      phone: [],
      contacts: this.fb.array([]),
    });
  }

  onSubmit() {
    // 仅仅使用 get 获取的是 FormGroup / FormArray / FormControl
    console.info('phone', this.contactForm.get('phone')); // FormControl
    console.info('contacts', this.contactForm.get('contacts')); // FormArray
    console.info('fullName', this.contactForm.get('fullName')); // FormGroup

    // 使用value获取的才是真正的value
    console.info('fullName', this.contactForm.get('fullName')?.value);
    console.info(
      'firstName',
      this.contactForm.get('fullName')?.get('firstName')?.value
    );
    console.info(
      'lastName',
      this.contactForm.get('fullName')?.get('lastName')?.value
    );
    console.info(this.contactForm.value);
  }
}

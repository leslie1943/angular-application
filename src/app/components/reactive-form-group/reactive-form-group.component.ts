import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-group',
  templateUrl: './reactive-form-group.component.html',
  styleUrls: ['./reactive-form-group.component.scss'],
})
export class ReactiveFormGroupComponent {
  contactForm: FormGroup = new FormGroup({
    name: new FormGroup({
      username: new FormControl(),
    }),
    phone: new FormControl(),
  });

  onSubmit() {
    console.info(this.contactForm.value);
    // get group value
    console.info(this.contactForm.get('name')?.value?.username);
    console.info(this.contactForm.get(['name', 'username'])?.value);
    console.info(this.contactForm.value.name.username);
  }
}

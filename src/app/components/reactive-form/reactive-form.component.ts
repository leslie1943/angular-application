import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('leslie'),
    phone: new FormControl('13413132233'),
  });

  onSubmit() {
    // this.contactForm.value();
    console.info('this.contactForm', this.contactForm);
  }
}

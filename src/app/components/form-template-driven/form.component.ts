import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  onSubmit(form: NgForm) {
    console.log('form.value', form.value);
    console.log('form.controls', form.controls);
    console.log('form.control', form.control);
  }

  onSubmitGroup(form: NgForm) {
    console.log('form.value', form.value);
    console.log('form', form);
  }
}

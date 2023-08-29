import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array',
  templateUrl: './reactive-form-array.component.html',
  styleUrls: ['./reactive-form-array.component.scss'],
})
export class ReactiveFormArrayComponent implements OnInit {
  ngOnInit(): void {
    this.addContact();
  }

  contactForm: FormGroup = new FormGroup({
    contacts: new FormArray([]),
  });

  // get生成的属性才是要在表单中使用的属性
  get contactsArray() {
    return this.contactForm.get('contacts') as FormArray;
  }

  get contactsControls() {
    return (this.contactForm.get('contacts') as FormArray)
      .controls as FormControl[];
  }

  addContact() {
    let newContact: FormGroup = new FormGroup({
      address: new FormControl(''),
      phone: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.min(2)]),
    });
    this.contactsArray.push(newContact);
    console.info('this.contactsArray', this.contactsArray);
  }

  removeContact(index: number) {
    this.contactsArray.removeAt(index);
  }
}

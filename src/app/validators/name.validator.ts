import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if (/\s/.test(control.value)) {
      return {
        cannotContainSpace: true,
      };
    }
    return null;
  }

  static isUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'admin') {
          resolve({ isUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}

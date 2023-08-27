import { Component } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-base-point',
  templateUrl: './base-point.component.html',
  styleUrls: ['./base-point.component.scss'],
})
export class BasePointComponent {
  person: { name: string; age: number } = { name: 'test', age: 10 };
  name = 'leslie';
  age = 20;
  title = 'angular-application';
  paragraph =
    '合集·Angular 终极教程合集·Angular 终极教程合集·Angular 终极教程合集·Angular 终极教程合集·Angular 终极教程合集·Angular 终极教程合集·Angular 终极教程合集·Angular 终极教程';

  getData(event: string) {
    alert(event);
  }

  constructor(public carService: CarService) {}

  change() {
    this.name = 'moon';
    this.age = 30;
    this.person.age = 100;
    this.person = {
      name: 'test',
      age: 25,
    };
  }
}

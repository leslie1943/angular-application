import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  person: { name: string; age: number } = { name: 'test', age: 10 };
  name = 'leslie';
  age = 20;
  title = 'angular-application';
  paragraph =
    '合集·Angular 终极教程合集·Angular 终极教程合集·Angular 终极教程合集·Angular 终极教程合集·Angular 终极教程合集·Angular 终极教程合集·Angular 终极教程合集·Angular 终极教程';

  getData(event: string) {
    alert(event);
  }

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

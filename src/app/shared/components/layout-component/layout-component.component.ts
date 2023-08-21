import { Component } from '@angular/core';

interface Task {
  person?: {
    name: string;
  };
}
interface Name {
  name: string;
}
@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.scss'],
})
export class LayoutComponentComponent {
  isActive: boolean = true;
  username: string = '';
  onSave($event: Event) {}

  dataList: Name[] = [{ name: 'leslie' }, { name: 'moon' }];

  task: Task = {};

  date = new Date();

  money = 2213;

  paragraph = 'test summary customize pipe';

  changeUserName() {
    this.username = 'test';
  }

  identify(index: number, item: Name) {
    return item.name;
  }
}

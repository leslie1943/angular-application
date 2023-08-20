import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.scss'],
})
export class LayoutComponentComponent {
  isActive: boolean = true;
  username: string = '';
  onSave($event: Event) {}

  changeUserName() {
    this.username = 'test';
  }
}

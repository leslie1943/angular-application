import { Component } from '@angular/core';
import { TestService } from '../services/test.service';
import { ComponentService } from '../services/component.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  providers: [ComponentService],
})
export class DemoComponent {
  constructor(
    public testService: TestService,
    public componentService: ComponentService
  ) {}
}

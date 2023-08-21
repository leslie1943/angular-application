import {
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent
  implements OnInit, AfterContentInit, AfterViewInit, OnChanges
{
  // 接收和赋值不一致需要这么写,否则可以省略形参
  @Input('name') name: string = '';
  @Input('age') age: number = 0;
  @Input('person') person!: { name: string; age: number };

  // 输出装饰器,这样在父组件中才能监听到
  @Output() sendData = new EventEmitter<string>();

  constructor() {
    console.info('constructor');
  }
  ngAfterViewInit(): void {
    console.info('ngAfterViewInit');
  }
  ngAfterContentInit(): void {
    console.info('ngAfterContentInit');
  }
  ngOnInit(): void {
    console.info('ngOnInit');
  }

  onClick() {
    this.sendData.emit('我是子组件中的数据');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes:', changes);
    console.info('ngOnChanges');
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule],
  // 如果想在其他的module或者在root module中使用 DemoComponent,需要export这个component
  exports: [DemoComponent],
})
export class DemoModule {}

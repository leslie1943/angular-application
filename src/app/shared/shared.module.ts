import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponentComponent } from './components/layout-component/layout-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponentComponent],
  imports: [CommonModule, FormsModule],
  // 导出了别的模块才能使用
  exports: [LayoutComponentComponent],
})
export class SharedModule {}

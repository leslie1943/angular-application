import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponentComponent } from './components/layout-component/layout-component.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from '../pipes/summary.pipe';

@NgModule({
  declarations: [LayoutComponentComponent, SummaryPipe],
  imports: [CommonModule, FormsModule],
  // 导出了别的模块才能使用
  exports: [LayoutComponentComponent, SummaryPipe],
})
export class SharedModule {}

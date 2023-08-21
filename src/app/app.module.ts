import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HoverDirective } from './directives/hover.directive';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  // 指令应该属于某一个模块才能被使用. 所以在 declarations 属性中
  // 管道应该属于某一个模块才能被使用. 所以在 declarations 属性中
  // SummaryPipe 在 SharedModule 被import后又被export了, 所以可以直接在AppModule中直接使用而不用再次显示的引入
  declarations: [AppComponent, HoverDirective, PersonComponent /**SummaryPipe */],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HoverDirective } from './directives/hover.directive';
import { PersonComponent } from './components/person/person.component';
import { DemoModule } from './demo/demo.module';
import { FormComponent } from './components/form-template-driven/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { BasePointComponent } from './components/base-point/base-point.component';
import { ReactiveFormGroupComponent } from './components/reactive-form-group/reactive-form-group.component';
import { ReactiveFormArrayComponent } from './components/reactive-form-array/reactive-form-array.component';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';
import { ReactiveFormBuildComponent } from './components/reactive-form-build/reactive-form-build.component';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { RoutesDemoComponent } from './components/routes-demo/routes-demo.component';
import { AboutComponent } from './pages/about/about.component';
import { CompanyComponent } from './pages/company/company.component';
import { IndustryComponent } from './pages/industry/industry.component';

@NgModule({
  // 指令应该属于某一个模块才能被使用. 所以在 declarations 属性中
  // 管道应该属于某一个模块才能被使用. 所以在 declarations 属性中
  // SummaryPipe 在 SharedModule 被import后又被export了, 所以可以直接在AppModule中直接使用而不用再次显示的引入
  declarations: [
    AppComponent,
    HoverDirective,
    PersonComponent,
    FormComponent,
    ReactiveFormComponent,
    BasePointComponent,
    ReactiveFormGroupComponent,
    ReactiveFormArrayComponent,
    ReactiveFormValidationComponent,
    ReactiveFormBuildComponent,
    FormDemoComponent,
    RoutesDemoComponent,
    AboutComponent,
    CompanyComponent,
    IndustryComponent,
  ],
  // 如果不引用某个module,是无法在程序中使用的
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DemoModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/**
 * const injector = ReflectiveInjector.resolveAndCreate([MailService])
 * const mailService = injector.get(MailService)
 * console.log(mailService)
 */

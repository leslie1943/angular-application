import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form-template-driven/form.component';
import { BasePointComponent } from './components/base-point/base-point.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormGroupComponent } from './components/reactive-form-group/reactive-form-group.component';
import { ReactiveFormArrayComponent } from './components/reactive-form-array/reactive-form-array.component';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';
import { ReactiveFormBuildComponent } from './components/reactive-form-build/reactive-form-build.component';

const routes: Routes = [
  { path: '', component: BasePointComponent },
  { path: 'base', component: BasePointComponent },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'reactive-form-group',
    component: ReactiveFormGroupComponent,
  },
  {
    path: 'reactive-form-array',
    component: ReactiveFormArrayComponent,
  },
  {
    path: 'reactive-form-validation',
    component: ReactiveFormValidationComponent,
  },
  {
    path: 'reactive-form-builder',
    component: ReactiveFormBuildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

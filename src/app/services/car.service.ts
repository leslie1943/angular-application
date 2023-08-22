import { Injectable } from '@angular/core';
import { DemoModule } from '../demo/demo.module';
import { AppModule } from '../app.module';

@Injectable({
  providedIn: AppModule,
})
export class CarService {
  carName: string = 'Benz';
  constructor() {}
}

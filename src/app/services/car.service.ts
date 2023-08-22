import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  carName: string = 'Benz';
  constructor() {}
}

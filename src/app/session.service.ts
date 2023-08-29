import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  listArr = [{ name: 'Hriday', surname: 'Jadhav' }];

  getData() {
    return this.listArr;
  }

  saveData(input: any) {
    return this.listArr.push(input);
  }
}

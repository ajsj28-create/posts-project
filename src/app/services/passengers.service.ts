import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passengers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {

  passArray: Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 }
      ]
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }]
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null
    }
  ]

  fetchAllPass() {
    return of(this.passArray)
  }

  patchPass(obj: Ipassenger): Observable<Ipassenger> {
    let ind = this.passArray.findIndex(ele => ele.id === obj.id)
    this.passArray[ind] = obj
    return of(obj)
  }

  deletePass(obj: Ipassenger): Observable<Ipassenger> {
    let ind = this.passArray.findIndex(ele => ele.id === obj.id)
    this.passArray.splice(ind, 1)
    return of(obj)
  }

  constructor() {}
}

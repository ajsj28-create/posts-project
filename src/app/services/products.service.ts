import { Injectable } from '@angular/core';
import { Iproduct, orderStatus } from '../models/products';
import { Observable, of } from 'rxjs';
import { UuidService } from './uuid.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArray: Array<Iproduct> = [
    {
      id: this.uuidService.uuid(),
      name: "Wireless Headphones",
      description: "Over-ear wireless headphones with noise cancellation, long battery life, and clear audio quality for daily use.",
      status: orderStatus.inprogress
    },
    {
      id: this.uuidService.uuid(),
      name: "Smart Watch",
      description: "Fitness-focused smartwatch with heart-rate monitoring, sleep tracking, notifications, and water resistance.",
      status: orderStatus.dispatched
    },
    {
      id: this.uuidService.uuid(),
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker delivering powerful sound, deep bass, and up to 12 hours of playback time.",
      status: orderStatus.delivered
    },
    {
      id: this.uuidService.uuid(),
      name: "Laptop Backpack",
      description: "Durable and lightweight laptop backpack with multiple compartments and water-resistant material.",
      status: orderStatus.inprogress
    },
    {
      id: this.uuidService.uuid(),
      name: "USB-C Power Bank",
      description: "High-capacity power bank supporting fast charging for smartphones, tablets, and other USB-C devices.",
      status: orderStatus.dispatched
    }
  ];

  constructor(
    private uuidService: UuidService
  ) {}

  fetchAllProducts(): Observable<Array<Iproduct>> {
    return of(this.productsArray)
  }

  postProduct(obj: Iproduct): Observable<Iproduct> {
    this.productsArray.unshift(obj)
    return of(obj)
  }

  markInProgress(obj: Iproduct): Observable<string> {
    let ind = this.productsArray.findIndex(ele => ele.id === obj.id)
    this.productsArray[ind].status = orderStatus.inprogress
    return of(`Product ${obj.name}'s status changed to In Progress !`)
  }

  markDispatched(obj: Iproduct): Observable<string> {
    let ind = this.productsArray.findIndex(ele => ele.id === obj.id)
    this.productsArray[ind].status = orderStatus.dispatched
    return of(`Product ${obj.name}'s status changed to Dispatched !`)
  }

  markDelivered(obj: Iproduct): Observable<string> {
    let ind = this.productsArray.findIndex(ele => ele.id === obj.id)
    this.productsArray[ind].status = orderStatus.delivered
    return of(`Product ${obj.name}'s status changed to Delivered !`)
  }

}

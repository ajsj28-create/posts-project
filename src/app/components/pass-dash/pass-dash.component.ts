import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/models/passengers';
import { PassengersService } from 'src/app/services/passengers.service';

@Component({
  selector: 'app-pass-dash',
  templateUrl: './pass-dash.component.html',
  styleUrls: ['./pass-dash.component.scss']
})
export class PassDashComponent implements OnInit {

  passArray: Array<Ipassenger> = [];
  checkInCount!: number;

  constructor(
    private _passService: PassengersService
  ) {}

  ngOnInit(): void {
    this.getAllPass()
    this.getCheckInCount()   
  }

  getAllPass() {
    this._passService.fetchAllPass().subscribe({
      next: res => {
        this.passArray = res
      },
      error: err => {}
    })
  }

  getCheckInCount() {
    this.checkInCount = this.passArray.filter(ele => ele.checkedIn).length
  }

}

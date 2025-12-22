import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/models/passengers';

@Component({
  selector: 'app-checkin-count',
  templateUrl: './checkin-count.component.html',
  styleUrls: ['./checkin-count.component.scss']
})
export class CheckinCountComponent implements OnInit {

  @Input() checkIns!: number;
  @Input() passArrayCo!: Array<Ipassenger>;

  constructor() {}

  ngOnInit(): void {
  }

}

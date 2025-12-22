import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/models/passengers';

@Component({
  selector: 'app-pass-list',
  templateUrl: './pass-list.component.html',
  styleUrls: ['./pass-list.component.scss']
})
export class PassListComponent implements OnInit {

  @Input() passArrayLi!: Array<Ipassenger>;

  constructor() {}

  ngOnInit(): void {
  }

}

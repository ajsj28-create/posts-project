import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ipost } from 'src/app/models/posts';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  data!: Ipost

  constructor(
    private _confirmDialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) getData: Ipost
  ) {
    this.data = getData
  }

  ngOnInit(): void {
  }

  onClose(select: boolean) {
    this._confirmDialogRef.close(select)
  }

}

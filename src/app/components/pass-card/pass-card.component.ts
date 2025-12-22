import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ipassenger } from 'src/app/models/passengers';
import { PassengersService } from 'src/app/services/passengers.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {

  @Input() passObjCa!: Ipassenger;
  isEditMode: boolean = false;
  @ViewChild('nameControl') nameControl!: ElementRef;
  @Output() checkInFunction: EventEmitter<null> = new EventEmitter()

  constructor(
    private _passService: PassengersService,
    private _snackbarService: SnackbarService,
    private _confirmDialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  onPassUpdate() {
    if(this.nameControl.nativeElement.value){
      let updatedObj = {...this.passObjCa, fullname: this.nameControl.nativeElement.value}
      this._passService.patchPass(updatedObj).subscribe({
        next: res => {
          this.isEditMode = false;
          this._snackbarService.showAlert(`Passenger with id ${res.id} updated successfully !`)
        },
        error: err => {}
      })
    }else{
      this._snackbarService.showAlert(`Passenger name can't be empty !`)
    }
  }

  onPassDelete() {
    let config = new MatDialogConfig()
    config.width = '400px'
    config.disableClose = true
    config.data = `Are you sure to delete passenger <strong>${this.passObjCa.fullname}</strong>?`
    this._confirmDialog.open(ConfirmComponent, config).afterClosed().subscribe({
      next: res => {
        if(res){
          this._passService.deletePass(this.passObjCa).subscribe({
            next: res => {
              this._snackbarService.showAlert(`Passenger with id ${res.id} deleted successfully !`)
              if(this.passObjCa.checkedIn){
                this.checkInFunction.emit()
              }
            },
            error: err => {}
          })
        }
      },
      error: err => {}
    })
  }

}

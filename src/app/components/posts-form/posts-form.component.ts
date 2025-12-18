import { AfterViewChecked, AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ipost } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.scss']
})
export class PostsFormComponent implements OnInit {

  @ViewChild('postForm') postForm!: NgForm;
  isEditMode: boolean = false;
  patchData!: Ipost;

  constructor(
    private _formDialog: MatDialogRef<PostsFormComponent>,
    private _uuidService: UuidService,
    private _postService: PostsService,
    private _snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) getData: Ipost
  ) {
    this.patchData = getData
  }

  ngOnInit(): void {
    setTimeout(() => {
      if(this.patchData){
        this.isEditMode = true
        this.postForm.form.patchValue(this.patchData)
      }
    })
  }

  onPostAdd() {
    if(this.postForm.valid){
      let obj = {...this.postForm.value, id: this._uuidService.uuid()}
      this.postForm.resetForm()
      this._formDialog.close()
      this._postService.postPost(obj).subscribe({
        next: res => { this._snackbarService.showAlert(res.res.msg) },
        error: err => {}
      })      
    }else{
      this._snackbarService.showAlert(`Fill all the required fields`)
    }
  }

  onPostUpdate() {
    if(this.postForm.valid){
      let obj = {...this.postForm.value, id: this.patchData.id}
      this.postForm.resetForm()
      this._formDialog.close()
      this._postService.patchPost(obj).subscribe({
        next: res => { this._snackbarService.showAlert(res.res.msg) },
        error: err => {}
      })      
    }else{
      this._snackbarService.showAlert(`Fill all the required fields`)
    }
  }

  onClose() {
    this._formDialog.close()
  }

}

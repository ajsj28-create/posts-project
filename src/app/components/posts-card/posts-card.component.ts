import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ipost } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss']
})
export class PostsCardComponent implements OnInit {

  @Input() postObj!: Ipost;
  editId!: string;

  constructor(
    private _postService: PostsService,
    private _confirmDialog: MatDialog,
    private _snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
  }

  onPostEdit(obj: Ipost) {
    this.editId = obj.id
    this._postService.openDialog(obj)
  }

  onPostDelete(obj: Ipost) {
    let config = new MatDialogConfig()
    config.width = '400px'
    config.disableClose = true
    config.data = `Are you sure to delete post <strong>${obj.title}</strong>?`
    this._confirmDialog.open(ConfirmComponent, config).afterClosed().subscribe({
      next: res => {
        if(res){
          this._postService.deletePost(obj).subscribe({
            next: res => { this._snackbarService.showAlert(res.res.msg) },
            error: res => {}
          })
        }
      },
      error: err => {}
    })
  }

}

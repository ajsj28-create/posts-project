import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-dash',
  templateUrl: './posts-dash.component.html',
  styleUrls: ['./posts-dash.component.scss']
})
export class PostsDashComponent implements OnInit {

  postsArray: Array<Ipost> = [];

  constructor(
    private _postService: PostsService
  ) {}

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    this._postService.fetchAll().subscribe({
      next: res => {
        this.postsArray = res.res.data
      },
      error: err => {}
    })
  }

  onOpen() {
    this._postService.openDialog()
  }

}

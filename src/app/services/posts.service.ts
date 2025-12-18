import { Injectable } from '@angular/core';
import { UuidService } from './uuid.service';
import { Ipost, Iresponse } from '../models/posts';
import { Observable, of } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostsFormComponent } from '../components/posts-form/posts-form.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsArray: Array<Ipost> = JSON.parse(localStorage.getItem('postsArray') as string) || [
    {
      id: this._uuidService.uuid(),
      userId: '101',
      title: "Understanding Angular Data Binding",
      content: "Angular provides different types of data binding such as interpolation, property binding, event binding, and two-way data binding to keep the view and model in sync. These mechanisms help developers create dynamic and interactive applications where changes in the data are immediately reflected in the UI and user actions automatically update the underlying model."
    },
    {
      id: this._uuidService.uuid(),
      userId: '102',
      title: "Getting Started with JavaScript Arrays",
      content: "JavaScript arrays allow you to store multiple values in a single variable and provide powerful methods like map, filter, reduce, and forEach for data manipulation. They are widely used for handling lists of data, looping through collections, and transforming datasets efficiently in both frontend and backend applications."
    },
    {
      id: this._uuidService.uuid(),
      userId: '103',
      title: "Template Driven Forms in Angular",
      content: "Template-driven forms rely on directives like ngModel and ngForm, making them easier to use for simple forms with built-in validation support. They are ideal for scenarios where form logic is minimal, allowing developers to focus more on the UI while Angular manages validation and form state internally."
    },
    {
      id: this._uuidService.uuid(),
      userId: '104',
      title: "Why TypeScript Improves Code Quality",
      content: "TypeScript adds static typing to JavaScript, helping developers catch errors early, improve readability, and build scalable applications. By enforcing type safety and better tooling support, it enables teams to maintain large codebases with fewer runtime issues and clearer contracts between components."
    },
    {
      id: this._uuidService.uuid(),
      userId: '105',
      title: "Introduction to REST APIs",
      content: "REST APIs follow standard HTTP methods such as GET, POST, PUT, and DELETE to enable communication between client and server in a structured way. They promote a stateless architecture, improve scalability, and are commonly used to connect web applications, mobile apps, and third-party services."
    }
  ];

  constructor(
    private _uuidService: UuidService,
    private _formDialog: MatDialog
  ) {}

  fetchAll(): Observable<Iresponse<Array<Ipost>>> {
    return of({
      success: true,
      res: {
        msg: `All posts fetched successfully!`,
        data: this.postsArray
      }
    })
  }

  postPost(obj: Ipost) {
    this.postsArray.push(obj)
    this.setLocalStorage()
    return of({
      success: true,
      res: {
        msg: `Post with id ${obj.id} is added successfully!`,
        data: obj
      }
    })
  }

  patchPost(obj: Ipost) {
    let ind = this.postsArray.findIndex(ele => ele.id === obj.id)
    this.postsArray[ind] = obj
    this.setLocalStorage()
    return of({
      success: true,
      res: {
        msg: `Post with id ${obj.id} is updated successfully!`,
        data: obj
      }
    })
  }

  deletePost(obj: Ipost) {
    let ind = this.postsArray.findIndex(ele => ele.id === obj.id)
    this.postsArray.splice(ind, 1)
    this.setLocalStorage()
    return of({
      success: true,
      res: {
        msg: `Post with id ${obj.id} is deleted successfully!`,
        data: obj
      }
    })
  }

  openDialog(obj?: Ipost) {
    let config = new MatDialogConfig()
    config.width = '500px'
    config.disableClose = true
    config.data = obj
    this._formDialog.open(PostsFormComponent, config)
  }

  setLocalStorage() {
    localStorage.setItem('postsArray', JSON.stringify(this.postsArray));
  }

}

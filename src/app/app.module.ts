import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostsDashComponent } from './components/posts-dash/posts-dash.component';
import { PostsFormComponent } from './components/posts-form/posts-form.component';
import { PostsCardComponent } from './components/posts-card/posts-card.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsDashComponent,
    PostsFormComponent,
    PostsCardComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
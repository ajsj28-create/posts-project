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
import { MatDividerModule } from '@angular/material/divider';

import { FormsModule } from '@angular/forms';
import { PassDashComponent } from './components/pass-dash/pass-dash.component';
import { PassListComponent } from './components/pass-list/pass-list.component';
import { PassCardComponent } from './components/pass-card/pass-card.component';
import { CheckinCountComponent } from './components/checkin-count/checkin-count.component';
import { ProductDashComponent } from './components/product-dash/product-dash.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsDashComponent,
    PostsFormComponent,
    PostsCardComponent,
    ConfirmComponent,
    PassDashComponent,
    PassListComponent,
    PassCardComponent,
    CheckinCountComponent,
    ProductDashComponent,
    ProductFormComponent,
    ProductCardComponent
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
    MatDialogModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { CategoryService } from './services/category.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    NavbarComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

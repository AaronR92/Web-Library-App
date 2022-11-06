import { IBook } from './model/book';
import { Component } from '@angular/core';
import { books } from './data/books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'web-library-app'

  books: IBook[] = books
}
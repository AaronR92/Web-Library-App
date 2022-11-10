import { IBook } from './model/book';
import {Component, OnInit} from '@angular/core';
import {BookService} from "./services/books.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private bookService: BookService) {}

  title = 'web-library-app'

  books: IBook[] = []

  ngOnInit(): void {
    this.bookService.getAll().subscribe(value => {
      this.books = value
    })
  }

  searchBooks(bookName: string): void {
    if (bookName != "") {
      this.bookService.getBooksByName(bookName).subscribe(value => {
        this.books = value
      })
    } else {
      this.bookService.getAll().subscribe(value => {
        this.books = value
      })
    }
  }

}

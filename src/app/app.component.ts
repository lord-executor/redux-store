import { Component } from '@angular/core';
import { selectBookCollection, selectBooks } from './books.selectors';
import { Observable } from 'rxjs';
import { Book } from './books.model';
import { GoogleBooksService } from './books.service';
import { Store } from '@ngrx/store';
import { BooksActions, BooksApiActions } from './books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public books: Observable<readonly Book[]>;
  public bookCollection: Observable<Book[]>;
 
  addBook(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
 
  removeBook(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
 
  constructor(
    private readonly booksService: GoogleBooksService,
    private readonly store: Store
  ) {
    this.books = this.store.select(selectBooks);
    this.bookCollection = this.store.select(selectBookCollection);
  }
 
  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}

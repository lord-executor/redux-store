import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './books.model';
 
@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient) {}
 
  getBooks(): Promise<Array<Book>> {
    return firstValueFrom(this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || [])));
  }
}
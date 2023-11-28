import { Component } from '@angular/core';
import { selectBookCollection, selectBooks } from './books.selectors';
import { Observable } from 'rxjs';
import { Book } from './books.model';
import { GoogleBooksService } from './books.service';
import { Store } from '@ngrx/store';
import { BooksActions, BooksApiActions } from './books.actions';
import { LayerInfo, MapState, Overlays } from './map.model';
import { backgroundLayer, backgroundLayerSelector, overlaysSelector } from './map.selectors';
import { addOverlayAction, clearOverlayAction, setBackgroundLayerAction } from './map.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public books: Observable<readonly Book[]>;
  public bookCollection: Observable<Book[]>;
  public backgroundLayer: Observable<LayerInfo | null>;
  public overlays: Observable<readonly Overlays[]>;
 
  constructor(
    private readonly booksService: GoogleBooksService,
    private readonly store: Store<MapState>
  ) {
    this.books = this.store.select(selectBooks);
    this.bookCollection = this.store.select(selectBookCollection);
    this.backgroundLayer = this.store.select(backgroundLayerSelector);
    this.overlays = this.store.select(overlaysSelector);
  }
 
  public ngOnInit() {
    this.booksService
      .getBooks()
      .then((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

  public addBook(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
 
  public removeBook(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  public setBgLayer(layerId: string): void {
    this.store.dispatch(setBackgroundLayerAction({ layerId }));
    //this.store.dispatch(setBackgroundLayerAction({ layerId: layerId }));
  }

  public addOverlay(overlayIndex: number): void {
    this.store.dispatch(addOverlayAction({ overlay: Overlays[overlayIndex] as unknown as Overlays}));
  }

  public clearOverlay(): void {
    this.store.dispatch(clearOverlayAction());
  }
}

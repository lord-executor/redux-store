import { HttpClientModule } from '@angular/common/http';
import { booksReducer } from './books.reducers';
import { collectionReducer } from './collection.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
        HttpClientModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}

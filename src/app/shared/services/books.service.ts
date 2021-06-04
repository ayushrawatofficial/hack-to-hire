import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }


  fetchBooks(): Observable<Book[]> {
    return this.http.get('http://localhost:3000/books')
      .pipe(map((res: any) => {
        return res;
      }))
  }
  
}

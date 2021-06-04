import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { BooksService } from '../shared/services/books.service';
import { Book } from '../shared/models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  bookList=new MatTableDataSource<any>();
  displayedColumns: string[] = ['uuid', 'title', 'author','category','borrowed','dueDate','action'];
  isAdmin =true;  

   @ViewChild(MatPaginator, {static: false})
   set paginator(value: MatPaginator) {
     if (this.bookList){
       this.bookList.paginator = value;
     }
   };

   @ViewChild(MatSort, {static: false})
   set sort(value: MatSort){
    if (this.bookList){
      this.bookList.sort = value;
    }
   };

  constructor(private bookService : BooksService, private router : Router) { }

  ngOnInit(): void {
    this.bookList.paginator = this.paginator;
    this.bookList.sort = this.sort;
     this.listBooks();
if(localStorage.getItem('role')=='admin'){
  this.isAdmin=true;
}
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.value.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.bookList.filter = filterValue;
  }

  listBooks(): any {
      this.bookService.fetchBooks()
    .subscribe((res: Book[]) => {
      this.bookList.data = res;
          
     });
    }


addBook(){

}

    ngOnDestroy(): void{
      this.isAdmin=false;
    }
  }
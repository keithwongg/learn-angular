import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from './cat';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css'
})
export class CatsComponent implements OnInit {
  cats! : Observable<Cat[]>;
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.cats = this.http.get<Cat[]>('https://api.thecatapi.com/v1/images/search?limit=10');
  }

}

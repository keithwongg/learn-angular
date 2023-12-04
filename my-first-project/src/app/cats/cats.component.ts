import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from './cat';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css'
})
export class CatsComponent implements OnInit {
  cats! : Cat[];
  storageKey: string = "cats";
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.UseLocalStorageOrCallApi();
  }

  refresh(): void {
    this.CallApiAndSetCatDataToLocalStorage();
  }

  private CallApiAndSetCatDataToLocalStorage()
  {
    this.http.get<Cat[]>('https://api.thecatapi.com/v1/images/search?limit=10')
    .subscribe(response => {
      this.cats = response;
      localStorage.setItem(this.storageKey, JSON.stringify(this.cats));
    });
  }

  private UseLocalStorageOrCallApi()
  {
    if (localStorage.getItem(this.storageKey) === null)
    {
      this.CallApiAndSetCatDataToLocalStorage();
      return;
    }
    this.cats = JSON.parse(localStorage.getItem(this.storageKey)!);
  }

}

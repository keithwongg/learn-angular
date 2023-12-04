import { Component, OnInit } from '@angular/core';
import { BusTimingsService } from '../bus-timings.service';
import { Services } from '../busstop';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'

@Component({
  selector: 'app-busstop',
  templateUrl: './busstop.component.html',
  styleUrl: './busstop.component.css'
})
export class BusstopComponent implements OnInit {
  timings!: Observable<Services[]>;
  // time!: BusStop[];
  constructor(private busTimings: BusTimingsService){}

  ngOnInit(): void {
    this.getTimings();
  }

  getTimings()
  {
    // this.busTimings.getTimings().subscribe((response => {this.timings = response;}));
    let test = this.busTimings.getTimings().subscribe(
      (res) => {
        console.log('tt', res);
      }
    );
    console.log('testing', this.timings);
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  results: any[];

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.search(this.searchTerm$).subscribe(results => {
      this.results = results;
    });
  }
}

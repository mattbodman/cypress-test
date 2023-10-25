import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemApiService {
  http = inject(HttpClient);
  fetchItems$(): Observable<string[]> {
    return this.http.get<string[]>('/items')
    .pipe(catchError(() => of(['australia', 'new zealand', 'japan', 'usa'])));
  }
}

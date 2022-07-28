import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hero } from './marvel-data.interface';

@Injectable({
  providedIn: 'root',
})
export class MarvelDataService {
  URL = 'http://localhost:3000/heros/';
  refreshData$ = new Subject<void>();
  dataSource = new BehaviorSubject<any>({});
  $data = this.dataSource.asObservable();

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.URL).pipe(
      map((data) => {
        return data.map((item) => {
          const heroData =  { ...item};
          this.dataSource.next(heroData);
          return heroData;
        });
      }),
    );
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.URL, hero).pipe(
      tap(()=>{
        this.refreshData$.next();
      })
    );
  }

  deleteHero(hero: Hero) {
    return this.http.delete(this.URL + hero.id).pipe(
      tap(() => {
        this.refreshData$.next();
      })
    );
  }

  updateHero(hero: Hero) {
    return this.http.put(this.URL + hero.id, hero).pipe(
      tap(() => {
        this.refreshData$.next();
      })
    );
  }
}

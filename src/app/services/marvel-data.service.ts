import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hero } from './marvel-data.interface';

@Injectable({
  providedIn: 'root',
})
export class MarvelDataService {
  private __URL = 'http://localhost:3000/heros/';
  private dataSource = new BehaviorSubject<any>({});
  $data = this.dataSource.asObservable();
  public __refreshData$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.__URL).pipe(
      map((data) => {
        return data.map((item) => {
          const heroData =  { ...item};
          this.dataSource.next(heroData);
          return heroData;
        });
      })
    );
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.__URL, hero).pipe(
      tap(()=>{
        this.__refreshData$.next();
      })
    );
  }

  deleteHero(hero: Hero) {
    return this.http.delete(this.__URL + hero.id).pipe(
      tap(() => {
        this.__refreshData$.next();
      })
    );
  }

  updateHero(hero: Hero) {
    return this.http.put(this.__URL + hero.id, hero).pipe(
      tap(() => {
        this.__refreshData$.next();
      })
    );
  }
}


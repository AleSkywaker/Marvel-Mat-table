import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hero } from './marvel-data.interface';

@Injectable({
  providedIn: 'root',
})
export class MarvelDataService {
  private URL = 'http://localhost:3000/heros/';
  private dataSource = new BehaviorSubject<any>({});
  $data = this.dataSource.asObservable();
  public __refreshData$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Hero[]>(this.URL).pipe(
      map((data) => {
        return data.map((item) => {
          const heroData =  { ...item};
          this.dataSource.next(heroData);
          return heroData;
        });
      })
    );
  }

  getGenderData() {
    return this.http.get<Hero[]>(this.URL).pipe(
      map((data) => {
        let newArray = [] as any;
        let object = {} as any;
        data.map((hero: Hero) => {
          if (hero.genderLabel in object) {
            object[hero.genderLabel]++;
          } else {
            object[hero.genderLabel] = 1;
          }
        });
        Object.entries(object).map(([key, value]) => {
          newArray.push({
            name: key,
            value: value,
          });
          return newArray;
        });
        return newArray;
      }),
      tap(() => {
        this.__refreshData$.next();
      })
    );
  }

  createHero(hero: Hero)  {
    return this.http.post<Hero>(this.URL, hero).pipe(
      tap(()=>{
        this.__refreshData$.next();
      })
    );
  }

  deleteHero(hero: Hero) {
    return this.http.delete(this.URL + hero.id).pipe(
      tap(() => {
        this.__refreshData$.next();
      })
    );
  }

  updateHero(hero: Hero) {
    console.log("hero service", hero);
    return this.http.put(this.URL + hero.id, hero).pipe(
      tap(() => {
        this.__refreshData$.next();
      })
    );
  }
}


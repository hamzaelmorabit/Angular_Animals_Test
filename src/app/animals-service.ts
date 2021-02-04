import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../domain/animal';
import { filter, map, } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable()
export class AnimalsService {

  constructor(private httpClient: HttpClient) { }

  // getAnimals() {
  //   return this.httpClient.get<any>('./../assets/fauna.json').(map((res: Animal[]) => res.json()));
  // }

  getAnimals() {

    return this.httpClient.get('./../assets/fauna.json')
      .pipe(map((resSampleData: Animal[]) => resSampleData));

  }



}
// .pipe((map((res: Animal[]) => res)));
//   }

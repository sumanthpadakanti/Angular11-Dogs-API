import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) {}
  // getRandomPics1():Observable<any> {
  //   return this.http.get("https://dog.ceo/api/breeds/image/random/5", {});
  //   }

  getAllBreeds():Observable<any> {
    return this.http.get("https://dog.ceo/api/breeds/list/all", {});
    }

    getRandomPics(breed, count):Observable<any> {
    return this.http.get(`https://dog.ceo/api/breed/`+breed +`/images/random/`+count, {});
    }
}

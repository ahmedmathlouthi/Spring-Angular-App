import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const url = "http://localhost:8090/Api/servlet/count";
const httpHeaders = new HttpHeaders({
  'Cache-Control': 'no-cache',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
});
const options = { headers: httpHeaders };
@Injectable({
  providedIn: 'root'
})
export class CountSignesService {

  constructor(private http: HttpClient) { }
  getSignesCount(text: string) {
    return this.http.post(url,text, options).
        pipe(
           map((data: any) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }
}

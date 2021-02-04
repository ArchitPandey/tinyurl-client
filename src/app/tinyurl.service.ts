import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class TinyurlService {

  url : string = 'http://localhost:7070/tinyurl/';

  constructor(private http : HttpClient) {  }

  getTinyURL(longurl : string) : Observable<HttpResponse<string>> {
    return this.http.post<string>( this.url, longurl, { observe: 'response'} );
  }

}

import { Injectable } from '@angular/core';
import { Blogpost } from './blogpost';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {

  private blogpostsUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient, 
  ) { }

  getBlogposts(): Observable<Blogpost[]> {
    return this.http.get<Blogpost[]>(this.blogpostsUrl);
  }

}

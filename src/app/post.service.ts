import { Injectable } from '@angular/core';
import { Blogpost } from './blogpost';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {

  // URL of the web API
  private blogpostsUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient, 
  ) { }

  /**
   * Gets the blogposts from the provided array. http.get returns an Observable.
   */
  getBlogposts(): Observable<Blogpost[]> {
    return this.http.get<Blogpost[]>(this.blogpostsUrl);
  }

}

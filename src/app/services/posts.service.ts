import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url ='http://jsonplaceholder.typicode.com/posts/'

  constructor(private http:HttpClient) { }
  getPost(){
    return this.http.get(this.url)
  }
  ///////get single post
  getSinglePost(id:any){
    return this.http.get(this.url + id)
  }
}

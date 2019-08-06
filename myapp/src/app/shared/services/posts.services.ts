import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Iposts} from '../model/posts';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class PostsServices {
    private postsUrl:string = 'https://jsonplaceholder.typicode.com/posts';
    public headers:HttpHeaders;
    constructor(private http: HttpClient){
        this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }
    getPosts():Observable<Iposts>{
   return this.http.get<Iposts>(this.postsUrl, {headers:this.headers});
    }
}
import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Ilogin} from '../model/login';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({providedIn:'root'})
export class LoginServices {
    private loginEndpoint = 'http://mobile.test.acorsociety.com/ideators/api/users/userloginasync';
    public headers:HttpHeaders;
 constructor(private http:HttpClient){
     this.headers = new HttpHeaders({'Content-Type':'application/json'})
 }
 userLogin(item:Ilogin):Observable<Ilogin>{
return this.http.post<Ilogin>(this.loginEndpoint, JSON.stringify(item), {headers: this.headers})
.pipe(map((item) => {
    if(item && item.UserIdentity){
        localStorage.setItem('currentUser', JSON.stringify(item));
    }
    return item;
}))

;
 }
}
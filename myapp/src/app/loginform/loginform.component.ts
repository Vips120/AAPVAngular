import { Component, OnInit } from '@angular/core';
import {Ilogin} from '../shared/model/login';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';
import { LoginServices } from '../shared/services/login.user';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  public Login:FormGroup;
  public error:string;
  constructor(private fb:FormBuilder, private loginServices: LoginServices,
    private router: Router
    ) { }

  ngOnInit() {
    this.Login = this.fb.group({
      'UserLogin': this.fb.group({
        'UserName': ['', [Validators.required]],
        'Password': ['', [Validators.required]]
      }) 
     });
  };
  LoginUser(data:Ilogin){
    console.log(data);
    this.loginServices
    .userLogin(data)
    .subscribe(item => {
      if(item.FirstName){
        alert('login successful');
        console.log(item);
        this.router.navigateByUrl('/home');
      } else {
       this.error = item.Error;
      }

    })
  }

}

import {Component} from '@angular/core';
@Component({
    selector: 'app-customer',
    template: `
    <h2 *ngIf="Title.length>=4; else error"
    class="alert alert-info"
    >{{Title}}</h2>
    <ng-template #error>
   <h2 class="alert alert-danger">Something went wrong</h2>
    </ng-template>
    <ul *ngFor="let course of courses; let i=index">
    <li> {{i}}-{{course.name}}</li>
    <li>{{course.price}}</li>
    <ul *ngFor="let js of course.courseJavascript">
    <li> {{js.name}}</li>
    <li>{{js.price}}</li>
    </ul>
    </ul>
    <hr/>
    <button type="button" class="btn btn-outline-primary"
     (click)="viewMedia='home'"
    >Home</button>
    &nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-outline-info"
    (click)="viewMedia='about'"
    >About</button>
<div class="container" *ngIf="viewMedia"
[ngSwitch]="viewMedia"
>
 <div class="row">
<h2 *ngSwitchCase="'home'">Home Section</h2>
<h2 *ngSwitchCase="'about'">About Section</h2>
<h2 *ngSwitchDefault>Not Found data</h2>
 
 </div>
</div>
<hr/>
<div class="row">
<div class="col-sm-4">
<div class="card text-white bg-primary">
  <ng-content select=".img"></ng-content>
  <div class="card-body">
    <h4 class="card-title">
    <ng-content select=".heading"></ng-content>
    </h4>
    <p class="card-text">Text</p>
  </div>
</div>
</div>
</div>


    `
})

export class CustomerComponent {
    viewMedia;
   
  Title:string = 'hell9ooioio';
  courses= [{
            name:"Angular",
            price:300
          
        }, {
          courseJavascript: [{name:"javascript",price:300}]
            }
          ,
          { name:"typescript",
          price:300},
           {name:"nodejs",
           price:300}];
    constructor(){}
}
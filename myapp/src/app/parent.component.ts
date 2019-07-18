import {Component} from '@angular/core';
@Component({
    selector: 'app-parent',
    template: `
    <div class="container">
      <div class="row">
      <div class="col-md-8">
        <h2>Parent Section:</h2>
        <h3 *ngIf="email">{{email.email}}</h3>
        <img
         *ngIf="imgurl"
        src="{{email.imgurl}}"
         width="100"
         height="100"
        >
        <app-child [userName]="user"
         (Eid)="AddUserEmail($event)"
        ></app-child>
      </div>
      </div>
    </div>
    `
})

export class ParentComponent {
    user:string = 'vipul';
    email:string;
     constructor(){}
     AddUserEmail(item){
         this.email = item;
       console.log(item) ;
     }
}
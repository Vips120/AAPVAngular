import {Component, Input , EventEmitter, Output} from '@angular/core';
@Component({
    selector: 'app-child',
    template: `
    <div class="container">
      <div class="row">
      <div class="col-md-8">
        <h2>Child Section:</h2>
        <h1>{{userName}}</h1>
        <button type="button" 
        (click)="AddUser()"
        class="btn btn-danger btn-md">Click Me</button>
      </div>
      </div>
    </div>
    
    
    `
})

export class ChildComponent {
     @Input() userName:string;
    data = {
        email:'vs@gmail.com',
          imgurl : '../assets/img/1.jpg'
    };

    @Output() Eid = new EventEmitter();
    constructor(){}
    AddUser(){
  this.Eid.emit(this.data);
    }
}
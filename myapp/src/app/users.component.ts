import {Component} from '@angular/core';
@Component({
    selector: 'app-users',
    template: `
    <ul  userRender>
    <li class="container">
    {{users.name | uppercase | lowercase}}
    </li>
    <li>{{users.rank | number}}</li>
    <li>{{users.floatNo | number:'2.2-2'}}</li>
    <li>{{users.salary | currency:'INR'}}</li>
    <li>{{users.date | date:'dd/MM/yyyy'}}</li>
    <li>{{users | json}}</li>
    </ul>
    <hr/>
    <p>{{heading | content: '15'}}</p>
    <img src="{{imgUrl}}">
    `
})
export class UserComponent {
    public users = {
    name: 'Tejas',
    rank:452355,
    floatNo:5.897547,
    salary: 4586777,
    date: new Date()
    };
    imgUrl:string = 'http://lorempixel.com/400/200/';
    heading = 'Flipkart Online Shopping App - Download app for a delightful shopping experience. Online shopping with Flipkart is very easy as you get to shop from the';
    constructor(){}
}
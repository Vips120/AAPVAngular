import {Component, Input} from '@angular/core';
@Component({
    selector: 'app-gender',
    template:`
    <button type="button" class="btn btn-md btn-danger"
    (click)="user=MaleInfo"
    [disabled]="user==MaleInfo"
    >Male</button>
    <button type="button" 
    (click)="user=femaleInfo"
    [disabled]="user==femaleInfo"
    class="btn btn-md btn-success">Female</button>    
    <div class="container">
    <div class="row">
    <div class="col" *ngIf="user">
    <img src="{{user.imgUrl}}">
    <h3>{{user.name}}</h3>
    </div>
    </div>
    </div>
    <hr/>
    <i class="fa fa-3x" aria-hidden="true"
    [class.fa-heart-o]="!likeHeart"
    [class.fa-heart]="likeHeart"
    (click)="HeartLikeLover()"
    ></i> {{likes}}

    `
})
export class GenderComponent{
    public user;
    @Input() likes:number;
   public likeHeart:boolean = false;
public MaleInfo = {
 name: 'Tejas',
 imgUrl:'../assets/img/face1.jpg'
};
public femaleInfo = {
    name:'tejasvi',
    imgUrl: '../assets/img/face2.jpg'
};
    constructor(){}
    HeartLikeLover(){
this.likeHeart = !this.likeHeart;
this.likes += this.likeHeart ? 1 : -1;
    }
}
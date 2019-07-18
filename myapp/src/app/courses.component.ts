import {Component} from '@angular/core';
import {CourseDetail} from './courses';
import { Iproduct } from './shared/model/product';
@Component({
    selector: 'app-course',
   template: `
   <h1>{{heading1}}</h1>
   <hr/>
<ul *ngFor="let course of courseDetails"
 
 [ngClass]="{
   item1: isActive,
   item2 : !isActive
 }"
>
<li>{{course}}</li>
</ul>
<h1>{{heading2}}</h1>
<hr/>
<ul *ngFor="let mobile of mobileDevice">
<li
  (click)="Action()"
    [ngStyle]="{
          'backgroundColor': isActive ? 'red ': 'green',
       'color' : isActive ? 'white': 'black'
    }"
>{{mobile}}</li>
</ul>
<button type="button" class="btn btn-secondary">Secondary</button>
<hr/>
<i class="fa" aria-hidden="true"
 (click)="HeartLike()"
 [class.fa-heart-o]="!activeHeart"
 [class.fa-heart]="activeHeart"
></i>

<app-product [ProductDetails]="productInfo" (newProduct)="AddPro($event)"></app-product>
<img src="{{imgUrl1 | default: 'http://lorempixel.com/400/200/': false}}">

   `,
   styles:[`
     ul li {
         list-style-type:none
     }
   .item1 {
     width:400px;
     height:400px;
     background-color:red;
    
   }
   .item2 {
    width:200px;
    height:200px;
    background-color:blue;
   
  }
   `]
})

export class CourseComponent {
  activeHeart:boolean = false;
  imgUrl1:string= "";
  isActive:boolean = false;
    heading1= 'Course Details';
    heading2 = 'Mobile Brand Details'
      course:string = 'Angular';
      courseDetails:string[];
      mobileDevice:string[];

    constructor(private courseDetail: CourseDetail){
//  let details = new CourseDetail();
 this.courseDetails = courseDetail.getCourse();
 this.mobileDevice = courseDetail.getMobileDevice();
    }
    Action(){
      this.isActive = !this.isActive;
    };
    HeartLike(){
      this.activeHeart = !this.activeHeart;
    };
    public productInfo:Iproduct[] = [{
      name:'laptop',
      price:44000,
      imgUrl:'../assets/img/logos/bbc.png',
      rating:4
    },  
    {
      name:'mobile',
      price:4400,
      imgUrl:'../assets/img/logos/cnn.png',
      rating:4
    },
    {
      name:'AC',
      price:34000,
      imgUrl:'../assets/img/logos/guardian.png',
      rating:4
    },
    {
      name:'Tejas',
      price:40,
      imgUrl:'../assets/img/logos/telegraph.png',
      rating:1
    }
  ];

  AddPro(item:Iproduct){
    this.productInfo.unshift(item);
  }

}
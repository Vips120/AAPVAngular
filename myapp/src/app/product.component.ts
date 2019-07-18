import {Component,Input,Output,EventEmitter} from '@angular/core';
import { Iproduct } from './shared/model/product';
@Component({
    selector: 'app-product',
    template: `
    <div class="container">
    <div class="row">
    <div class="col">
    newProduct:
    <input type="text" placeholder="eneter name"
    #name
    >
    <input type="text" placeholder="eneter price"
    #price
    >
    <input type="text" placeholder="eneter rating"
    #rating
    >
    <button type="button" (click)="AddProduct(name.value,price.value,rating.value)">Submit</button>
    
    </div>
    <div class="col">
    <table class="table table-bordered table-inverse table-responsive">
  <thead class="thead-inverse">
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Image</th>
      <th>Rating</th>
    </tr>
    </thead>
    <tbody *ngFor="let pro of ProductDetails">
      <tr>
        <td scope="row">
        {{pro.name}}
        </td>
        <td>{{pro.price | currency:'USD'}}</td>
        <td><img src="{{pro.imgUrl}}" class="img-responsive"
         width="50" height="50"
        ></td>
        <td>{{pro.rating}}</td>
      </tr>
    </tbody>
</table>

    
    </div>
    </div>
    </div>
    `
})
export class ProductComponent {
@Input() ProductDetails:Iproduct;
@Output() newProduct = new EventEmitter<Iproduct>();
public imgurl='../assets/img/1.jpg';
    constructor(){}
    AddProduct(name:string,price:number,rating:number){
        let data = {name:name,price:price,rating:rating,imgUrl:this.imgurl};
   this.newProduct.emit(data);
    }
}
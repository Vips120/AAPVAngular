import { Component, OnInit,ElementRef } from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import * as opt from 'rxjs/operators';
import {PostsServices} from '../shared/services/posts.services';
import { Iposts } from '../shared/model/posts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public allPosts:Iposts;
  constructor(private el: ElementRef, private postServices: PostsServices) { }

  ngOnInit() {
   let data = this.el.nativeElement.querySelector('#search');
    let search:Observable<any> = fromEvent(data, 'keyup')
    .pipe(opt.map((e:any) => e.target.value
    ),
    opt.filter(text => text.length >=4),
    opt.debounceTime(2000)
    );
    search.subscribe(item => {
      console.log(item);
    });

    this.postServices
    .getPosts()
    .subscribe(data => {
      this.allPosts = data;
      console.log(data);
    })
  }

}

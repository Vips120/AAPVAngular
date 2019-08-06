import {Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';
@Directive({
  selector:'[userRender]'  
})

export class UserDirective {
    // @HostBinding('class.container') isActive = false;
@HostBinding('class.open') isActive = false;
    constructor(public el: ElementRef, public Rd: Renderer){
        // this.Rd.setStyle(this.el.nativeElement , 'backgroundColor', 'red');
        // this.Rd.setStyle(this.el.nativeElement , 'color', 'white');
        // this.Rd.setStyle(this.el.nativeElement , 'fontSize', '40px');
        // this.el.nativeElement.style.backgroundColor = 'red';
        // this.el.nativeElement.style.color = "white";
        // this.el.nativeElement.style.fontSize = "30px";
    };
@HostListener('click') onclick() {
this.isActive = !this.isActive;
}

    // @HostListener('mouseenter') onmouseenter() {
    //   let item =  this.el.nativeElement.querySelector('.container');
    //   console.log(item);
    //   this.isActive = true;
    //     this.Rd.setElementStyle(item, 'backgroundColor', 'red');
    //     this.Rd.setElementStyle(item , 'color', 'white');
    //     this.Rd.setElementStyle(item, 'fontSize', '40px');
    // } 
    // @HostListener('mouseleave') onmouseleave() {
    //     let item =  this.el.nativeElement.querySelector('.container');
    //     this.isActive = false;
    //     this.Rd.setElementStyle(item, 'backgroundColor', 'white');
    //     this.Rd.setElementStyle(item, 'color', 'black');
    //     this.Rd.setElementStyle(item , 'fontSize', '20px');
    // };
}
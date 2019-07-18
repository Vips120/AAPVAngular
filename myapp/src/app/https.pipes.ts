import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'default'
})

export class ProPipe implements PipeTransform {
    transform(val:string,arg:string,imgValue:boolean=false){
         let img = "";
         console.log(imgValue);
         if(val){
             img= val;
         }
        else{
            img = arg;
            console.log(img);
        } 
         if(imgValue){
             if(img.indexOf('https') == -1){
               img = img.replace('http','https');
                //  return img;
             }
         }
         console.log(img);        
         return img;
    }
}
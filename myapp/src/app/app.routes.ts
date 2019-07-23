import {Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';

export const routes:Route[]=[
    {
       path:'',
       component: HomeComponent
    },
    {
 path:'home',
 component:HomeComponent
},
{
    path:'about',
    component:AboutComponent,
    children:[{
        path:'about1',
        component:About1Component
    },
   {
       path:'about2/:id',
       component:About2Component
   }
]
}
]
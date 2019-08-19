import {Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthGuard } from './shared/authguard/authguard';

export const routes:Route[]=[
    {
       path:'',
       component: HomeComponent
    },
    {
 path:'home',
 component:HomeComponent,
 canActivate: [AuthGuard]
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
},
   {
       path:'login',
       component:LoginformComponent
   }
]
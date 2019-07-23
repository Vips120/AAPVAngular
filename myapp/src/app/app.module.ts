import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourseComponent} from './courses.component';
import {CourseDetail} from './courses';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { CustomerComponent } from './customer.component';
import { UserComponent } from './users.component';
import { UserPipes } from './users.pipes';
import { UserDirective } from './users.directives';
import { GenderComponent } from './genderComponent';
import { ProductComponent } from './product.component';
import { ProPipe } from './https.pipes';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TemplateComponent } from './templateForm/template.component';
import { ReactiveComponent } from './reactiveForm/reactiveForm.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ParentComponent,
    ChildComponent,
    CustomerComponent,
    UserComponent,
    UserPipes,
    UserDirective,
    GenderComponent,
    ProductComponent,
    ProPipe,
    TemplateComponent,
    ReactiveComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    About1Component,
    About2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CourseDetail],
  bootstrap: [AppComponent]
})
export class AppModule { }

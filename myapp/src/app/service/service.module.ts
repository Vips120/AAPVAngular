import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';
import {RouterModule} from '@angular/router';
import { servicesRoutes } from './service/service.routes';
@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(servicesRoutes)
  ]
})
export class ServiceModule { }

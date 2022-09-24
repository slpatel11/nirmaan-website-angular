import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { StandardModule } from '../standard/standard.module';
import { HomeComponent } from '../standard/home/home.component';
import { AboutusComponent } from '../standard/aboutus/aboutus.component';
import { ContactusComponent } from '../standard/contactus/contactus.component';
import { ServicesComponent } from '../standard/services/services.component';

const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'services',component:ServicesComponent}
]

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    StandardModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    ContainerComponent
  ]
})
export class SPAModule { }

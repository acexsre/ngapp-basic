import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpselladdonsComponent } from './upselladdons/upselladdons.component';
import { RoomserviceComponent } from './roomservice/roomservice.component';
import { HealthcheckComponent } from './healthcheck/healthcheck.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: UpselladdonsComponent,
    path:'addons'
  },
  {
    component: RoomserviceComponent,
    path: 'roomsvc'
  },
  {
    component: HealthcheckComponent,
    path: 'health'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
